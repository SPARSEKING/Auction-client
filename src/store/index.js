import Vue from "vue";
import Vuex from "vuex";
import { signIn } from "./modules/signIn/index";
import { signUp } from "./modules/signUp/index";
import { profile } from "./modules/profile/index";
import { newVehicle } from "./modules/vehicle/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    signIn,
    signUp,
    profile,
    newVehicle
  }
});
