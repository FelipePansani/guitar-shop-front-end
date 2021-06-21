<template>
  <div>
    <TopLinks :category="Category" :brand="Brand" />
    <div class="brand-logo-box">
      <!-- <BrandImages /> -->
    </div>
    <div class="items-box">
      <div class="item" :key="item.id" v-for="item in info">
        <a :href="'/' + category + '/item/' + item.id">
          <img
            class="carousel-img"
            :src="item.imgPath"
            :title="item.brand + ' ' + item.model"
          />
        </a>

        <a class="product-title" :href="'/' + category + '/item/' + item.id">
          <h4>{{ item.brand }} {{ item.model }}</h4>
        </a>
        <p>
          {{ item.state }} |
          <a :href="'/' + category + '/item/' + item.id">Veja mais</a>
        </p>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopLinks from "./TopLinks";
//import BrandImages from '@/components/BrandImages'

export default {
  components: {
    TopLinks,
    BrandImages,
  },
  props: ["Brand", "Category"],
  data() {
    return {
      info: null,
      category: this.$route.params.category,
    };
  },
  computed: {
    Pagination: function () {
      return Math.floor((this.info.length - 1) / 16 + 1);
    },
  },
  mounted() {
    axios
      .get(
        `https://citara-store-1000-fb-app.herokuapp.com/${this.$route.params.category}/${this.$route.params.brand}`
      )
      .then((res) => (this.info = res.data));
  },
};
</script>

<style scoped>
h1,
h3,
h5,
p {
  color: white;
}

a,
i {
  color: #42b983;
}

.top-links {
  margin-left: 100px;
  display: inline-block;
}

.brand-logo-box {
  background: rgb(8, 8, 8);
  margin: 10px 70px 20px 70px;
  padding: 10px;
  border: 2px solid white;
}

.items-box {
  background: rgb(8, 8, 8);
  margin: 0px 70px 70px 70px;
  padding: 10px;
  border: 2px solid white;
}

.item {
  vertical-align: top;
  display: inline-block;
  bottom: 2%;
  cursor: pointer;
  margin: 20px;
  max-width: 240px;
}

.carousel-img {
  width: 140px;
  margin-left: 40px;
  text-align: center;
  cursor: pointer;
}

.product-title {
  text-decoration: none;
  text-align: left;
  color: white;
}

.product-title:hover {
  color: #42b983;
}
</style>>