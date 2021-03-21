<template>
  <v-app class="main">
    <div class="vehicles-wrapper">
      <div class="vehicles-container">
        <div class="show-button">
          <h1>My Vehicles</h1>
          <router-link :to="{ name: 'NewVehicle' }" append>
            <v-btn
              color="#4db6ac"
              dark
              id="btn"
              @click="(sheet = !sheet), (createModal.show = !createModal.show)"
            >
              Add New Vehicle
            </v-btn>
          </router-link>
        </div>
        <hr class="v-line" />
      </div>
      <car-lot :lots="items" :deleteBtn="deleteButton" class="user-lots" />
      <h2 v-if="userVehicles.length === 0" class="no-auctions">
        You have no auctions at the moment
      </h2>
      <div class="text-center">
        <v-pagination
          @input="pageChangeHandler"
          v-model="page"
          :length="pageCount"
          :total-visible="7"
          color="#b2dfdb"
        ></v-pagination>
      </div>
    </div>
  </v-app>
</template>

<script>
import CarLot from "@/components/CarLot.vue";
import paginationMixin from "@/mixins/pagination.mixin.js";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { CarLot },
  mixins: [paginationMixin],
  name: "MyVehicles",
  data() {
    return {
      createModal: {
        show: false
      },
      userVehicles: [],
      deleteButton: true
    };
  },
  computed: {
    ...mapGetters(["getUserVehicles"])
  },
  methods: {
    ...mapActions(["getVehicle"])
  },
  created() {
    this.getVehicle().then(() => {
      this.userVehicles = this.getUserVehicles;
      this.setupPagination(this.userVehicles);
    });
  }
};
</script>

<style scoped>
.user-lots {
  padding-top: 50px;
}

.no-auctions {
  padding-top: 100px;
  text-align: center;
}

.main {
  background: #e0f2f1;
}

.vehicles-wrapper {
  width: 1200px;
  margin: 0 auto;
}

#btn {
  margin-top: 40px;
}

.show-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h1 {
  padding-top: 50px;
  font-size: 30px;
}

.v-line {
  border: 1px solid #b2dfdb;
}
</style>
