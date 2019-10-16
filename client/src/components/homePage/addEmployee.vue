<template>
  <div id="addEmployee">
    <v-card class="d-flex align-end flex-column">
      <v-btn @click="gotoMain" color="red lighten-1">Main</v-btn>
    </v-card>
    <v-card
      v-if="errors.length"
      class="pa-6 mx-auto mb-10 mt-10"
      :elevation="hover ? 12 : 2"
      color="orange lighten-4"
      width="600px"
    >
      <v-alert
        type="warning"
        class="font-weight-bold text-uppercase"
      >Please take follow this text (s)</v-alert>
      <ul>
        <li v-for="(error,index) in errors" :key="index">{{error}}</li>
      </ul>
    </v-card>

    <form>
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="pa-6 mx-auto mb-10 mt-10"
          :elevation="hover ? 12 : 2"
          color="cyan lighten-5"
          width="600px"
        >
          <v-card class="pa-6" elevation="5" color="white">
            <h1 class="text-center">ADD EMPLOYEE</h1>
            <v-text-field v-model="employee.name" label="NAME"></v-text-field>
            <v-text-field v-model="employee.age" label="AGE"></v-text-field>
            <v-select v-model="employee.position" :items="items" label="POSITION" solo></v-select>
            <v-btn large color="cyan accent-4 " type="submit" @click.prevent="validateForm">
              <v-icon>mdi-file-plus</v-icon>ADD
            </v-btn>
          </v-card>
        </v-card>
      </v-hover>
    </form>
    <v-footer absolute class="font-weight-medium" color="white">
      <v-col class="text-center" cols="12">
        2017 - {{ new Date().getFullYear() }} —
        <strong>The Dollarsign.co.Ltd</strong>
      </v-col>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "addEmployee",
  data() {
    return {
      employee: {
        name: "",
        age: "",
        position: ""
      },
      items: ["Developer", "System Analysis", "Employee Management", "Maid"],
      errors: []
    };
  },
  methods: {
    addEmployee() {
      this.$store.dispatch("addEmployee", {
        name: this.employee.name,
        age: this.employee.age,
        position: this.employee.position
      });
    },
    validateForm() {
      if (this.employee.name && this.employee.age && this.employee.position) {
        this.addEmployee();
      }
      const nameRex = /^[A-Z]\D[a-z]+/g;
      const nameResults = nameRex.test(this.employee.name);
      this.errors = [];
      if (!this.employee.name || !nameResults) {
        this.errors.push(
          "Name must begin with a capital letter, must not be blank !"
        );
      }
      if (!this.employee.age) {
        this.errors.push("Age must not be blank !");
      }
      if (!this.employee.position) {
        this.errors.push("Position must not be blank !");
      }
    },
    gotoMain() {
      window.location.href = "http://localhost:8080/#/mainpage";
      console.log("gotoMain");
    }
  }
};
</script>

