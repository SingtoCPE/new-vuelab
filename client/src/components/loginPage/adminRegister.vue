<template>
  <div>
    <v-card class="d-flex align-end flex-column">
      <v-btn color="red lighten-1" @click="gotoLogin">LOGIN</v-btn>
    </v-card>

    <v-hover v-slot:default="{ hover }">
      <v-card
        class="pa-6 mx-auto mb-10 mt-10"
        :elevation="hover ? 12 : 2"
        color="light-green darken-1"
        width="580px"
      >
        <v-card class="pa-6">
          <v-card
            class="pa-auto mx-auto mt-5 mb-10 text-center"
            width="350"
            color="light-green darken-1"
          >
            <h1>Register Account</h1>
          </v-card>
          <label>USER NAME</label>
          <v-text-field outlined placeholder="User Name"></v-text-field>
          <label>PASSWORD</label>
          <v-text-field outlined placeholder="Password"></v-text-field>
          <label>CONFIRM PASSWORD</label>
          <v-text-field outlined placeholder="Confirm Password"></v-text-field>
          <v-btn x-large outlined block color="light-blue darken-1">
            <v-icon>mdi-account-plus</v-icon>Register
          </v-btn>
          <v-col justify-self="center" cols="12" class="mb-auto pt-12 text-center">
            <h4>
              มีบัญชีกับเราแล้ว?
              <a
                class="font-italic font-weight-bold"
                href="http://localhost:8080/"
              >เข้าสู่ระบบ</a>
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
  </div>
</template>
<script>
export default {
  name: "admniResgister",
  methods: {
    gotoLogin() {
      window.location.href = "http://localhost:8080/#/";
    }
  }
};
</script>