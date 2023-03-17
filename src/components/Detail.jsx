import React from 'react';
import PropTypes from 'prop-types';
import { useAppSelector } from '../redux/redux-hooks';

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
      <h3>
        Сoncentration of CO (Carbon monoxide),
        {' '}
        {co}
        {' '}
        μg/m3
      </h3>
      <h3>
        Сoncentration of NO (Nitrogen monoxide),
        {' '}
        {no}
        {' '}
        μg/m3
      </h3>
      <h3>
        Сoncentration of NO2 (Nitrogen dioxide),
        {' '}
        {no2}
        {' '}
        μg/m3
      </h3>
      <h3>
        Сoncentration of O3 (Ozone),
        {' '}
        {o3}
        {' '}
        μg/m3
      </h3>
      <h3>
        Сoncentration of SO2 (Sulphur dioxide),
        {' '}
        {no}
        {' '}
        μg/m3
      </h3>
      <h3>
        Сoncentration of PM2.5 (Fine particles matter),
        {' '}
        {pm25}
        {' '}
        μg/m3
      </h3>
      <h3>
        Сoncentration of PM10 (Coarse particulate matter),
        {' '}
        {pm10}
        {' '}
        μg/m3
      </h3>
      <h3>
        Сoncentration of NH3 (Ammonia),
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
