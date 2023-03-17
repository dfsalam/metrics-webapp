import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../redux/redux-hooks';
import { getPolution } from '../redux/polution/polutionSlice';

const Town = ({ townId, townName }) => {
  const dispatch = useAppDispatch();
  const path = `details/${townName}`;
  const handler = (name) => {
    console.log(name);
    dispatch(getPolution(name));
  };
  return (
    <NavLink to={path}>
      <Button id={townId} onClick={() => handler(townName)}>{townName}</Button>
    </NavLink>
  );
};

Town.propTypes = {
  townId: PropTypes.string.isRequired,
  townName: PropTypes.string.isRequired,
};

export default Town;
