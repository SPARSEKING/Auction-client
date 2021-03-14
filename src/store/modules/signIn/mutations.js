export const mutations = {
  signIn(state, payload) {
    state.user = payload;
    state.error = null;
  },
  errorMessage(state, payload) {
    state.error = payload;
  }
};
