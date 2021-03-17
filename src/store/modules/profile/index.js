import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const state = {
  changedData: null,
  newPassword: null
};

export const profile = {
  state,
  getters,
  actions,
  mutations
};
