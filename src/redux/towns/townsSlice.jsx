import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url1 = 'https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=Boyacá';

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
  townsSearch: [],
  isLoading: true,
  searching: false,
};

const townsSlice = createSlice({
  name: 'towns',
  initialState,
  reducers: {
    searchTown: (state, action) => ({
      ...state,
      townsSearch: state.towns.filter(
        (town) => town.townName.toLowerCase().includes(action.payload),
      ),
      searching: true,
    }),
    setInicial: (state) => ({
      ...state,
      townsSearch: [],
      searching: false,
    }),
  },
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

export const { searchTown, setInicial } = townsSlice.actions;
export default townsSlice.reducer;
