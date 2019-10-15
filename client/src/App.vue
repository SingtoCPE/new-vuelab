<template>
  <div id="app">
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import { store } from "./store/store";

export default {
  name: "App",
  store
};
</script>

