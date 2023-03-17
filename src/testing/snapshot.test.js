import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Detail from '../components/Detail';
import Search from '../components/Search';
import TownContainer from '../components/TownContainer';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Components render correctly', () => {
  test('Detail', () => {
    const tree = render(
      <Detail />,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Search', () => {
    const tree = render(<Search />);
    expect(tree).toMatchSnapshot();
  });
  test('TownContainer', () => {
    const tree = render(<TownContainer />);
    expect(tree).toMatchSnapshot();
  });
});
