import router from "@/router/index.js";

export const mutations = {
  signUp(state, payload) {
    state.user = payload;
    state.error = null;
    if (!payload.redirect) {
      router.push({ name: "SignIn" });
    }
  },
  errorMessage(state, payload) {
    state.error = payload;
  }
};
