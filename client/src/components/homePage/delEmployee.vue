<template>
  <div id="delEmployee">
    <v-btn color="red accent-1" @click="delEmployee(id)">
      <v-icon>mdi-file-remove</v-icon>Del
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "delEmployee",
  props: {
    id: {
      type: Number,
      default: null
    }
  },
  methods: {
    delEmployee(id) {
      this.$store.dispatch("delEmployee", id);
    }
  }
};
</script>

