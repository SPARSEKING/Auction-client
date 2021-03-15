<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "ContentPage",
  components: {
    Navbar
  }
};
</script>
