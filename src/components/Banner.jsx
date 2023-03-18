import React from 'react';
import { useAppSelector } from '../redux/redux-hooks';
// import map from '../img/boyaca-in-colombia.jpg';
import '../styles/Banner.css';

const Banner = () => {
  const { towns, townsSearch } = useAppSelector((state) => state.towns);
  const length = townsSearch.length > 0 ? townsSearch.length : towns.length;

  return (
    <div className="banner-container">
      <div className="banner-text">
        <h2>BOYACÁ</h2>
        <h3>
          {length}
          {' '}
          towns
        </h3>
      </div>
    </div>
  );
};

export default Banner;
