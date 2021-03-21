<template>
  <div>
    <div class="main-carousel" v-bind:imgPath="imgPath">
      <img class="carousel-img" :src="imgPath" alt="Image" />
      <div class="carousel-navigation">
        <input checked="true" type="radio" name="dot-btns" @click="setPic(1)" />
        <input type="radio" name="dot-btns" @click="setPic(2)" />
        <input type="radio" name="dot-btns" @click="setPic(3)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCarousel",
  data() {
    return {
      imgPath: "https://www.twotone.com.br/images/ZAKKZV.jpg",
    };
  },
  methods: {
    setPic (id) {
      if (id == 1) {
        return (this.imgPath = "https://www.twotone.com.br/images/ZAKKZV.jpg");
      } else if (id == 2) {
        return (this.imgPath =
          "https://www.twotone.com.br/images/67.jpg");
      } else if (id == 3) {
        return (this.imgPath =
          "https://www.twotone.com.br/images/twotone/2020/banner/banner-seizi-relic.jpg");
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
.main-carousel {
  background: rgb(56, 56, 56);
  color: white;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
}

.carousel-img {
  animation-duration: 1s;
  animation-name: example;
}

.carousel-navigation input {
  display: inline;
}

@keyframes example {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}
</style>
