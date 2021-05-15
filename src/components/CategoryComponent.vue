<template>
  <div>
    <TopLinks :category="Category" />
    <div class="brand-box">
      <div class="brand-box-top">
        <h3>{{ Category.charAt(0).toUpperCase() + Category.substring(1) }}</h3>
      </div>

      <div class="actual-brand-box" v-for="image in images" :key="image.brand">
        <router-link
          class="brand-item"
          v-if="
            resBrands.includes(image.brand) ||
            image.brand ==
              `all${Category.charAt(0).toUpperCase() + Category.substring(1)}`
          "
          :to="`${Category}/` + image.brand.toLowerCase()"
        >
          <img :src="image.brandImage" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopLinks from "./TopLinks";

export default {
  components: {
    TopLinks,
  },
  props: ["Category"],
  data() {
    return {
      info: [],
      oneBrands: [],
      images: [
        {
          brand: "Fender",
          brandImage: "https://i.ibb.co/Z2qbvf8/Logo-Fender.jpg",
        },
        {
          brand: "Gibson",
          brandImage: "https://i.ibb.co/ZdMRcs1/Logo-Gibson.jpg",
        },
        {
          brand: "Gretsch",
          brandImage: "https://i.ibb.co/cTYjsdJ/Logo-Gretsch.jpg",
        },
        {
          brand: "Ibanez",
          brandImage: "https://i.ibb.co/MsL07Tp/Logo-Ibanez.jpg",
        },
        {
          brand: "PRS",
          brandImage: "https://i.ibb.co/pzbwyzB/Logo-PRS.jpg",
        },
        {
          brand: "Takamine",
          brandImage: "https://i.ibb.co/hYCSV7m/logo-takamine.jpg",
        },
        {
          brand: "Martin",
          brandImage: "https://i.ibb.co/HKPtmMw/Logo-Martin.jpg",
        },
        {
          brand: "Taylor",
          brandImage: "https://i.ibb.co/RvjNc9b/Logo-Taylor.jpg",
        },
        {
          brand: "Marshall",
          brandImage: "https://i.ibb.co/ZHSZqy1/Logo-Marshall.jpg",
        },
        {
          brand: "Orange",
          brandImage: "https://i.ibb.co/HVV3syR/Logo-Orange.jpg",
        },
        {
          brand: "Musicman",
          brandImage: "https://i.ibb.co/0y7y5vM/Logo-Music-Man.jpg",
        },
        {
          brand: "EVH",
          brandImage: "https://i.ibb.co/c1SB0XP/Logo-evh.jpg",
        },
        {
          brand: "allGuitars",
          brandImage: "https://i.ibb.co/yYmBZYF/all-guitars.png",
        },
        {
          brand: "allBasses",
          brandImage: "https://i.ibb.co/FBjzxSc/z-ver-todos-baixo.png",
        },
        {
          brand: "allAmps",
          brandImage: "https://i.ibb.co/vzpx7yc/ver-todos-ampli.png",
        },
        {
          brand: "allAcoustic",
          brandImage: "https://i.ibb.co/HPvKyzT/z-ver-todos-violao.png",
        },
      ],
    };
  },
  computed: {
    resBrands: function () {
      this.info.map((item) => this.oneBrands.push(item.brand));

      return this.oneBrands.filter(
        (item, index) => this.oneBrands.indexOf(item) === index
      );
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/${this.Category.toLowerCase()}`)
      .then((res) => (this.info = res.data));
  },
};
</script>

<style scoped>
.brand-box {
  background: black;
  margin: 5vh 5vw 5vh 5vw;
  box-shadow: 0px 0px 0px 2px white;
  border-radius: 10px;
}

.brand-box-top {
  color: black;
  background: white;
  padding: 0.2px 0;
  padding-left: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.actual-brand-box {
  display: inline-block;
  padding-top: 2vh;
  padding-bottom: 3vh;
}

.brand-item img {
  margin: 2vh 2vw 2vh 2vw;
  padding-left: 2vw;
}
</style>
