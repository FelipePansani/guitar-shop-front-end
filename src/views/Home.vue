<template>
  <div id="app">
    <TopBar />
    <NavBar />
    <MainCarousel />
    <Main />
    <BottomImages />
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'
import MainCarousel from '../components/MainCarousel.vue'
import Main from '../components/Main.vue'
import BottomImages from '../components/BottomImages.vue'
import BottomInfo from '../components/BottomInfo.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    NavBar,
    MainCarousel,
    Main,
    BottomImages,
    BottomInfo,
    Footer
  },
}
</script>

<style>
body {
  margin: 0;
  background: rgb(56, 56, 56);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
