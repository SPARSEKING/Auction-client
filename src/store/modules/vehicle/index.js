import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const state = {
  newVehicle: null
};

export const newVehicle = {
  state,
  getters,
  actions,
  mutations
};
