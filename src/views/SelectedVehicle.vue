<template>
  <v-app class="app">
    <div class="wrapper">
      <div class="wrapper-content">
        <div class="slider">
          <v-carousel hide-delimiters height="660">
            <v-carousel-item :key="i" :src="item"></v-carousel-item>
          </v-carousel>
        </div>
        <div class="auction-info">
          <h1 class="title">Car name</h1>
          <p class="title">AUCTION DATA</p>
          <div class="info-item">
            <p>Make</p>
            <p><b>BMW</b></p>
          </div>
          <div class="info-item">
            <p>Model</p>
            <p><b>M8</b></p>
          </div>
          <div class="info-item">
            <p>Year</p>
            <p><b>2020</b></p>
          </div>
          <div class="info-item">
            <p>Miles</p>
            <p><b>1000</b></p>
          </div>
          <div class="info-item">
            <p>Transmission</p>
            <p><b>Automat</b></p>
          </div>
        </div>
        <div class="pay-info">
          <p class="title">CURRENT PRICE</p>
          <div class="item">
            <p class="sale">Current price:</p>
            <h1 class="sale price">228$</h1>
          </div>
          <p class="sale">Sale Status</p>
          <p class="sale"><b>on minimum bid</b></p>
          <hr class="line" />
          <p class="sale-details title">SALE DETAILS</p>
          <div class="item">
            <p class="sale">Location</p>
            <p class="sale"><b>Minsk</b></p>
          </div>
          <div class="item-date">
            <p class="sale">Auction date</p>
            <p class="sale"><b>26.03.2021</b></p>
          </div>
          <v-btn class="ma-2" outlined color="#00897b">
            Bind now
          </v-btn>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {};
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
