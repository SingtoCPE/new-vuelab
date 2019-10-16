<template>
  <div class="light-green lighten-3">
    <v-card class="d-flex align-end flex-column">
      <v-btn color="red lighten-1" @click="gotoLogin">LOGIN</v-btn>
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
          color="light-green darken-1"
          width="580px"
        >
          <v-card class="pa-6">
            <v-card
              class="pa-auto mx-auto mt-5 mb-10 text-center white--text"
              width="350"
              color="light-green darken-1"
            >
              <h1>REGISTER ACCOUNT</h1>
            </v-card>
            <label>USER NAME</label>
            <v-text-field v-model="account.user" outlined placeholder="User Name"></v-text-field>
            <label>NAME</label>
            <v-text-field v-model="account.name" outlined placeholder="Name"></v-text-field>
            <label>PASSWORD</label>
            <v-text-field v-model="account.password" outlined placeholder="Password"></v-text-field>
            <label>CONFIRM PASSWORD</label>
            <v-text-field v-model="account.confirmPassword" outlined placeholder="Confirm Password"></v-text-field>
            <v-checkbox v-model="checkbox1" :label="`${textConfirm} : ${checkbox1.toString()}`"></v-checkbox>
            <v-btn
              x-large
              outlined
              block
              color="light-blue darken-1"
              type="submit"
              @click.prevent="validateForm"
            >
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
    </form>

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
  data() {
    return {
      errors: [],
      checkbox1: true,
      textConfirm: "กรุณาอ่านกฎและข้อตกลง",
      account: {
        user: "",
        name: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    gotoLogin() {
      window.location.href = "http://localhost:8080/#/";
    },
    addAccount() {
      this.$store.dispatch("addAccount", {
        user: this.account.user,
        password: this.account.password,
        name: this.account.name
      });
    },
    validateForm() {
      if (
        this.account.user &&
        this.account.name &&
        this.account.password &&
        this.account.confirmPassword &&
        this.account.password == this.account.confirmPassword
      ) {
        this.addAccount();
      }
      this.errors = [];
      if (this.account.password != this.account.confirmPassword) {
        this.errors.push("Password is not match Confirm password");
      }
      if (!this.account.user) {
        this.errors.push("User should not be empty");
      }
      if (!this.account.name) {
        this.errors.push("Name should not be empty");
      }
      if (!this.account.password) {
        this.errors.push("Password should not be empty");
      }
      alert("Register Failed!");
    }
  }
};
</script>