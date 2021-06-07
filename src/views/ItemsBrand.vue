<template>
  <div id="app">
    <TopBar />
    <NavBar :Active="Category"/>
    <ItemsBrandComponent :brand="Brand" :category="Category" :brandImage="brandImage"/>
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'
import ItemsBrandComponent from '../components/ItemsBrandComponent.vue'
import BottomInfo from '../components/BottomInfo.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    TopBar,
    NavBar,
    ItemsBrandComponent,
    BottomInfo,
    Footer,
  },
  data() {
    return {
      Brand: this.$route.params.brand,
      Category: this.$route.params.category,
    };
  },
};
</script>

<style>
</style>