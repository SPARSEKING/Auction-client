<template>
  <v-app id="wrapper">
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
          <v-btn class="ma-2" color="#4DB6AC">
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
                <v-list-item v-for="(make, i) in lots" :key="i" link>
                  <v-list-item-title
                    class="item"
                    v-text="make"
                  ></v-list-item-title>
                </v-list-item>
              </v-list-group>
            </div>
          </div>
          <div class="container-lots">
            <car-lot :lots="allVehicles" class="car-lot" />
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
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import paginationMixin from "@/mixins/pagination.mixin";
import CarLot from "../components/CarLot.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Auctions",
  mixins: [paginationMixin],
  components: {
    CarLot
  },
  data() {
    return {
      allVehicles: []
    };
  },
  computed: {
    ...mapGetters(["getInformation"])
  },
  methods: {
    ...mapActions(["getAllVehicles"])
  },
  created() {
    this.getAllVehicles().then(() => {
      this.allVehicles = this.getInformation;
    });
  },
  mounted() {
    this.setupPagination(this.allVehicles);
  }
};
</script>

<style>
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

#wrapper {
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
  margin-bottom: 80px;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
