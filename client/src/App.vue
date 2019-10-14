<template>
  <get-employee />
</template>

<script>
import getEmployee from "./components/getEmployee";
import { store } from "./store/store";

export default {
  name: "App",
  store,
  components: {
    getEmployee
  }
};
</script>
