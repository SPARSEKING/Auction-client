<template>
  <v-app>
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

        <v-btn class="color: white">
          <span>Auctions</span>

          <v-icon>mdi-gavel</v-icon>
        </v-btn>

        <v-btn class="color: white">
          <span>My vehicles</span>

          <v-icon>mdi-home</v-icon>
        </v-btn>
      </div>
      <div>
        <router-link to="/content/profile">
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
  name: "SignIn",
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
  created() {
    const getName = JSON.parse(localStorage.getItem("UserData"));
    this.userName = getName.candidate.login;
    console.log(this.userName);
  }
};
</script>

<style scoped>
.button {
  background-color: #fff;
}
</style>
