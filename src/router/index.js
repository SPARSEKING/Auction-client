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
import SelectedVehicle from "@/views/SelectedVehicle.vue";
import Contact from "@/views/Contact.vue";

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
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact
      },
      {
        path: "auctions/:id",
        name: "SelectedVehicle",
        component: SelectedVehicle
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
      next("/content/contact");
    } else {
      next("/");
    }
    next();
  } else if (to.path === "/content/vehicles") {
    const user = JSON.parse(localStorage.getItem("UserData"));
    if (user.userData.seller == true) {
      next();
    } else {
      next("/content/contact");
    }
    next();
  } else if (to.path === "/signup" || to.path === "/signin") {
    if (localStorage.getItem("UserData")) {
      next("/content/contact");
    } else {
      next();
    }
    next();
  }
  next();
});

export default router;
