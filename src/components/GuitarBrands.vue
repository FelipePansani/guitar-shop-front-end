<template>
  <div>
    <div class="brand-box">
      <h3>Guitarras</h3>
      <div class="brand-item" v-for="item in images" :key="item.brand">
        <router-link :to="`${'/category/'}` + item.brand"
          ><img :src="item.image" alt=""
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
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
          brand: "allGuitars",
          image:
            "https://www.twotone.com.br/cache/com_zoo/images/VER_TODAS_23946aa3e58e075dac1fecb670b44ad1.png",
        },
      ],
    };
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
