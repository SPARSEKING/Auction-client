import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const state = {
  changedData: null,
  changedPassword: null
};

export const signIn = {
  state,
  getters,
  actions,
  mutations
};
