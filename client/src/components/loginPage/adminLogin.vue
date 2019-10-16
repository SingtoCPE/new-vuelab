<template>
  <div id="adminLogin">
    <v-container class="light-green lighten-3">
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="pa-6 mx-auto mb-10 mt-10"
          :elevation="hover ? 12 : 2"
          color="light-green darken-1"
          width="580px"
        >
          <v-card class="pa-6 pb-10">
            <v-card class="mx-auto text-center" width="100">
              <v-img
                src="@/assets/dol1.png"
                width="100"
                height="80"
                contain
                class="light-green darken-1"
              ></v-img>
            </v-card>
            <v-col class="pa-1 pb-12 pt-8 text-center">
              <h1 class="font-weight-bold">The Dollarsign Account Login</h1>
            </v-col>
            <label>USER NAME</label>
            <v-text-field outlined v-model="employee.user" placeholder="User Name">User Name</v-text-field>
            <label>PASSWORD</label>
            <v-text-field outlined v-model="employee.password" placeholder="Password">Password</v-text-field>
            <v-btn x-large block outlined color="light-blue darken-1" @click="adminLogin">
              <v-icon>mdi-account-key</v-icon>Login
            </v-btn>
            <v-col justify-self="center" cols="12" class="mb-auto pt-12 text-center">
              <h4>
                ยังไม่มีบัญชีกับเรา?
                <a
                  class="font-italic font-weight-bold"
                  href="http://localhost:8080/#/register"
                >สมัครใช้งานฟรี</a>
              </h4>
            </v-col>
          </v-card>
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
    </v-container>
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