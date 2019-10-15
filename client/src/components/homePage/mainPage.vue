<template>
  <div class="mainPage">
    <v-card>
      <v-btn @click="clearToken">Sign-out</v-btn>
      <h1>Main Page</h1>
      <h2>Login Complete => This is main page :)</h2>
      <div class="addEmployee">
        <fieldset>
          <legend>
            <h1>Add</h1>
          </legend>
          <button class="button-add" @click="gotoAdd">Add Employee</button>
        </fieldset>
      </div>
      <get-employee class="getEmployee" />
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