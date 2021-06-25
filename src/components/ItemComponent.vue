<template>
  <div>
    <TopLinks
      class="top-links"
      :category="Category"
      :brand="info[0].brand"
      :item="info[0].model"
    />

    <div class="items-box">
      <div class="right-side">
        <img class="main-img" :src="info[0].itemImage" alt="" />
      </div>

      <div class="left-side">
        <h2>{{ info[0].brand }} {{ info[0].model }}</h2>

        <h4>Informações</h4>
        <p>Tipo do produto: {{ info[0].state }}</p>
        <p>Fale Conosco: <a href="">atendimento@singletone.com.br</a></p>

        <h3>Galeria de Fotos</h3>

        <div class="gallery" :key="item.id" v-for="item in info[0].gallery">
          <a v-on:click="selectPic(item.id)">
            <img :src="item.img" />
            <a class="look-icon">
              <i class="fas fa-search-plus"></i>
            </a>
          </a>
        </div>
      </div>
    </div>

    <div v-if="selectedPic !== null" class="selected-img">
      <i v-on:click="closePic()" class="fas fa-times-circle"></i><br />
      <img :src="selectedPic" alt="" />
      <div
        @mouseover="leftArrow = true"
        @mouseleave="leftArrow = false"
        class="hidden-left"
      >
        <i
          v-if="selPicIndex - 1 > 0 && leftArrow == true"
          @click="selectPic(selPicIndex - 1)"
          class="fas fa-chevron-circle-left"
        ></i>
      </div>
      <div
        @mouseover="rightArrow = true"
        @mouseleave="rightArrow = false"
        class="hidden-right"
      >
        <i
          v-if="selPicIndex < info[0].gallery.length && rightArrow == true"
          @click="selectPic(selPicIndex + 1)"
          class="fas fa-chevron-circle-right"
        ></i>
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
  props: ["Category", "Brand", "id"],
  data() {
    return {
      info: null,
      selectedPic: null,
      selPicIndex: null,
      rightArrow: false,
      leftArrow: false,
      item: [],
    };
  },
  methods: {
    selectPic: function (id) {
      this.selectedPic = this.info[0].gallery.find(
        (item) => item.id === id
      ).img;

      this.selPicIndex = id;
    },
    closePic: function () {
      this.selectedPic = null;
    },
  },
  created() {
    axios
      .get(
        `https://citara-store-1000-fb-app.herokuapp.com/${this.$route.params.category}/item/${this.$route.params.id}`
      )
      .then((res) => (this.info = res.data));
  },
};
</script>

<style scoped>
* {
  color: white;
}

.gallery {
  display: inline;
  margin: 0.3125rem;
  cursor: pointer;
}

.gallery img {
  height: 16vh;
  min-width: 18vw;
  margin: 0;
  object-fit: cover;
}

.items-box {
  width: 80%;
  background: rgb(8, 8, 8);
  border: 2px solid white;
  min-height: auto;
  margin: 2%;
  padding: 1rem;
  display: flex;
}

.gallery .look-icon {
  position: absolute;
  text-decoration: none;
}

.gallery:hover i {
  display: block;
}

.gallery i {
  position: relative;
  display: none;
  font-size: 2rem;
  right: 7vw;
  top: 5vh;
}

.gallery:hover img {
  animation-fill-mode: forwards;
  animation-name: turn-dark;
  animation-duration: 0.2s;
}

.right-side {
  margin-left: auto;
  order: 2;
}

.right-side img {
  min-width: 30rem;
  max-width: 80%;
  max-height: 80%;
}

.hidden-left {
  position: absolute;
  transform: translate(0%, -130%);
  left: 0.2vw;
  background: transparent;
  width: 8vw;
  height: 50vh;
}

.hidden-right {
  position: absolute;
  transform: translate(0%, -130%);
  right: 0.2vw;
  background: transparent;
  width: 8vw;
  height: 50vh;
}

.selected-img {
  opacity: 0;
  position: fixed;
  margin: 1rem;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: fade-in;
  animation-duration: 1.2s;
}

.selected-img img {
  max-height: 80vh;
  max-width: 80vw;
  border: 8px solid white;
}

.selected-img .fas.fa-times-circle {
  position: absolute;
  top: 1vh;
  right: 10px;
  z-index: 1;
  font-size: 25px;
  background: black;
  border-radius: 30px;
  box-shadow: 0px 3px 2px black;
  cursor: pointer;
}

.selected-img .fas.fa-chevron-circle-left {
  position: absolute;
  z-index: 1;
  font-size: 30px;
  top: 40%;
  left: 15%;
  background: black;
  border-radius: 30px;
}

.selected-img .fas.fa-chevron-circle-right {
  position: absolute;
  z-index: 1;
  font-size: 30px;
  top: 40%;
  right: 15%;
  background: black;
  border-radius: 30px;
}

@keyframes turn-dark {
  to {
    opacity: 0.4;
    filter: alpha(opacity=40); /* msie */
  }
}

@keyframes fade-in {
  to {
    display: block;
  }
}

@media screen and (max-width: 768px) {
  .items-box {
    display: block;
  }
}
</style>