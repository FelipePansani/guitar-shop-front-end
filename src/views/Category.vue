<template>
  <div>
    <TopBar />
    <NavBar />
    <div class="items-box">
    <div class="item" :key="item.id" v-for="item in info">
      <img
        class="carousel-img"
        :src="item.imgPath"
        :title="item.brand + ' ' + item.model"
      />
      <h4 class="product-title">{{item.brand}} {{item.model}}</h4>
    </div>
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
import axios from "axios";

export default {
  components: {
    TopBar,
    NavBar,
    BottomInfo,
    Footer,
  },
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/guitars/${this.$route.params.brand}`)
      .then((res) => (this.info = res.data));
  },
};
</script>

<style scoped>
h1 {
  color: white;
}

.items-box {
    background: rgb(8, 8, 8);
    margin: 70px;
    padding: 25px;
    border: 2px solid white
}

.item {
  display: inline-block;
  cursor: pointer;
  margin: 50px 50px 50px 50px;
}

.carousel-img {
  height: 180px;
  width: 140px;
  cursor: pointer;
}

.product-title{
    text-align: left;
    width: 180px;
    color: white;
}
</style>>