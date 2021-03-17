import axios from "axios";

export const actions = {
  async signIn({ commit }, payload) {
    try {
      const response = await axios.post("signin", payload);
      localStorage.setItem("UserData", JSON.stringify(response.data));
      commit("signIn", response.data);
    } catch (e) {
      commit("errorMessage", e.response.data.error);
    }
  },
  async autoLogin({ commit }) {
    const userData = await JSON.parse(localStorage.getItem("UserData") || "");
    console.log(userData.token);
    if (userData && userData.token) {
      userData.redirect = true;
      commit("signIn", userData);
    }
  }
};
