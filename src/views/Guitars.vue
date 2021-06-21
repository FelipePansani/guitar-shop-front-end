<template>
  <div id="app">
    <TopBar2 />
    <NavBar :Active="'guitars'" />
    <CategoryComponent :Category="'guitars'"/>
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
  data() {
    return {
      category: 'guitars',
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


</style>
