<template>
  <div id="getEmployee">
    <v-card class="pa-10 mx-auto" elevation="12" color="cyan lighten-5" width="800px">
      <v-card class="pa-3" elevation="5" color="white">
        <v-btn @click="getEmployee" color="cyan accent-4">Get Employee</v-btn>
        <v-simple-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>POSITION</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.age}}</td>
              <td>{{item.position}}</td>
              <td>
                <del-employee :id="item.id" />
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import delEmployee from "./delEmployee";

export default {
  name: "getEmployee",
  components: {
    delEmployee
  },
  computed: mapState({
    data: state => state.data
  }),
  methods: {
    getEmployee() {
      this.$store.dispatch("getEmployee");
    }
  }
};
</script>
