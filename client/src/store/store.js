import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const endpointGet = "http://localhost:3000/employee";
const endpointDel = "http://localhost:3000/employee/del";
const endpointAdd = "http://localhost:3000/employee/add";

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
    }
  }
});
