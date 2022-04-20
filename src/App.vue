<template>
  <StyledNavbar />
  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import StyledNavbar from "./components/StyledNavbar";

export default {
  name: "App",
  components: {
    StyledNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
