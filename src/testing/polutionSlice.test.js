import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Detail from '../components/Detail';
import store from '../redux/store';

const mockStore = configureStore([]);

describe('Polution redux state tests', () => {
  it('Expect to initially set polution to an empty object', () => {
    const state = store.getState().polution;
    const initialState = {
      polution: [], isLoading: true,
    };
    expect(state).toEqual(initialState);
  });
  it('Expect to display polution data from mockStore', () => {
    const polution = {
      coord: {
        lon: '-73.3616',
        lat: '5.5324',
      },
      list: [
        {
          main: {
            aqi: 1,
          },
          components: {
            co: '293.73',
            no: '3.69',
            no2: '6.17',
            o3: '0.31',
            so2: '0.33',
            pm2_5: '5.04',
            pm10: '5.69',
            nh3: '1.77',
          },
          dt: '1679033943',
        },
      ],
    };

    const state = {
      polution: {
        polution,
        isLoading: true,
      },
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <Detail town="Tunja" />
      </Provider>,
    );
    const name = screen.getByText('CO (Carbon monoxide), 293.73 μg/m3');
    expect(name).not.toBeNull();
    expect(store.getState).toMatchSnapshot();
  });
});
