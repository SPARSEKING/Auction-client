import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import MainPage from "@/views/MainPage.vue";
import AuctionPage from "@/views/AuctionPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/",
    name: "MainPage",
    component: MainPage
  },
  {
    path: "/auction",
    name: "Auction",
    component: AuctionPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
