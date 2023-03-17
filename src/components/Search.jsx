import React from 'react';
import { useAppDispatch } from '../redux/redux-hooks';
import { getTowns, searchTown } from '../redux/towns/townsSlice';

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
    <input id="searchInput" placeholder="Write your desired town" onChange={() => handler(inp.value)} />
  );
};

export default Search;
