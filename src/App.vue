<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  margin: 0;
  background: rgb(56, 56, 56);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url("https://i.ibb.co/b3rpP6L/Black-carpet-texture-background-clsoe-up-view.jpg");
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
