import axios from "axios";

export const actions = {
  async changeInformation({ commit }, payload) {
    const response = await axios.post(
      "http://localhost:3000/content/profile",
      payload
    );
    localStorage.setItem("UserInformation", JSON.stringify(response.data));
    commit("changeInformation", response.data);
  },
  async changePassword({ commit }, payload) {
    const response = await axios.post(
      "http://localhost:3000/content/profile",
      payload
    );
    localStorage.setItem("UserData", JSON.stringify(response.data));
    commit("changePasword", response.data);
  }
};
