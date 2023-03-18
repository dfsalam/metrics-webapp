import React from 'react';
import { useAppDispatch } from '../redux/redux-hooks';
import { searchTown } from '../redux/towns/townsSlice';
import '../styles/Search.css';

const Search = () => {
  const dispatch = useAppDispatch();
  const handler = (desired) => {
    dispatch(searchTown(desired.toLowerCase()));
  };

  return (
    <input type="text" id="searchInput" placeholder="Search..." onChange={(e) => handler(e.target.value)} />
  );
};

export default Search;
