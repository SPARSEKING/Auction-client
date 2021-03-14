import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const state = {
  user: null,
  error: null
};

export const signUp = {
  state,
  getters,
  actions,
  mutations
};
