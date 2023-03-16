import { configureStore } from '@reduxjs/toolkit';
import townsReducer from './towns/townsSlice';

const store = configureStore({
  reducer: {
    towns: townsReducer,
  },
});

export default store;
