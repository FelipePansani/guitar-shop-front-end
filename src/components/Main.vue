<template>
  <div class="body">
    <h2>CONFIRA O QUE ACABOU DE CHEGAR</h2>

    <transition name="fade" mode="out-in" appear>
      <div :key="first">
        <div v-if="first === true">
          <transition-group name="fade" appear>
            <div
              :style="`transition-delay:${item.id / 9}s; `"
              style="display: inline"
              :key="item.id"
              v-for="item in firstRow"
            >
              <img :src="item.imgPath" alt="" />
            </div>
          </transition-group>
        </div>
        <div v-else>
          <transition-group name="fade" appear>
            <div
              :style="`transition-delay:${item.id / 9}s; `"
              style="display: inline"
              :key="item.id"
              v-for="item in secondRow"
            >
              <img :src="item.imgPath" alt="" />
            </div>
          </transition-group>
        </div>
      </div>
    </transition>

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
    firstRow: function () {
      return this.info.slice(0, 9);
    },
    secondRow: function () {
      return this.info.slice(9, 18);
    },
  },
  methods: {
    autoSlide() {
      setInterval(() => (this.first = !this.first), 8000);
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/guitars`)
      .then((res) => (this.info = res.data));

    this.autoSlide();
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
  padding: 10px;
  text-align: center;
}

button {
  height: 15px;
  width: 14px;
  margin-right: 0.5vw;
  border: none;
  border-radius: 30px;
}

.active {
  background: #42b983;
}
.carousel-imgs {
  height: 170px;
  display: inline-block;
}

img {
  height: 140px;
  width: 120px;
  margin: 8px;
  text-align: right;
  opacity: 1;
}

@media screen and (max-width: 768px) {
  img {
    height: 60px;
    width: 50px;
  }
}
</style>
