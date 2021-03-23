<template>
  <v-app class="app">
    <div class="wrapper">
      <div class="wrapper-content">
        <div class="slider">
          <v-carousel hide-delimiters height="660">
            <v-carousel-item
              v-for="(image, i) in auction.imagesSrc"
              :key="i"
              :src="image"
            ></v-carousel-item>
          </v-carousel>
        </div>
        <div class="auction-info">
          <h1 class="title">Car name</h1>
          <p class="title">AUCTION DATA</p>
          <div class="info-item">
            <p>Make</p>
            <p>
              <b>{{ auction.make }}</b>
            </p>
          </div>
          <div class="info-item">
            <p>Model</p>
            <p>
              <b>{{ auction.model }}</b>
            </p>
          </div>
          <div class="info-item">
            <p>Year</p>
            <p>
              <b>{{ auction.year }}</b>
            </p>
          </div>
          <div class="info-item">
            <p>Miles</p>
            <p>
              <b>{{ auction.miles }}</b>
            </p>
          </div>
          <div class="info-item">
            <p>Transmission</p>
            <p>
              <b>{{ auction.transmission }}</b>
            </p>
          </div>
        </div>
        <div class="pay-info">
          <p class="title">CURRENT PRICE</p>
          <div class="item">
            <p class="sale">Current price:</p>
            <h1 class="sale price">{{ auction.price }}$</h1>
          </div>
          <p class="sale">Sale Status</p>
          <p class="sale"><b>on minimum bid</b></p>
          <hr class="line" />
          <p class="sale-details title">SALE DETAILS</p>
          <div class="item">
            <p class="sale">Location</p>
            <p class="sale">
              <b>{{ auction.location }}</b>
            </p>
          </div>
          <div class="item-date">
            <p class="sale">Auction date</p>
            <p class="sale">
              <b>{{ auction.date }}</b>
            </p>
          </div>
          <v-btn class="ma-2" outlined color="#00897b" @click="bindPrice">
            Bind now
          </v-btn>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SelectedVehicle",
  data() {
    return {
      auction: null
    };
  },
  computed: {
    ...mapGetters(["getInformation"])
  },
  methods: {
    ...mapActions(["bindPrice"])
  },
  created() {
    const auction = this.getInformation.find(
      auction => auction._id == this.$route.params.id
    );
    if (auction) {
      this.auction = auction;
    }
  }
};
</script>

<style scoped>
.title {
  color: #00897b;
}

.price {
  color: #b2ff59;
}

.ma-2 {
  width: 100px;
}

h1,
p {
  color: #757575;
}

.info-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.item-date {
  margin-top: 10px;
}

.sale-details {
  margin-top: 10px;
}

.line {
  border: 1px solid #bdbdbd;
}

.sale {
  padding: 0;
  margin: 0;
}

.auction-info {
  padding-top: 40px;
  margin: 20px;
  width: 200px;
}

.pay-info {
  margin-left: 20px;
  margin-top: 70px;
  background: #b2dfdb;
  padding: 30px;
  border-radius: 3px;
  height: 100%;
}
.v-carousel {
  width: 700px;
}

.app {
  background: #ffffff;
}

.wrapper {
  width: 1200px;
  margin: 0 auto;
}

.wrapper-content {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  background: #ffffff;
  border-radius: 5px;
}
</style>
