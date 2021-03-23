<template>
  <v-app class="app">
    <div class="wrapper-contact">
      <div class="contact-content">
        <h2>Contact</h2>
        <div class="contact-info">
          <h2>{{ getContact.title }}</h2>
          <p>{{ getContact.text }}</p>
          <h2>Belarus</h2>
          <p>{{ getContact.street }}</p>
          <p>{{ getContact.telephone }}</p>
          <p>{{ getContact.email }}</p>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Contact",
  computed: {
    ...mapGetters(["getContact"])
  }
};
</script>

<style scoped>
.street {
  margin: 0;
  padding: 0;
}

p {
  color: #757575;
  font-size: 20px;
}

.app {
  background: #e0f2f1;
}

.contact-content {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.wrapper-contact {
  width: 800px;
  margin: 0 auto;
}

.contact-info {
  margin-top: 50px;
  text-align: center;
}
</style>
