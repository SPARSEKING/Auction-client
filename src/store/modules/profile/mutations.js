export const mutations = {
  changeInformation(state, payload) {
    state.changedData = payload;
  },
  updatePassword(state, payload) {
    state.newPassword = payload;
  }
};
