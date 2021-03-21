<template>
  <v-app id="v-app">
    <v-bottom-navigation
      :value="value"
      color="teal"
      class="d-flex justify-space-around align-center"
    >
      <h1>AutoSale</h1>
      <div>
        <router-link :to="{ name: 'AboutUs' }" append>
          <v-btn class="color: white">
            <span>About Us</span>
            <v-icon>mdi-domain</v-icon>
          </v-btn>
        </router-link>

        <router-link :to="{ name: 'Auctions' }" append>
          <v-btn class="color: white">
            <span>Auctions</span>
            <v-icon>mdi-gavel</v-icon>
          </v-btn>
        </router-link>

        <router-link :to="{ name: 'MyVehicles' }" append v-if="seller">
          <v-btn class="color: white">
            <span>My vehicles</span>
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Profile' }" append>
          <v-chip class="ma-2" color="teal" outlined pill>
            {{ userName }}
            <v-icon right>
              mdi-account-outline
            </v-icon>
          </v-chip>
        </router-link>

        <v-chip class="ma-2" close color="teal" outlined pill @click="logout">
          Log Out
        </v-chip>
      </div>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import router from "@/router/index.js";

export default {
  name: "Navbar",
  data() {
    return {
      value: "recent",
      userName: "",
      seller: false
    };
  },
  methods: {
    logout() {
      router.push({ name: "MainPage" });
      localStorage.removeItem("UserData");
    }
  },
  async created() {
    const getName = await JSON.parse(localStorage.getItem("UserData"));
    this.userName = getName.userData.login;
    this.seller = getName.userData.seller;
  }
};
</script>

<style scoped>
.v-btn--active {
  color: rgb(77, 182, 172) !important;
}

#v-app {
  height: 56px;
}

.button {
  background-color: #fff;
}
</style>
