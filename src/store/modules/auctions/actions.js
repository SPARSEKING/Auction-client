import axios from "axios";

export const actions = {
  async searchVehicle({ commit }, payload) {
    console.log(payload);
    const response = await axios.post(
      "content/profile/auctions/search",
      payload
    );
    commit("setInformation", response.data);
  }
};
