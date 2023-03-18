import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import TownContainer from '../components/TownContainer';
import { getTowns, setInicial } from '../redux/towns/townsSlice';
import Search from '../components/Search';
import Banner from '../components/Banner';

const Home = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
  } = useAppSelector((state) => state.towns);

  useEffect(() => {
    dispatch(getTowns());
    dispatch(setInicial());
  }, [dispatch]);

  if (isLoading) {
    return (<h2>Is loading .....</h2>
    );
  }

  return (
    <div>
      <Banner />
      <Search />
      <TownContainer />
    </div>
  );
};

export default Home;
