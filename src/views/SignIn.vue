<template>
  <div class="wrapper">
    <div class="navbar">
      <h1 class="logo">Logo</h1>
    </div>
    <div class="container">
      <div></div>
      <div class="content-wrapper">
        <div class="content">
          <h1 class="title">Sign In</h1>
          <div class="input-container">
            <p>Login</p>
            <input type="text" placeholder="Login" v-model="user.login" />
          </div>
          <div class="input-container">
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              v-model="user.password"
            />
          </div>
          <button :disabled="disabled">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUn",
  data() {
    return {
      user: {
        login: "",
        password: ""
      },
      disabled: true
    };
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
