<template>
  <div id="getEmployee">
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="pa-6 mx-auto mb-10"
        :elevation="hover ? 12 : 2"
        color="purple lighten-4"
        width="800px"
      >
        <v-btn large @click="getEmployee" color="purple accent-3">
          <v-icon>mdi-file-eye</v-icon>Get Employee
        </v-btn>
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
    </v-hover>
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
