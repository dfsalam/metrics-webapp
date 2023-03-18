const state = {
  polution: [],
  isLoading: true,
};
const testSelector = (f) => f(state);

export default testSelector;
