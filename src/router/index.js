import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import MainPage from "@/views/MainPage.vue";
import ContentPage from "@/views/ContentPage.vue";
import Profile from "@/views/Profile.vue";
import AuctionsPage from "@/views/AuctionsPage.vue";
import UserVehicles from "@/views/UserVehicles.vue";
import NewVehicle from "@/views/NewVehicle.vue";

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
    path: "/content",
    name: "ContentPage",
    component: ContentPage,
    children: [
      {
        path: "profile",
        name: "Profile",
        component: Profile
      },
      {
        path: "auctions",
        name: "Auctions",
        component: AuctionsPage
      },
      {
        path: "vehicles",
        name: "MyVehicles",
        component: UserVehicles
      },
      {
        path: "newvehicle",
        name: "NewVehicle",
        component: NewVehicle
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(function(to, _from, next) {
  if (to.path === "/content") {
    if (localStorage.getItem("UserData")) {
      next();
    } else {
      next("/");
    }
    next();
  }
  next();
});

export default router;
