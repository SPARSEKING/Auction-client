export const mutations = {
  setInformation(state, payload) {
    state.newVehicle = payload;
  },
  setUserVehicles(state, payload) {
    state.userVehicle = payload;
  }
};
