const state = {
  rockets: [],
  isLoading: true,
};
const testSelector = (f) => f(state);

export default testSelector;
