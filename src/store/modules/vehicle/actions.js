import axios from "axios";

export const actions = {
  async setInformation({ commit }, payload) {
    const response = await axios.post("content/profile/newvehicle", payload);
    console.log(response);
    commit("setInformation", response.data);
  },
  async getAllVehicles({ commit }) {
    const response = await axios.get("content/profile/newvehicle");
    commit("setInformation", response.data);
  },
  async getVehicle({ commit }) {
    const response = await axios.get("content/profile/myvehicle");
    commit("setInformation", response.data);
  }
};
