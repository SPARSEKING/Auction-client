<template>
  <div class="wrapper">
    <div class="navbar">
      <h1 class="logo">AutoSale</h1>
    </div>
    <div class="container">
      <div></div>
      <div class="content-wrapper">
        <div class="content">
          <h1 class="title">Sign In</h1>
          <p class="error-message">{{ signInMessage }}</p>
          <v-text-field
            v-model="user.login"
            label="Login"
            color="#4DB6AC"
          ></v-text-field>
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            value=""
            color="#4DB6AC"
            class="input-group--focused"
            @click:append="show = !show"
            v-model="user.password"
          ></v-text-field>
          <button @click="signIn(user)">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SignIn",
  data() {
    return {
      user: {
        login: "",
        password: ""
      },
      show: false
    };
  },
  computed: {
    ...mapGetters(["signInMessage"])
  },
  methods: {
    signIn(user) {
      this.$store.dispatch("signIn", user);
      this.user.login = this.user.password = "";
    }
  }
};
</script>

<style scoped>
.error-message {
  color: red;
  text-align: center;
  margin: 5px;
}

.wrapper {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #435b75;
  height: 100vh;
}

.logo {
  color: #fff;
  font-size: 30px;
}

.navbar {
  padding: 20px;
  margin-left: 100px;
}

.container {
  margin: 0 auto;
  width: 800px;
  height: 600px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
}

.content-wrapper {
  margin: 0 auto;
  width: 300px;
}

.content {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  text-align: center;
}

input {
  width: 100%;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  height: 30px;
}
.input-container {
  margin-top: 10px;
  color: #595959;
}

button:disabled {
  margin-top: 50px;
  border-radius: 3px;
  height: 30px;
  border: 1px solid #d3d3d3;
}

button:enabled {
  background: #72e1c9;
  border-color: #72e1c9;
  margin-top: 50px;
  border-radius: 3px;
  height: 30px;
}

p {
  margin: 5px;
}
</style>
