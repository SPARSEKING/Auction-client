import router from "@/router/index.js";

export const mutations = {
  signIn(state, payload) {
    state.user = payload;
    state.error = null;
    if (!payload.redirect) {
      router.push({ name: "ContentPage" });
    }
  },
  errorMessage(state, payload) {
    state.error = payload;
  }
};
