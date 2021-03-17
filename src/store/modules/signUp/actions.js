import axios from "axios";

export const actions = {
  async signUp({ commit }, payload) {
    try {
      const response = await axios.post("signup", payload);
      localStorage.setItem("UserData", JSON.stringify(response.data));
      commit("signUp", response.data);
    } catch (e) {
      commit("errorMessage", e.response.data.error);
    }
  }
};
