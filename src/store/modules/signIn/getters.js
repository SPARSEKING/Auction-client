export const getters = {
  signInMessage(state) {
    return state.error;
  },
  getToken(state) {
    if (state.user === null) {
      return "";
    }
    return state.user.token;
  }
};
