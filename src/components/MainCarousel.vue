<template>
  <div>
    <div class="main-carousel" :key="images.id">
      <img class="carousel-img" :src="currentImage" alt="Image" />
      <div class="carousel-navigation">
        <input :checked="true" type="radio" name="dot-btns" @click="setPic(1)" />
        <input :checked="false" type="radio" name="dot-btns" @click="setPic(2)" />
        <input :checked="false" type="radio" name="dot-btns" @click="setPic(3)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCarousel",
  data() {
    return {
      currentImage: "https://www.twotone.com.br/images/ZAKKZV.jpg",
      images: [
        {
          id: 1,
          imgPath: "https://www.twotone.com.br/images/ZAKKZV.jpg",
        },
        {
          id: 2,
          imgPath: "https://www.twotone.com.br/images/67.jpg",
        },
        {
          id: 3,
          imgPath:
            "https://www.twotone.com.br/images/twotone/2020/banner/banner-seizi-relic.jpg",
        },
      ],
    };
  },

  methods: {
    setPic(id) {
      this.currentImage = this.images.find((item) => item.id == id).imgPath;
    },
    myCounter(number) {
      setInterval(() => {
        if (number == 0) {
          this.currentImage = "https://www.twotone.com.br/images/ZAKKZV.jpg";
          number++;
        } else if (number == 1) {
          this.currentImage = "https://www.twotone.com.br/images/67.jpg";
          number++;
        } else if (number == 2) {
          this.currentImage =
            "https://www.twotone.com.br/images/twotone/2020/banner/banner-seizi-relic.jpg";
          number = 0;
        } else {
          return "err";
        }
      }, 3000);
    },
  },
  mounted() {
    this.myCounter(0);
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
