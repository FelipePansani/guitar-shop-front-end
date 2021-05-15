<template>
  <div id="app">
    <TopBar />
    <NavBar :Active="'Home'"/>
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
body {
  margin: 0;
  background-image: url("https://media.istockphoto.com/photos/black-carpet-texture-background-picture-id1152927438?k=6&m=1152927438&s=170667a&w=0&h=_pSIXPjBH4RswBbTGUCnbpBi5SAcOOS_3yQ4QnIM-AM=");
}
</style>
