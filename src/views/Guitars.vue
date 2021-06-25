<template>
  <div id="app">
    <TopBar />
    <NavBar :Active="'guitars'" />
    <CategoryComponent :Category="'guitars'"/>
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'
import CategoryComponent from '../components/CategoryComponent.vue'
import BottomInfo from '../components/BottomInfo.vue'
import Footer from '../components/Footer.vue'

export default {
  data() {
    return {
      category: 'guitars',
    }
  },
  components: {
    TopBar,
    NavBar,
    CategoryComponent,
    BottomInfo,
    Footer
  },
}
</script>

<style>


</style>
