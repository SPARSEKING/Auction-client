<template>
  <div class="wrapper">
    <div class="navbar">
      <h1 class="logo">Logo</h1>
    </div>
    <div class="container">
      <div></div>
      <div class="content-wrapper">
        <div class="content">
          <h1 class="title">Sign Up</h1>
          <div class="category">
            <div class="category-item">
              Byer
            </div>
            <div class="category-item">
              Manager
            </div>
          </div>
          <div class="input-container">
            <p>Login</p>
            <input type="text" placeholder="Login" v-model="newUser.login" />
          </div>
          <div class="input-container">
            <p>Email</p>
            <input type="email" placeholder="Email" v-model="newUser.email" />
          </div>
          <div class="input-container">
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              v-model="newUser.password"
            />
          </div>
          <button :disabled="disabled" @click="signUp(newUser)">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      newUser: {
        login: "",
        password: "",
        email: "",
        seller: false
      },
      disabled: false
    };
  },
  computed: {
    ...mapActions(["signUp"]),
    ...mapGetters(["authMessage"])
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
  border-radius: 4px;
  text-align: center;
  padding-top: 50px;
  font-size: 20px;
}

.category-item:enabled {
  border-color: #72e1c9;
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
