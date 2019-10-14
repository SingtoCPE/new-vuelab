<template>
  <v-app>
    <v-card class="mx-auto" color="light-blue lighten-5" width="500px">
      <v-col cols="auto">
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
      </v-col>
    </v-card>
  </v-app>
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
