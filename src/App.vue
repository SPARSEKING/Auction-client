<template>
  <v-app class="container">
    <router-view />
  </v-app>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["autoLogin"])
  },
  created() {
    this.autoLogin();
  }
};
</script>
