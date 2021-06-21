<template>
  <div id="app">
    <TopBar2 />
    <NavBar :Active="Category"/>
    <ItemsBrandComponent :brand="Brand" :category="Category" ,/>
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar2 from '../components/TopBar2.vue'
import NavBar from '../components/NavBar.vue'
import ItemsBrandComponent from '../components/ItemsBrandComponent.vue'
import BottomInfo from '../components/BottomInfo.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    TopBar2,
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