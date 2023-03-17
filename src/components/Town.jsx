import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../redux/redux-hooks';
import { getPolution } from '../redux/polution/polutionSlice';
import '../styles/Town.css';

const Town = ({ townId, townName }) => {
  const dispatch = useAppDispatch();
  const path = `details/${townName}`;
  const handler = (name) => {
    dispatch(getPolution(name));
  };
  return (
    <div className="town-card">

      <button
        className="town-button"
        type="button"
        id={townId}
        onClick={() => handler(townName)}
      >
        <NavLink to={path}>
          <span className="material-symbols-outlined arrow">
            arrow_circle_right
          </span>
        </NavLink>
      </button>

      <h2 className="town-text">{townName}</h2>
      <h3 className="town-text">
        ID:
        {townId}
      </h3>
    </div>

  );
};

Town.propTypes = {
  townId: PropTypes.string.isRequired,
  townName: PropTypes.string.isRequired,
};

export default Town;
