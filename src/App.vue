<template>
  <div id="app">
    <TopBar />
    <NavBar />
    <MainCarousel />
    <Main />
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import NavBar from './components/NavBar.vue'
import MainCarousel from './components/MainCarousel.vue'
import Main from './components/Main.vue'
import BottomInfo from './components/BottomInfo.vue'
import Footer from './components/Footer.vue'
// import axios from 'axios';

// const url = 'localhost/3000/server/guitars'

// axios.get('localhost/8080/guitars')

export default {
  name: 'App',
  components: {
    TopBar,
    NavBar,
    MainCarousel,
    Main,
    BottomInfo,
    Footer
  },

  data() {
    
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
