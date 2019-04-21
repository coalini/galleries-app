<template>
  <div id="app">
    <nav-bar/>
    <router-view class="container"/>
  </div>
</template>

<script>
import NavBar from "@/components/partials/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1 {
  margin: 50px 0 !important;
  text-align: center;
}
</style>
