<template>
  <div class="mainPage">
    <v-card class="d-flex align-end flex-column">
      <v-btn color="red lighten-1" @click="clearToken">Sign-out</v-btn>
    </v-card>

    <v-card class="pa-6 mx-auto mb-10 mt-10" color="purple lighten-4" width="800px">
      <v-card class="pa-auto mx-auto mt-5 mb-10 text-center" width="500">
        <h1>EMPLOYEE INFORMATION</h1>
      </v-card>
      <v-btn color="purple accent-3" @click="gotoAdd">
        <v-icon>mdi-file-edit</v-icon>Add Employee
      </v-btn>
      <get-employee />
    </v-card>

    <v-col justify-self="center" cols="12" class="mb-auto pt-12 text-center">
      <v-footer absolute class="font-weight-medium" color="white">
        <v-col class="text-center" cols="12">
          2017 - {{ new Date().getFullYear() }} —
          <strong>The Dollarsign.co.Ltd</strong>
        </v-col>
      </v-footer>
    </v-col>
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