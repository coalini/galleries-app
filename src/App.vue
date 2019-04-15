<template>
  <div id="app">
    <nav-bar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/partials/NavBar.vue";
export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style>
</style>
