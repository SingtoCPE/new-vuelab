import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import VueLocalStorage from "vue-localstorage";
import auth from "@/utils/auth";

Vue.use(Vuex);
Vue.use(VueLocalStorage);

const endpointGet = "http://localhost:3000/employee";
const endpointDel = "http://localhost:3000/employee/del";
const endpointAdd = "http://localhost:3000/employee/add";
const endpointLogin = "http://localhost:3033/employee/login";

export const store = new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async getEmployee({ commit }) {
      const { data } = await Axios({
        method: "get",
        url: endpointGet
      });
      commit("setData", data.map(data => data));
    },
    async delEmployee({ dispatch }, id) {
      await Axios({
        method: "post",
        url: endpointDel,
        data: {
          id
        }
      });
      dispatch("getEmployee");
    },
    async addEmployee({ dispatch }, { name, age, position }) {
      await Axios({
        method: "post",
        url: endpointAdd,
        data: {
          name,
          age,
          position
        }
      });
      dispatch("getEmployee");
      alert("ADDED !");
    },
    async adminLogin({ _ }, { user, password }) {
      const { data } = await Axios({
        method: "post",
        url: endpointLogin,
        data: {
          user,
          password
        }
      });
      auth.setToken(data.token);
      if (data.token) {
        window.location.href = "http://localhost:8080/#/mainpage";
        alert(data.resTextSuccess + " Welcome " + data.userFormDB.name);
      } else if (data.resTextPassFailed) {
        alert(data.resTextPassFailed);
      } else {
        alert(data.resTextUserFailed);
      }
    },
    clearToken() {
      window.location.href = "http://localhost:8080/#/";
      Vue.localStorage.remove("AuthToken");
    }
  }
});
