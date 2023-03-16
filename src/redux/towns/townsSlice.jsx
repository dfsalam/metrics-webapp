import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=Boyacá';
export const getTowns = createAsyncThunk('towns/getTowns',
  async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      return error.message();
    }
  });

const initialState = {
  towns: [],
  isLoading: true,
};

const townsSlice = createSlice({
  name: 'towns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTowns.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getTowns.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        Towns: action.payload,
      }))
      .addCase(getTowns.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default townsSlice.reducer;
