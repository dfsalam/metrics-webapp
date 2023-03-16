import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Town = ({ townId, townName }) => {
  const handler = (name) => {
    console.log(name);
  };
  return (
    <Button id={townId} onClick={() => handler({ townName })}>{townName}</Button>
  );
};

Town.propTypes = {
  townId: PropTypes.string.isRequired,
  townName: PropTypes.string.isRequired,
};

export default Town;
