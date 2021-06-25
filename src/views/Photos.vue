<template>
  <div id="app">
    <TopBar />
    <NavBar :Active="'multimidia'" />
    <div class="photo-section">
      <h2>PRS - Arquivo</h2>
      <img
        src="https://www.twotone.com.br/images/galeria-de-fotos/prs-arquivo/0001.jpg"
        alt=""
      />
    </div>
    <div class="photo-section">
      <h2>PRS - Fábrica</h2>
      <img
        src="https://www.twotone.com.br/images/galeria-de-fotos/prs-fabrica.jpg"
        alt=""
      />
    </div>
    <div class="photo-section">
      <h2>PRS - Private Stock</h2>
      <img
        src="https://www.twotone.com.br/images/galeria-de-fotos/prs-privatestock.jpg"
        alt=""
      />
    </div>
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import NavBar from "../components/NavBar.vue";
import BottomInfo from "../components/BottomInfo.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    TopBar,
    NavBar,
    BottomInfo,
    Footer,
  },
  data() {
    return {
      Category: "Photos",
      PhotoSections: [{}],
    };
  },
};
</script>

<style scoped>

.photo-section {
  color: white;
  margin-left: 5vw;
  width: 320px;
  display: inline-block;
}

img {
  vertical-align: top;
  width: 320px;
}

@media screen and (max-width: 768px) {
  .photo-section {
    display: block;
  }
}
</style>