import React from 'react';
import PropTypes from 'prop-types';
import { useAppSelector } from '../redux/redux-hooks';
import '../styles/Detail.css';
import image from '../img/map.jpg';

const Detail = ({ town }) => {
  const { polution } = useAppSelector((state) => state.polution);
  if (polution.length === 0) {
    return (<h3>Is loading...</h3>);
  }
  const { lat, lon } = polution.coord;
  const {
    co, no, no2, o3, pm25, pm10, so2,
  } = polution.list[0].components;
  return (
    <div className="detail-container">
      <h2>{town}</h2>
      <div>
        <div>
          <h3>
            Latitud:
            {' '}
            {lat}
          </h3>
          <h3>
            Longitud:
            {' '}
            {lon}
          </h3>
        </div>
        <img alt="map" src={image} />
      </div>
      <h3>
        CO (Carbon monoxide),
        {' '}
        {co}
        {' '}
        μg/m3
      </h3>
      <h3>
        NO (Nitrogen monoxide),
        {' '}
        {no}
        {' '}
        μg/m3
      </h3>
      <h3>
        NO2 (Nitrogen dioxide),
        {' '}
        {no2}
        {' '}
        μg/m3
      </h3>
      <h3>
        O3 (Ozone),
        {' '}
        {o3}
        {' '}
        μg/m3
      </h3>
      <h3>
        SO2 (Sulphur dioxide),
        {' '}
        {no}
        {' '}
        μg/m3
      </h3>
      <h3>
        PM2.5 (Fine particles matter),
        {' '}
        {pm25}
        {' '}
        μg/m3
      </h3>
      <h3>
        PM10 (Coarse particulate matter),
        {' '}
        {pm10}
        {' '}
        μg/m3
      </h3>
      <h3>
        NH3 (Ammonia),
        {' '}
        {so2}
        {' '}
        μg/m3
      </h3>
    </div>
  );
};

Detail.propTypes = {
  town: PropTypes.string.isRequired,
};

export default Detail;
