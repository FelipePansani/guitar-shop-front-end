<template>
  <div id="app">
    <TopBar2 />
    <NavBar :Active="category" />
    <ItemComponent :Category="thisCategory" :id="id" />
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar2 from "../components/TopBar2.vue";
import NavBar from "../components/NavBar.vue";
import ItemComponent from "../components/ItemComponent.vue";
import BottomInfo from "../components/BottomInfo.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    TopBar2,
    NavBar,
    ItemComponent,
    BottomInfo,
    Footer,
  },
  data() {
    return {
      thisCategory: this.$route.params.category,
      id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>