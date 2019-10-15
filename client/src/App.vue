<template>
  <div id="app">
    <v-app>
      <v-container>
        <h1 class="text-center display-2 font-weight-thin">Employee Management</h1>
        <add-employee />
        <get-employee />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import getEmployee from "./components/getEmployee";
import addEmployee from "./components/addEmployee";
import { store } from "./store/store";

export default {
  name: "App",
  store,
  components: {
    getEmployee,
    addEmployee
  }
};
</script>

