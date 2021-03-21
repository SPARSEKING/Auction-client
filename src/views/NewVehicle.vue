<template>
  <v-app class="vehicle-wrapper">
    <div class="vehicle-container">
      <div class="vehicle-content">
        <div class="veh-content">
          <v-carousel hide-delimiters height="330">
            <v-carousel-item
              v-for="(item, i) in newVehicle.imagesSrc"
              :key="i"
              :src="item"
            ></v-carousel-item>
          </v-carousel>
          <div class="upload-photo">
            <v-btn color="#4DB6AC" id="btn" @click="triggerUpload">
              <span>Upload Photos</span>
            </v-btn>
            <input
              v-show="false"
              ref="fileInput"
              type="file"
              @change="onFileSelected"
            />
          </div>
        </div>
        <div class="user-info user">
          <div class="input-items">
            <h3>Car parameters</h3>
            <v-text-field
              color="#4DB6AC"
              v-model="newVehicle.makes"
              label="Make"
            ></v-text-field>
            <v-text-field
              color="#4DB6AC"
              v-model="newVehicle.model"
              label="Model"
            ></v-text-field>
            <v-text-field
              color="#4DB6AC"
              v-model="newVehicle.year"
              label="Year"
            ></v-text-field>
            <v-text-field
              color="#4DB6AC"
              v-model="newVehicle.miles"
              label="Miles"
            ></v-text-field>
            <v-text-field
              color="#4DB6AC"
              v-model="newVehicle.transmission"
              label="Transmission"
            ></v-text-field>
            <v-text-field
              color="#4DB6AC"
              v-model="newVehicle.location"
              label="Location"
            ></v-text-field>
            <v-text-field
              color="#4DB6AC"
              v-model="newVehicle.date"
              label="Date auction"
            ></v-text-field>
            <v-text-field
              label="Start price"
              value=""
              v-model="newVehicle.price"
              prefix="$"
              color="#4DB6AC"
            ></v-text-field>
            <v-btn
              class="ma-2 add-info"
              outlined
              color="#4DB6AC"
              @click="setInformation({ newVehicle, images })"
            >
              Add Vehicle
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NewVehicle",
  data() {
    return {
      newVehicle: {
        makes: "",
        model: "",
        year: "",
        miles: "",
        transmission: "",
        location: "",
        date: "",
        price: "",
        imagesSrc: []
      },
      images: []
    };
  },
  methods: {
    ...mapActions(["setInformation"]),
    onFileSelected(event) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.newVehicle.imagesSrc.push(reader.result);
      };
      reader.readAsDataURL(file);
      this.images.push(file);
    },
    triggerUpload() {
      this.$refs.fileInput.click();
    }
  }
};
</script>
<style scoped>
.upload-photo {
  padding-top: 30px;
}
span {
  color: #ffffff;
}

.container-information {
  padding-top: 27px;
}

.user-info {
  display: flex;
  flex-direction: row;
  padding: 25px;
  width: 700px;
  justify-content: space-between;
}

.vehicle-wrapper {
  background: #e0f2f1;
  max-height: 100vh;
}

.vehicle-container {
  width: 800px;
  margin: 0 auto;
}

.vehicle-content {
  display: flex;
  flex-direction: row;
  margin: 50px;
  background: #ffffff;
  height: 600px;
  border-radius: 5px;
}

.veh-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  max-width: 330px;
}
</style>
