<template>
  <div id="delEmployee">
    <v-btn color="pink accent-3" @click="delEmployee(id)">Del</v-btn>
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

