export const mutations = {
  changeInformation(state, payload) {
    state.changedData = payload;
  },
  changePassword(state, payload) {
    state.changedPassword = payload;
  }
};
