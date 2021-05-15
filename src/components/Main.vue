<template>
  <div class="body">
    <h2>CONFIRA O QUE ACABOU DE CHEGAR</h2>

    <!-- <transition-group style="position: absolute" mode="in-out" name="fade" appear>
    <div :style="`transition-delay:${item.id/8}s; position: relative`"
      class="carousel-imgs"
      v-for="item in first === true ? firstRow : secondRow"
      v-bind:key="item.id"
    >
      <img :src="item.imgPath" :title="item.brand + ' ' + item.model" />
    </div>

  </transition-group> -->

    <transition name="fade" appear>
      <div v-if="first == true">
          <div
            :style="`transition-delay:${item.id / 12}s; position: relative`"
            style="display: inline"
            :key="item.id"
            v-for="item in firstRow"
          >
            <img :src="item.imgPath" alt="" />
          </div>
      </div>

      <div v-else>
          <div
            :style="`transition-delay:${item.id / 6}s; position: relative`"
            style="display: inline"
            :key="item.id"
            v-for="item in secondRow"
          >
            <img :src="item.imgPath" alt="" />
          </div>
      </div>
    </transition>

    <button :class="{ active: first }" @click="setRow(1)"></button>
    <button :class="{ active: !first }" @click="setRow(2)"></button>
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
    setRow(id) {
      if (id == 1) {
        return (this.first = true);
      } else if (id == 2) {
        return (this.first = false);
      } else {
        return;
      }
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/guitars`)
      .then((res) => (this.info = res.data));

    setInterval(() => {
      this.setRow(this.number);
      if (this.number > 2) {
        this.number = 1;
      } else {
        this.number++;
      }
    }, 6000);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.body {
  margin-top: 50vh;
  color: white;
  padding: 10px;
  text-align: center;
  margin-bottom: 30vh;
  height: 10vh;
}

button {
  position: relative;
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
</style>
