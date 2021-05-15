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
  background: rgb(56, 56, 56);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url("https://media.istockphoto.com/photos/black-carpet-texture-background-picture-id1152927438?k=6&m=1152927438&s=170667a&w=0&h=_pSIXPjBH4RswBbTGUCnbpBi5SAcOOS_3yQ4QnIM-AM=");
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
