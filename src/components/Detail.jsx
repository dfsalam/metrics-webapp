import React from 'react';
import PropTypes from 'prop-types';
import { useAppSelector } from '../redux/redux-hooks';
import Banner from './Banner';
import Pollutant from './Pollutant';
import '../styles/Detail.css';

const Detail = ({ town }) => {
  const { polution } = useAppSelector((state) => state.polution);
  if (polution.length === 0) {
    return (<h3>Is loading...</h3>);
  }
  const { lat, lon } = polution.coord;
  const sub1 = `Latitude: ${lat}`;
  const sub2 = `Longitude: ${lon}`;
  const keyValues = Object.entries(polution.list[0].components);

  return (
    <div className="detail-container">
      <Banner
        title={town.toUpperCase()}
        sub1={sub1}
        sub2={sub2}
      />
      <h2 className="cntTitle">TOWN POLLUTANTS</h2>
      <section className="pol-section">
        {keyValues.map(([key, value]) => {
          const name = key.toUpperCase();
          return (
            <Pollutant
              key={key}
              name={name}
              value={value}
            />
          );
        })}
      </section>

    </div>
  );
};

Detail.propTypes = {
  town: PropTypes.string.isRequired,
};

export default Detail;
