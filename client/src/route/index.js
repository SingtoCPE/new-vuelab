import Vue from "vue";
import Router from "vue-router";
import adminLogin from "@/components/loginPage/adminLogin.vue";
import mainPage from "@/components/homePage/mainPage.vue";
import addEmployee from "@/components/homePage/addEmployee.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "login", component: adminLogin },
    {
      path: "/mainpage",
      name: "loged",
      component: mainPage,
      meta: { requiresAuth: true }
    },
    { path: "/add", name: "add", component: addEmployee }
  ]
});
