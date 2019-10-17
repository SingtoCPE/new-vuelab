<template>
  <div class="light-green lighten-3" id="adminLogin">
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="pa-6 mx-auto mb-10 mt-10"
        :elevation="hover ? 12 : 2"
        color="yellow lighten-5"
        width="580px"
      >
        <v-card class="mx-auto mt-4 text-center" width="100">
          <v-img
            src="@/assets/dol1.png"
            width="100"
            height="80"
            contain
            class="light-green darken-1"
          ></v-img>
        </v-card>
        <v-col class="pa-1 pb-12 pt-8 text-center">
          <h1 class="font-weight-bold">The Dollarsign Account</h1>
        </v-col>
        <v-hover v-slot:default="{ hover }">
          <v-card class="pa-10 ma-2 pt-8 pb-8" color="white" :elevation="hover ? 12 : 2">
            <h1 class="font-weight-bold text-center">Login</h1>
            <v-text-field
              class="pl-3 pr-3"
              v-model="employee.user"
              label="User"
              name="User"
              type="text"
              prepend-icon="mdi-account"
            ></v-text-field>
            <v-text-field
              class="pl-3 pr-3"
              v-model="employee.password"
              label="Password"
              name="password"
              type="password"
              prepend-icon="mdi-lock"
            ></v-text-field>
            <v-btn
              x-large
              outlined
              block
              color="light-blue darken-1"
              @click="adminLogin"
              class="mt-6 mb-3"
            >
              <v-icon>mdi-account-key</v-icon>Login
            </v-btn>
          </v-card>
        </v-hover>
        <v-col justify-self="center" cols="12" class="mb-auto pt-8 text-center">
          <h4>
            ยังไม่มีบัญชีกับเรา?
            <a
              class="font-italic font-weight-bold"
              href="http://localhost:8080/#/register"
            >สมัครใช้งานฟรี</a>
          </h4>
        </v-col>
      </v-card>
    </v-hover>

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