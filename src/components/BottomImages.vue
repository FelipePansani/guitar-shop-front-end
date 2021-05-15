<template>
  <div>
    <div style="display:inline" v-for="image in images" :key="image.id">
      <a href=""><img :src="image.path" alt=""></a>
    </div><br><br>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      images: [
        {
          path: "https://www.twotone.com.br/images/banners/twotone-rancher.jpg",
        },
        {
          path: "https://www.twotone.com.br/images/banners/twotone_baixos.jpg",
        },
        {
          path: "https://www.twotone.com.br/images/banners/twotone-violao.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
div {
  margin-top: -16px;
  color: white;
  padding: 10px;
  text-align: center;
}

img {
  height: 320px;
  border: 3px solid white;
  display: inline;
  width: 380px;
}

</style>
