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
    towns,
    townsSearch,
  } = useAppSelector((state) => state.towns);

  const length = townsSearch.length > 0 ? townsSearch.length : towns.length;
  const sub1 = `${length} towns`;
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
      <Banner title="BOYACÁ" sub1={sub1} />
      <Search />
      <TownContainer />
    </div>
  );
};

export default Home;
