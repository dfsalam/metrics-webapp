import { configureStore } from '@reduxjs/toolkit';
import townsReducer from './towns/townsSlice';
import polutionReducer from './polution/polutionSlice';

const store = configureStore({
  reducer: {
    towns: townsReducer,
    polution: polutionReducer,
  },
});

export default store;
