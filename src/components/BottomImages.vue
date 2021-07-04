<template>
  <div class="main">
    <div class="images" v-for="image in images" :key="image.id">
      <a href=""><img :src="image.path" alt=""></a>
    </div>
    <!-- <br><br> -->
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      images: [
        {
          path: "https://i.ibb.co/5x3qpCP/twotone-rancher.jpg",
        },
        {
          path: "https://i.ibb.co/Xt93Fw7/twotone-violao.jpg",
        },
        {
          path: "https://i.ibb.co/vDJFg48/twotone-baixos.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  text-align: center;
}

.images {
  color: white;
  padding: 10px;
  display: inline;
}

img {
  margin: 10px 0;
  height: 320px;
  border: 3px solid white;
  width: 320px;
  /* width: 380px; */
}

@media screen and (max-width: 40rem) {
  
}
</style>
