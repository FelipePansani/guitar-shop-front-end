<template>
  <div id="app">
    <TopBar2 />
    <NavBar :Active="Category" />
    <CategoryComponent :category="Category"/>
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar2 from '../components/TopBar2.vue'
import NavBar from '../components/NavBar.vue'
import CategoryComponent from '../components/CategoryComponent.vue'
import BottomInfo from '../components/BottomInfo.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      Category: "basses"
    }
  },
  components: {
    TopBar2,
    NavBar,
    CategoryComponent,
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
