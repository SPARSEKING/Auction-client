<template>
  <div class="wrapper">
    <div class="navbar">
      <h1 class="logo">Logo</h1>
    </div>
    <div class="container">
      <div></div>
      <div class="content-wrapper">
        <div class="content" @submit.prevent="">
          <h1 class="title">Sign Up</h1>
          <div class="category">
            <button class="category-item">
              Byer
            </button>
            <button class="category-item">
              Manager
            </button>
          </div>
          <p class="error-message">{{ authMessage }}</p>
          <div class="input-container ">
            <label>Login</label>
            <input type="text" placeholder="Login" v-model="newUser.login" />
          </div>
          <div class="input-container">
            <label>Email</label>
            <input type="email" placeholder="Email" v-model="newUser.email" />
          </div>
          <div class="input-container form-item">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              v-model="newUser.password"
            />
          </div>
          <button class="button-sign-up" @click="signUp(newUser)">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      newUser: {
        login: "",
        password: "",
        email: "",
        seller: false
      }
    };
  },
  computed: {
    ...mapGetters(["authMessage", "dis"])
  },
  methods: {
    signUp(newUser) {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$store.dispatch("signUp", newUser);
    }
  }
};
</script>

<style scoped>
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
  padding: 15px;
  margin-bottom: 30px;
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

.category {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.category-item {
  width: 100px;
  height: 150px;
  border: 2px solid #d3d3d3;
  background: #fff;
  border-radius: 4px;
  text-align: center;
  padding-top: 50px;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  outline: none;
  transition: border 9999999s;
}

.category-item:active {
  border-color: #72e1c9;
  transition: border 0s;
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

.button-sign-up {
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
