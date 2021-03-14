import Vue from "vue";
import Vuex from "vuex";
import { signIn } from "./modules/signIn/index";
import { signUp } from "./modules/signUp/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    signIn,
    signUp
  }
});
