import { screen, render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import Town from '../components/Town';
import testSelector from '../redux/testSelector';
import store from '../redux/store';

jest.mock('../redux/redux-hooks');
const render = (component) => rtlRender(
  <Provider store={store}>
    <BrowserRouter>{component}</BrowserRouter>
  </Provider>,
);

describe('Town clicks', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useAppSelector.mockImplementation(testSelector);
    useAppDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call dispatch', () => {
    render(<Town townId="15.516" townName="Paipa" />);
    const btn = screen.getByText('arrow_circle_right');
    userEvent.click(btn);

    expect(useAppDispatch).toHaveBeenCalled();
  });
});
