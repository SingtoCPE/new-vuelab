<template>
  <div id="adminLogin">
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="pa-6 mx-auto mb-10 mt-10"
        :elevation="hover ? 12 : 2"
        color="green accent-1"
        width="600px"
      >
        <v-card class="pa-6">
          <v-text-field
            v-model="employee.user"
            outlined
            label="USER NAME"
            placeholder="User Name"
          >User Name</v-text-field>
          <v-text-field
            v-model="employee.password"
            outlined
            label="PASSWORD"
            placeholder="Password"
          >Password</v-text-field>
          <v-btn large color="green accent-3" @click="adminLogin">
            <v-icon>mdi-account-key</v-icon>Login
          </v-btn>
        </v-card>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "adminLogin",
  data() {
    return {
      employee: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    adminLogin() {
      this.$store.dispatch("adminLogin", {
        user: this.employee.user,
        password: this.employee.password
      });
    }
  }
};
</script>