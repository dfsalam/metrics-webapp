import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getCoordinates = async (town) => {
  try {
    const url2 = `http://api.openweathermap.org/geo/1.0/direct?q=${town},CO,&limit=10&appid=2507b961d3c371ceef0ec43e83171164`;
    const response = await fetch(url2);
    const data = await response.json();
    let newData = data.filter((item) => item.state === 'Boyacá');
    newData = newData.length > 0 ? newData[0] : newData;
    return newData;
  } catch (error) {
    return error.message();
  }
};
export const getPolution = createAsyncThunk('polution/getPolution',
  async (town) => {
    try {
      const { lat, lon } = await getCoordinates(town);
      const url3 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=2507b961d3c371ceef0ec43e83171164`;
      const response = await fetch(url3);
      const data = await response.json();
      return data;
    } catch (error) {
      return error.message();
    }
  });

const initialState = {
  polution: [],
  isLoading: true,
};

const polutionSlice = createSlice({
  name: 'polution',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPolution.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getPolution.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        polution: action.payload,
      }))
      .addCase(getPolution.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default polutionSlice.reducer;
