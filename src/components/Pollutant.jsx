import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Pollutant.css';

const Pollutant = ({ name, value }) => {
  const output = `${value} μg/m`;
  return (
    <div className="pol-container">
      <h3 className="pol-text">{name}</h3>
      <h3 className="pol-text">
        {output}
        <sup>3</sup>
      </h3>
    </div>
  );
};

Pollutant.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Pollutant;
