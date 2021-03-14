export const mutations = {
  signUp(state, payload) {
    state.user = payload;
  },
  errorMessage(state, payload) {
    state.error = payload;
  }
};
