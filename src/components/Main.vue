<template>
  <div class="body">
    <h2>CONFIRA O QUE ACABOU DE CHEGAR</h2>
    
    <div class="carousel-imgs">
      <div :key="item.id" v-for="item in first ? firstRow : secondRow">
        <transition name="fade" mode="out-in" appear>
          <a :style="`transition-delay:${item.id / 9}s; `" :href="'/'">
            <img :src="item.imgPath" alt="" />
          </a>
        </transition>
      </div>
    </div>

    <button :class="{ active: first }" @click="first = true"></button>
    <button :class="{ active: !first }" @click="first = false"></button>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Main",
  data() {
    return {
      info: [],
      number: 1,
      first: true,
    };
  },
  computed: {
    firstRow() {
      return this.info.slice(0, 9);
    },
    secondRow() {
      return this.info.slice(9, 18);
    },
  },
  methods: {
    autoSlide() {
      return (this.first = !this.first);
    },
  },
  created() {
    setInterval(() => (this.first = !this.first), 8000);
  },
  mounted() {
    axios
      .get(`https://citara-store-1000-fb-app.herokuapp.com/guitars`)
      .then((res) => (this.info = res.data));
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.body {
  color: white;
  text-align: center;
}

button {
  height: 0.9375rem;
  width: 0.875rem;
  margin-right: 0.5vw;
  border: none;
  border-radius: 0.875rem;
}

.active {
  background: #42b983;
}

.carousel-imgs {
  display: flex;
  justify-content: center;
}

img {
  height: 8.75rem;
  width: 7.5rem;
  margin: 0.625rem;
  opacity: 1;
}

@media screen and (max-width: 768px) {
  img {
    height: max(95%);
    width: max(90%);
    margin: 0.125rem;
  }
}
</style>
