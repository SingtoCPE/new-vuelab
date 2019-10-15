<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-col cols="12" class="cyan lighten-2 mb-10">
          <h1 class="text-center display-3 font-weight-thin">Employee Management</h1>
        </v-col>
        <admin-login />
        <add-employee />
        <get-employee />
        <v-footer padless>
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} —
            <strong>The Dollasign.co.th</strong>
          </v-col>
        </v-footer>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import getEmployee from "./components/homePage/getEmployee";
import addEmployee from "./components/homePage/addEmployee";
import adminLogin from "./components/loginPage/adminLogin";
import { store } from "./store/store";

export default {
  name: "App",
  store,
  components: {
    getEmployee,
    addEmployee,
    adminLogin
  }
};
</script>

