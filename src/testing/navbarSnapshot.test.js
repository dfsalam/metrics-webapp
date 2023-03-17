import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import store from '../redux/store';

const provider = (component) => (
  <Provider store={store}>
    <BrowserRouter>{component}</BrowserRouter>
  </Provider>
);

describe('Components render correctly', () => {
  test('Navbar', () => {
    const tree = renderer
      .create(provider(<Navbar />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
