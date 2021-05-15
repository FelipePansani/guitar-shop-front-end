<template>
  <div id="app">
    <TopBar />
    <NavBar :Active="category"/>
    <ItemComponent :Category="thisCategory" :id="id"/>
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import NavBar from "../components/NavBar.vue";
import BottomInfo from "../components/BottomInfo.vue";
import Footer from "../components/Footer.vue";
import ItemComponent from "../components/ItemComponent.vue";

export default {
  components: {
    TopBar,
    NavBar,
    BottomInfo,
    Footer,
    ItemComponent,
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