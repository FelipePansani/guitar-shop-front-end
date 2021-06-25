<template>
  <div class="main">
    <div :key="image.imgPath" v-for="image in images">
      <div>
        <img
          v-if="image.checked == true"
          :src="image.imgPath"
          alt="Image not available"
        />
      </div>
    </div>

    <div class="button-row" :key="image.id" v-for="image in images">
      <button
        :class="{ active: image.checked }"
        @click="selectImg(image.id)"
        :checked="image.checked"
      ></button>
    </div>
  </div>
</template>

<script>
import ImageOne from "../../public/carouselOne/ZAKKZV.jpg";
import ImageTwo from "../../public/carouselOne/FCSLM.jpg";
import ImageThree from "../../public/carouselOne/SVER.jpg";

export default {
  name: "MainCarousel",
  data() {
    return {
      number: 1,
      images: [
        {
          id: 1,
          // imgPath: "https://i.ibb.co/0nmw3rZ/ZAKKZV.jpg",
          imgPath: ImageOne,
          checked: true,
        },
        {
          id: 2,
          // imgPath: "https://i.ibb.co/jgKr4J7/FCSLM.jpg",
          imgPath: ImageTwo,
          checked: false,
        },
        {
          id: 3,
          // imgPath: "https://i.ibb.co/cT5gGK1/SVER.jpg",
          imgPath: ImageThree,
          checked: false,
        },
      ],
    };
  },

  methods: {
    selectImg(id) {
      this.images.find((item) => item.id == id).checked = true;
      this.images
        .filter((item) => item.id !== id)
        .map((item) => (item.checked = false));
      this.number = id;
    },
  },
    mounted() {
      setInterval(() => {
        this.images.find((item) => item.id == this.number).checked = true;
        this.images
          .filter((item) => item.id !== this.number)
          .map((item) => (item.checked = false));
        if (this.number > 2) {
          this.number = 1;
        } else {
          this.number++;
        }
      }, 5000);
    },
};
</script>

<style scoped>
.main {
  text-align: center;
  padding: 0.75rem 0;
}

.main img {
  animation-duration: 1s;
  animation-name: fade-in;
  width: 90vw;
}

.button-row {
  display: inline;
}

.button-row button {
  width: 0.875rem;
  height: 0.9375rem;
  margin-right: 0.5vw;
  border: none;
  border-radius: 30px;
}

.active {
  background: #42b983;
}

@keyframes fade-in {
  from {
    opacity: 0.1;
  }

  to {
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  /* .main {
    height: 30vh;
  } */
}

</style>
