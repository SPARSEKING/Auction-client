<template>
  <v-app id="vvv">
    <div class="container">
      <div class="wrapper">
        <div class="content-wrapper">
          <div class="profile-container">
            <div class="user-photo">
              <v-btn icon x-large class="btn" @click="$refs.inputUpload.click()"
                >Photo</v-btn
              >
              <input
                v-show="false"
                ref="inputUpload"
                type="file"
                @change="onFileSelected"
              />
              <p>{{ selectedFile }}</p>
            </div>
            <div class="v-line"></div>
            <div class="user-info user">
              <h3>Basic information</h3>
              <div class="input-items">
                <v-text-field
                  color="#4DB6AC"
                  v-model="changedData.firstName"
                  label="First name"
                ></v-text-field>
                <v-text-field
                  color="#4DB6AC"
                  label="Second name"
                  v-model="changedData.secondName"
                ></v-text-field>
                <v-text-field
                  color="#4DB6AC"
                  v-model="changedData.email"
                  label="Email"
                ></v-text-field>
                <v-text-field
                  color="#4DB6AC"
                  label="Phone number"
                  v-model="changedData.phoneNumber"
                ></v-text-field>
              </div>
              <h3>Additional information</h3>
              <div class="container-info">
                <v-text-field
                  color="#4DB6AC"
                  v-model="changedData.city"
                  label="City"
                ></v-text-field>
                <v-text-field
                  color="#4DB6AC"
                  v-model="changedData.country"
                  label="Country"
                ></v-text-field>
                <v-btn
                  class="ma-2 change-password"
                  outlined
                  color="#4DB6AC"
                  @click="changeInformation(changedData)"
                >
                  Change information
                </v-btn>
              </div>
            </div>
            <div class="v-line" style="left: 50%;"></div>
            <div class="user-password user">
              <h3>Change password</h3>
              <div class="container-password">
                <v-text-field
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  color="#4DB6AC"
                  name="input-10-2"
                  label="Password"
                  value=""
                  class="input-group--focused"
                  @click:append="show = !show"
                  v-model="changedPassword.password"
                ></v-text-field>
                <v-btn class="ma-2 change-password" outlined color="#4DB6AC">
                  Change password
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Profile",
  data() {
    return {
      changedData: {
        firstName: "",
        secondName: "",
        email: "",
        phoneNumber: "",
        city: "",
        country: ""
      },
      changedPassword: {
        password: "",
        login: ""
      },
      selectedFile: null,
      show: false
    };
  },
  computed: {
    ...mapGetters(["getData"])
  },
  methods: {
    ...mapActions(["changeInformation"]),
    onFileSelected(event) {
      const image = event.target.files[0];
      this.selectedFile = image.name;
    }
  },
  created() {
    const getUserData = JSON.parse(localStorage.getItem("UserData"));
    this.changedData.email = getUserData.candidate.email;
    this.changedPassword.login = getUserData.candidate.login;
  }
};
</script>

<style scoped>
.container-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
}

.container-password {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
}

.change-password {
  margin-top: 10px;
}

.btn {
  height: 150px;
  width: 150px;
  background: #4db6ac;
}
#vvv {
  height: 100vh;
  background: #e0f2f1;
}

.wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 30px;
}

.content-wrapper {
  width: 100%;
  height: 700px;
  background: #fff;
  border-radius: 10px;
}

.v-line {
  border-left: 1px solid #eeeeee;
  height: 600px;
  left: 25%;
  margin-left: -3px;
}
.user-photo {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.user-info {
  flex-grow: 3;
}

.user-password {
  flex-grow: 1;
}

.user {
  padding-left: 30px;
  padding-right: 30px;
}

.profile-container {
  display: flex;
  padding: 30px;
}
</style>
