import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../redux/redux-hooks';
import { getPolution } from '../redux/polution/polutionSlice';
import '../styles/Town.css';

const Town = ({ townId, townName, darker }) => {
  const dispatch = useAppDispatch();
  const classTag = darker ? 'town-card-darker' : 'town-card';
  const path = `details/${townName}`;
  const handler = (name) => {
    dispatch(getPolution(name));
  };
  return (
    <div className={classTag}>
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
      <h2 className="town-text">{townName.toUpperCase()}</h2>
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
  darker: PropTypes.bool.isRequired,
};

export default Town;
