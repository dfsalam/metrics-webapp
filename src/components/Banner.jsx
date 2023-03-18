import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Banner.css';

const Banner = ({ title, sub1, sub2 }) => (
  <div className="banner-container">
    <div className="banner-text">
      <h2>{title}</h2>
      <h3>{sub1}</h3>
      <h3>{sub2}</h3>
    </div>
  </div>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  sub1: PropTypes.string.isRequired,
  sub2: PropTypes.string,
};

Banner.defaultProps = {
  sub2: '',
};

export default Banner;
