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
            <button
              class="category-item"
              :class="{ chonsen: newUser.seller == false }"
              @click="newUser.seller = false"
            >
              Byer
            </button>
            <button
              class="category-item"
              :class="{ chonsen: newUser.seller == true }"
              @click="newUser.seller = true"
            >
              Manager
            </button>
          </div>
          <p class="error-message">{{ authMessage }}</p>
          <v-text-field
            class="errorText"
            v-model="newUser.login"
            :counter="6"
            :rules="loginRules"
            label="Login"
            required
          ></v-text-field>
          <v-text-field
            v-model="newUser.email"
            :rules="emailRules"
            label="E-mail"
            text-color:red
            required
          ></v-text-field>
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            hint="At least 8 characters"
            value=""
            class="input-group--focused"
            @click:append="show = !show"
            v-model="newUser.password"
          ></v-text-field>
          <button class="button-sign-up" @click="signUp(newUser), validate">
            Sign Up
          </button>
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
      },
      show: false,
      loginRules: [
        v => !!v || "Login is required",
        v => (v && v.length >= 6) || "Login must be less than 6 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  computed: {
    ...mapGetters(["authMessage"])
  },
  methods: {
    signUp(newUser) {
      this.$store.dispatch("signUp", newUser);
      this.newUser.login = this.newUser.email = this.newUser.password = "";
    },
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>

<style scoped>
.error--text {
  color: #ff5252 !important;
  caret-color: #ff5252 !important;
}

.wrapper {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #435b75;
  height: 100vh;
}

.chonsen {
  border: 2px solid #72e1c9 !important;
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
}

.title {
  text-align: center;
}

.button-sign-up {
  background: #72e1c9;
  border-color: #72e1c9;
  margin-top: 50px;
  border-radius: 3px;
  height: 30px;
}

.error-message {
  padding-top: 10px;
  color: rgb(238, 79, 79);
  text-align: center;
  font-size: 13px;
}
</style>
