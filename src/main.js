import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/utils/reset.css";
import vuetify from "./plugins/vuetify";
import axiosSetup from "./plugins/axios";

Vue.config.productionTip = false;

axiosSetup(store);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
