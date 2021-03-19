<template>
  <div>
    <div v-for="lot in lots" :key="lot" class="lots">
      <v-hover v-slot="{ hover }" open-delay="100">
        <v-card
          :elevation="hover ? 3 : 1"
          :class="{ 'on-hover': hover }"
          class="mx-auto slot-container"
          width="100%"
        >
          <div class="slot-container">
            <v-img
              class="image"
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="240"
              max-width="300"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <div class="container-info">
              <div class="title">
                <h2>{{ lot.make }} {{ lot.model }}</h2>
                <h2>{{ lot.price }}$</h2>
              </div>
              <div class="cont-subtitle">
                <div class="subtitle">
                  <v-text-field
                    :value="lot.year"
                    label="Year"
                    color="#80CBC4"
                    readonly
                  ></v-text-field>
                  <v-text-field
                    :value="lot.miles"
                    label="Miles"
                    color="#80CBC4"
                    readonly
                  ></v-text-field>
                  <v-text-field
                    :value="lot.transmission"
                    label="Trasmission"
                    color="#80CBC4"
                    readonly
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    :value="lot.location"
                    label="Location"
                    color="#80CBC4"
                    readonly
                  ></v-text-field>
                  <v-text-field
                    v-model="lot.date"
                    label="Date auction"
                    prepend-icon="mdi-calendar"
                    color="#80CBC4"
                    readonly
                  ></v-text-field>
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarLot",
  data() {
    return {
      dateRangeText: "26.03.2018"
    };
  },
  props: {
    lots: Array
  }
};
</script>

<style>
.v-text-field {
  max-height: 48px;
}
.cont-subtitle {
  padding-top: 11px;
  display: flex;
  flex-direction: row;
}
.params {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 14px;
}
.subtitle {
  padding-right: 30px;
  width: 300px;
}
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.image {
  height: 240px;
  width: 300px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.slot-container {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.container-info {
  width: 100%;
  padding: 20px;
}

.lots {
  margin-bottom: 30px;
}
</style>
