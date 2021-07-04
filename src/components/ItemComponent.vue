<template>
  <div>
    <TopLinks
      class="top-links"
      :category="Category"
      :brand="info[0].brand"
      :item="info[0].model"
    />
    
    <div class="main">
      <div class="itemsBox">
        <div class="mainImg">
          <img
            :src="info[0].itemImage"
            alt=""
          />
        </div>

        <div class="firstHalf">
          <h2>{{ info[0].brand }} {{ info[0].model }}</h2>

          <h4>Informações</h4>
          <p>Tipo do produto: {{ info[0].state }}</p>
          <p>Fale Conosco: <a href="">atendimento@singletone.com.br</a></p>

          <h3>Galeria de Fotos</h3>

          <div class="gallery" :key="item.id" v-for="item in info[0].gallery">
            <a @click="selectImg(item.id)"><img :src="item.img" alt="" /></a>
          </div>
          
        </div>

        <div v-if="selectedPic !== null" class="selectedPicStyle">
          <img :src="selectedPic" alt="" />
          <a @click="closePic()"><i class="fas fa-times-circle"></i></a>
        </div>
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
      item: [],
    };
  },
  methods: {
    selectImg(id) {
      this.selectedPic = this.info[0].gallery.find((item) => item.id == id).img;
    },
    closePic() {
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
.main {
  margin: 0;
  text-align: center;
}

a {
  color: #42b983;
}

.itemsBox {
  display: inline-block;
  background: black;
  border: 4px solid white;
  padding: 8px;
  color: white;
  width: 90%;
  text-align: left;
}

.mainImg {
  float: right;
}

.mainImg img {
  min-width: 50px;
  max-width: 500px;
  max-height: 500px;
}

.gallery {
  display: inline;
}

.gallery img {
  width: 16%;
  height: 120px;
  margin: 0.325rem;
  object-fit: cover;
  cursor: pointer;
}

.gallery img:hover {
  opacity: 0.5;
}

.selectedPicStyle {
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.selectedPicStyle img {
  max-width: 80%;
  max-height: 600px;
  border: 5px solid white;
}

.selectedPicStyle i {
  color: lightgray;
  background: black;
  border-radius: 20px;
  font-size: 20px;
  margin: 0;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 768px) {
  .itemsBox {
    text-align: center;
  }

  .mainImg img {
    max-width: 80%;
    max-height: 80%;
  }

  .gallery {
    display: flex;
    flex-direction: column;
  }

  .gallery img {
    height: 100px;
    width: 200px;
  }
}
</style>