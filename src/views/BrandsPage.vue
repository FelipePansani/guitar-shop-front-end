<template>
  <div>
    <div class="brand-box">
      <h3>{{ Category }}</h3>
      {{ brands }}
      <div class="brand-item" v-for="image in images" :key="image.brand">
        <router-link :to="`${'/brand/'}` + image.brand">
          <p style="color: white">{{ image.brand }}</p>
          <!-- <img :src="item.image" alt="Not Available"/> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  props: ["Category"],
  data() {
    return {
      info: null,
      brands: [],
      images: [
        {
          brand: "Fender",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/Logo_Fender_2_f9bcc0c3659ba6864d9fee150aed2f70.jpg",
        },
        {
          brand: "Gibson",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/Logo_Gibson_9c8f1809197d7fcf8d59c9f8f98ed77d.jpg",
        },
        {
          brand: "Gretsch",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/Logo_Gretsch_2_9d99653640711c9760343a46d13b36d7.jpg",
        },
        {
          brand: "Ibanez",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/Logo_Ibanez_dff2e56df0e51a49e3ac11aac89d0dbb.jpg",
        },
        {
          brand: "PRS",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/Logo_PRS_00d25f1ab12f402f18680f8fe134b65d.jpg",
        },
        {
          brand: "Takamine",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/logo-takamine_f88ec7ee13ebdff549b501389be0e3b4.jpg",
        },
        {
          brand: "Martin",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/Logo_Martin_b9f4c0ec4eadd68ba20113f1c30e5458.jpg",
        },
        {
          brand: "Taylor",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/Logo_Taylor_0b4d384e89524e4ad19712810697dcf7.jpg",
        },
        {
          brand: "Marshall",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/Logo_Marshall_f2ad04ea13965b833e0aab7757b6f9f7.jpg",
        },
        {
          brand: "Orange",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/Logo_Orange_9722858c52a949eb1e9a44d387a7c75b.jpg",
        },
        {
          brand: "Musicman",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/Logo_MusicMan_f59817ee631d2247e328681e62555fa4.jpg",
        },
        {
          brand: "allGuitars",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/VER_TODAS_23946aa3e58e075dac1fecb670b44ad1.png",
        },
        {
          brand: "allBasses",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/z_ver_todos_baixo_f4cca4f8860d2994f7791353ef1d3c5b.png",
        },
        {
          brand: "allAmps",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/z_ver_todos_ampli_082c1aeadd42990485ebe16cc110b8b7.png",
        },
        {
          brand: "allAcoustic",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/z_ver_todos_violao_639f614d9a88c2063c86ed1c1f332f14.png",
        },
      ],
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/${this.Category.toLowerCase()}`)
      .then((res) => (this.info = res.data));

      this.brands = this.info;
  },
};
</script>

<style scoped>
.brand-box {
  text-align: center;
  padding: 20px;
  margin: 40px;
  background-color: rgb(8, 8, 8);
  border: 2px solid white;
}

.brand-box h3 {
  color: white;
}

.brand-item {
  display: inline-block;
  margin: 30px;
}
</style>
