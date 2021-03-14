import axios from "axios";

export const actions = {
  async signIn({ commit }, payload) {
    try {
      const response = await axios.post(
        "http://localhost:3000/signin",
        payload
      );
      localStorage.setItem("UserData", JSON.stringify(response.data));
      commit("signIn", response.data);
    } catch (e) {
      commit("errorMessage", e.response.data.error);
    }
  }
};
