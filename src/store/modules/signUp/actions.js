import axios from "axios";

export const actions = {
  async signUp({ commit }, payload) {
    await axios.post("http://localhost:3000/signup", payload).then(res => {
      localStorage.setItem("UserData", JSON.stringify(res.data));
      commit("signUp", res.data);
    });
  }
};
