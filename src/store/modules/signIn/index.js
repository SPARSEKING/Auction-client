import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const state = {
  login: "",
  password: ""
};

export const signIn = {
  state,
  getters,
  actions,
  mutations
};
