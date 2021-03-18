<template>
  <v-app class="wrapper">
    <div class="wrapper-content">
      <div class="content">
        <div class="search-container">
          <v-select label="Make" solo class="search-item"></v-select>
          <v-text-field
            label="Min year"
            solo
            class="search-item"
          ></v-text-field>
          <v-text-field
            label="Max year"
            solo
            class="search-item"
          ></v-text-field>
          <v-btn
            class="ma-2"
            :loading="loading"
            :disabled="loading"
            color="#4DB6AC"
            @click="loader = 'loading'"
          >
            Search
          </v-btn>
        </div>
        <div class="container">
          <div class="container-params">
            <div class="make">
              <v-list-group :value="true" color="#80CBC4">
                <template v-slot:activator>
                  <v-list-item-title>Make</v-list-item-title>
                </template>
                <v-list-item v-for="(make, i) in makes" :key="i" link>
                  <v-list-item-title
                    class="item"
                    v-text="make"
                  ></v-list-item-title>
                </v-list-item>
              </v-list-group>
            </div>
          </div>
          <div class="container-lots">
            <car-lot v-for="make in makes" :key="make" class="car-lot" />
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import CarLot from "../components/CarLot.vue";

export default {
  name: "Auctions",
  components: {
    CarLot
  },
  data() {
    return {
      makes: ["Audi", "BMW", "Mercedes"]
    };
  }
};
</script>

<style scoped>
.car-lot {
  margin-bottom: 30px;
}
.item {
  color: #757575;
}
.v-input {
  max-width: 310px !important;
}

.v-text-field {
  max-height: 48px;
}

.v-btn {
  width: 200px;
  height: 48px !important;
}

.wrapper {
  background: #e0f2f1;
}

.wrapper-content {
  width: 1200px;
  margin: 0 auto;
}

.content {
  margin-top: 30px;
}

.search-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 3px solid #e0e0e0;
  border-radius: 5px;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 80px;
}

.container-params {
  margin-right: 30px;
  flex-grow: 1;
  background: #b2dfdb;
  border-radius: 5px;
  height: 100vh;
}

.container-lots {
  flex-grow: 3;
  border-radius: 5px;
}
</style>
