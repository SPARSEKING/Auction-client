<template>
  <v-app id="v-app">
    <v-bottom-navigation
      :value="value"
      color="teal"
      class="d-flex justify-space-around align-center"
    >
      <h1>AutoSale</h1>
      <div>
        <v-btn class="color: white">
          <span>Vehicles</span>

          <v-icon>mdi-domain</v-icon>
        </v-btn>

        <router-link :to="{ name: 'Auctions' }" append>
          <v-btn class="color: white">
            <span>Auctions</span>
            <v-icon>mdi-gavel</v-icon>
          </v-btn>
        </router-link>

        <v-btn class="color: white">
          <span>My vehicles</span>

          <v-icon>mdi-home</v-icon>
        </v-btn>
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
      userName: ""
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
    this.userName = getName.userLogin;
  }
};
</script>

<style scoped>
#v-app {
  height: 56px;
}

.button {
  background-color: #fff;
}
</style>
