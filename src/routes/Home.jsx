import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import TownContainer from '../components/TownContainer';
import { getTowns } from '../redux/towns/townsSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
  } = useAppSelector((state) => state.towns);

  useEffect(() => {
    dispatch(getTowns());
  }, [dispatch]);

  if (isLoading) {
    return (<h2>Is loading .....</h2>
    );
  }

  return (<TownContainer />);
};

export default Home;
