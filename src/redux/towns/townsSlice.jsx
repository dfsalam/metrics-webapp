import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url1 = 'https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=Boyacá';
const url2 = (town) => (`http://api.openweathermap.org/geo/1.0/direct?q=${town},CO,&limit=10&appid=2507b961d3c371ceef0ec43e83171164`);
export const getCoordinates = createAsyncThunk('towns/getCoordinates',
  async (town) => {
    try {
      const response = await fetch(url2(town));
      const data = await response.json();
      return data;
    } catch (error) {
      return error.message();
    }
  });
export const getTowns = createAsyncThunk('towns/getTowns',
  async () => {
    try {
      const response = await fetch(url1);
      const data = await response.json();
      let newObj = {};
      const newData = [];
      data.forEach((e) => {
        newObj = {
          townId: e.c_digo_dane_del_municipio,
          townName: e.municipio,
        };
        newData.push(newObj);
      });
      return newData;
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
        towns: action.payload,
      }))
      .addCase(getTowns.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default townsSlice.reducer;
