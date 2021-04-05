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
        <h4 class="product-title">{{ item.brand }} {{ item.model }}</h4>
        <p>{{item.state}} | <a href="">Veja mais</a></p>
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
      category: this.$route.params.category
    };
  },
  mounted() {
    axios
      .get(`http://localhost:80/guitars/${this.$route.params.brand}`)
      .then((res) => (this.info = res.data));

      console.log(this.category)
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
  padding: 10px;
  border: 2px solid white;
}

.item {
  vertical-align: top;
  display: inline-block;
  bottom: 2%;
  cursor: pointer;
  margin: 20px;
  width: 250px;
}

.carousel-img {
  width: 140px;
  margin-left: 40px;
  text-align: center;
  cursor: pointer;
}

.product-title {
  text-align: left;
  
  color: white;
}
p {
  color: white;
}

a {
  color: #42b983;;
}
</style>>