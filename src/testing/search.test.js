import { screen, render as rtlRender, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import Search from '../components/Search';
import testSearch from '../redux/testSearch';
import store from '../redux/store';

jest.mock('../redux/redux-hooks');
const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Search event', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useAppSelector.mockImplementation(testSearch);
    useAppDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call dispatch', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Search...');
    input.value = 'sa';
    fireEvent.change(input, { target: { value:'sa' }})
    expect(useAppDispatch).toHaveBeenCalled();
  });  
});
