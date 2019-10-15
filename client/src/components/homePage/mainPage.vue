<template>
  <div class="mainPage">
    <v-card class="pa-6 mx-auto mb-10" color="purple lighten-4" width="800px">
      <v-btn color="red lighten-1" @click="clearToken">Sign-out</v-btn>
      <v-btn color="purple accent-3" @click="gotoAdd">Add Employee</v-btn>
      <get-employee />
    </v-card>
  </div>
</template>
<script>
import getEmployee from "./getEmployee";
export default {
  name: "mainPage",
  components: {
    getEmployee
  },
  methods: {
    gotoAdd() {
      window.location.href = "http://localhost:8080/#/add";
    },
    clearToken() {
      this.$store.dispatch("clearToken");
    }
  }
};
</script>