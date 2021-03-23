<template>
  <div class="wrapper">
    <div class="navbar">
      <h1 class="logo">AutoSale</h1>
    </div>
    <div class="wrapper-content">
      <div class="wrapper-links">
        <h1 class="wrapper-links-title">Impoynd auctions, the smart way.</h1>
        <router-link to="/signin" class="link" id="link-sign-in">
          <span>Already have an account? Sign In</span>
        </router-link>
        <router-link to="/signup" class="link">
          <span>Sign Up</span>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "MainPage"
};
</script>

<style scoped>
.wrapper-content {
  margin-top: 30px;
  background-color: #fbfcfe;
  height: 100vh;
}

.wrapper-links {
  width: 600px;
  display: flex;
  padding-top: 250px;
  padding-left: 100px;
  flex-direction: column;
}

.wrapper-links-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 35px;
  padding-bottom: 20px;
}

.link {
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
  position: relative;
  text-align: center;
  width: 400px;
  background-color: rgb(55, 207, 201);
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
}

#link-sign-in {
  color: rgb(55, 207, 201);
  background-color: #fff;
  border: 1px solid rgb(55, 207, 201);
}

.link:hover {
  background-color: #72e1c9;
}

#link-sign-in:hover {
  color: #72e1c9;
  border: 1px solid #72e1c9;
}

.logo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}
.navbar {
  margin-top: 20px;
  margin-left: 100px;
}
</style>
