<template>
  <div class="main">
    <TopLinks :category="Category" :brand="''" />

    <div class="brands-box">
      <div v-for="image in images" :key="image.id">
        <a
          class="brand-item"
          v-if="
            resBrands.includes(image.brand) ||
            image.brand ==
              `all${Category.charAt(0).toUpperCase() + Category.substring(1)}`
          "
          :href="`${Category}/` + image.brand.toLowerCase()"
        >
          <img :src="image.brandImage" />
        </a>
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
          id: 1,
          brand: "Fender",
          brandImage: "https://i.ibb.co/Z2qbvf8/Logo-Fender.jpg",
        },
        {
          id: 2,
          brand: "Gibson",
          brandImage: "https://i.ibb.co/ZdMRcs1/Logo-Gibson.jpg",
        },
        {
          id: 3,
          brand: "Gretsch",
          brandImage: "https://i.ibb.co/cTYjsdJ/Logo-Gretsch.jpg",
        },
        {
          id: 4,
          brand: "Ibanez",
          brandImage: "https://i.ibb.co/MsL07Tp/Logo-Ibanez.jpg",
        },
        {
          id: 5,
          brand: "PRS",
          brandImage: "https://i.ibb.co/pzbwyzB/Logo-PRS.jpg",
        },
        {
          id: 6,
          brand: "Takamine",
          brandImage: "https://i.ibb.co/hYCSV7m/logo-takamine.jpg",
        },
        {
          id: 7,
          brand: "Martin",
          brandImage: "https://i.ibb.co/HKPtmMw/Logo-Martin.jpg",
        },
        {
          id: 8,
          brand: "Taylor",
          brandImage: "https://i.ibb.co/RvjNc9b/Logo-Taylor.jpg",
        },
        {
          id: 9,
          brand: "Marshall",
          brandImage: "https://i.ibb.co/ZHSZqy1/Logo-Marshall.jpg",
        },
        {
          id: 10,
          brand: "Orange",
          brandImage: "https://i.ibb.co/HVV3syR/Logo-Orange.jpg",
        },
        {
          id: 11,
          brand: "Musicman",
          brandImage: "https://i.ibb.co/0y7y5vM/Logo-Music-Man.jpg",
        },
        {
          id: 12,
          brand: "EVH",
          brandImage: "https://i.ibb.co/c1SB0XP/Logo-evh.jpg",
        },
        {
          id: 13,
          brand: "allGuitars",
          brandImage: "https://i.ibb.co/yYmBZYF/all-guitars.png",
        },
        {
          id: 14,
          brand: "allBasses",
          brandImage: "https://i.ibb.co/FBjzxSc/z-ver-todos-baixo.png",
        },
        {
          id: 15,
          brand: "allAmps",
          brandImage: "https://i.ibb.co/vzpx7yc/ver-todos-ampli.png",
        },
        {
          id: 16,
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
  created() {
    axios
      .get(`https://single-tone-server.vercel.app/${this.Category.toLowerCase()}`)
      .then((res) => (this.info = res.data));
  },
};
</script>

<style scoped>

/* .brand-box {
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
} */

.main {
  margin: 1vh 2vw;
}

.brands-box {
  background: black;
  box-shadow: 0px 0px 0px 2px white;
  border-radius: 10px;
  margin: 2rem;
}

.brands-box > div {
  display: inline;
}

.brand-item {
  margin: 5rem 3rem;
}

@media screen and (max-width: 40rem) {

}
</style>
