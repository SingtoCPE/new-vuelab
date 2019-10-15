<template>
  <div id="addEmployee">
    <v-card class="pa-6 mx-auto mb-10 mt-10" elevation="12" color="cyan lighten-5" width="600px">
      <v-card class="pa-6" elevation="5" color="white">
        <v-text-field v-model="employee.name" label="NAME"></v-text-field>
        <v-text-field v-model="employee.age" label="AGE"></v-text-field>
        <v-text-field v-model="employee.position" label="POSITION"></v-text-field>
        <v-btn color="cyan accent-4" @click="addEmployee">ADD</v-btn>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "addEmployee",
  data() {
    return {
      employee: {
        positionname: "",
        age: "",
        position: ""
      }
    };
  },
  methods: {
    addEmployee() {
      this.$store.dispatch("addEmployee", {
        name: this.employee.name,
        age: this.employee.age,
        position: this.employee.position
      });
    }
  }
};
</script>

