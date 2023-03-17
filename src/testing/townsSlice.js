import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Town from '../components/Town';
import store from '../redux/store';

const mockStore = configureStore([]);

describe('Towns redux state tests', () => {
  it('Expect to initially set towns to an empty object', () => {
    const state = store.getState().towns;
    const initialState = {
      towns: [], isLoading: true,
    };
    expect(state).toEqual(initialState);
  });
  it('Expect to display towns data from mockStore', () => {
    const towns = 
    [
      {
        "region": "Región Centro Oriente",
        "c_digo_dane_del_departamento": "15",
        "departamento": "Boyacá",
        "c_digo_dane_del_municipio": "15.476",
        "municipio": "Motavita"
      },
    ];

    const state = {
      towns: {
        towns,
        isLoading: true,
      },
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <BrowserRouter><Town townId="15.476" townName="Motavita" /></BrowserRouter>
      </Provider>,
    );
    const name = screen.getByText('Motavita');
    expect(name).not.toBeNull;
    expect(store.getState).toMatchSnapshot();
  });
});
