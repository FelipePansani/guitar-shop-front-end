<template>
  <div id="app">
    <TopBar />
    <NavBar :Active="'multimidia'"/>
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
    <div class="photo-section">
      <h2>PRS - Violões e Amplificadores</h2>
      <img
        src="https://www.twotone.com.br/images/galeria-de-fotos/prs-violoes-e-amplificadores.jpg"
        alt=""
      />
    </div>
    <div class="photo-section">
      <h2>Gibson Tour - Custom</h2>
      <img
        src="https://www.twotone.com.br/images/galeria-de-fotos/gibson-tour-custom/gibson-custom15b.jpg"
        alt=""
      />
    </div>
    <div class="photo-section">
      <h2>Gibson Tour - USA</h2>
      <img
        src="https://www.twotone.com.br/images/galeria-de-fotos/gibson-tour-usa/gibsonusa54.jpg"
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
      Category: "Photos"
    };
  },
};
</script>

<style scoped>
#app {
  color: white;
}

.photo-section {
  margin-left: 100px;
  width: 320px;
  display: inline-block;
}

img {
  width: 320px;
}
</style>