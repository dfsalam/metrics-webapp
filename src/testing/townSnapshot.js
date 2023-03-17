import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Town from '../components/Town';
import store from '../redux/store';

const provider = (component) => (
  <Provider store={store}>
    <BrowserRouter>{component}</BrowserRouter>
  </Provider>
);

describe('Components render correctly', () => {
  test('Town', () => {
    const tree = renderer
      .create(provider(<Town />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
