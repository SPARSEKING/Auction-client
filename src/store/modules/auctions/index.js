import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const state = {
  searchData: null
};

export const auctions = {
  state,
  getters,
  actions,
  mutations
};
