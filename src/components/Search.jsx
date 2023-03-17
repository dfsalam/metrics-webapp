import React from 'react';
import { useAppDispatch } from '../redux/redux-hooks';
import { getTowns, searchTown } from '../redux/towns/townsSlice';
import '../styles/Search.css';

const Search = () => {
  const dispatch = useAppDispatch();
  const inp = document.getElementById('searchInput');
  const handler = (desired) => {
    inp.addEventListener('keydown', (event) => {
      const { key } = event;
      if (key === 'Backspace') {
        dispatch(getTowns());
      }
    });
    dispatch(searchTown(desired));
  };

  return (
    <input type="text" id="searchInput" placeholder="Search..." onChange={(e) => handler(e.target.value)} />
  );
};

export default Search;
