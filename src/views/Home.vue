<template>
  <div id="app">
    <TopBar />
    <NavBar :Active="'Home'" />
    <MainCarousel />
    <Main />
    <BottomImages />
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import NavBar from "../components/NavBar.vue";
import MainCarousel from "../components/MainCarousel.vue";
import Main from "../components/Main.vue";
import BottomImages from "../components/BottomImages.vue";
import BottomInfo from "../components/BottomInfo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    TopBar,
    NavBar,
    MainCarousel,
    Main,
    BottomImages,
    BottomInfo,
    Footer,
  },
};
</script>

<style scoped>
</style>
