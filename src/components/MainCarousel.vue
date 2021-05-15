<template>
  <div class="main">
    <div style="display: inline-block" :key="image.id" v-for="image in images">
      <div>
        <img
          v-if="image.checked === true"
          :src="image.imgPath"
          alt="Image not available"
        />
      </div>

      <div class="button-row">
        <button
          :class="{ active: image.checked }"
          @click="selectImg(image.id)"
          :checked="image.checked"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCarousel",
  data() {
    return {
      number: 1,
      images: [
        {
          id: 1,
          imgPath: "https://i.ibb.co/0nmw3rZ/ZAKKZV.jpg",
          checked: true,
        },
        {
          id: 2,
          imgPath: "https://i.ibb.co/jgKr4J7/FCSLM.jpg",
          checked: false,
        },
        {
          id: 3,
          imgPath: "https://i.ibb.co/cT5gGK1/SVER.jpg",
          checked: false,
        },
      ],
    };
  },
  computed: {},
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
    }, 4000);
  },
};
</script>

<style scoped>
.main {
  width: 100%;
}

.main img {
  position: absolute;
  top: 46vh;
  left: 6%;
  animation-duration: 1s;
  animation-name: fade-in;
}

.button-row {
  position: relative;
  left: 46vw;
  top: 54vh;
  bottom: 1vh;
}

.button-row button {
  width: 14px;
  height: 15px;
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
  .button-row {
    top: 30vh;
  }
}
</style>
