<template>
  <div class="body">
    <h2>CONFIRA O QUE ACABOU DE CHEGAR</h2>
    <div
      style="display: inline-block"
      v-for="item in first === true ? firstRow : secondRow"
      v-bind:key="item.id"
    >
      <img
        class="carousel-img"
        :src="item.imgPath"
        :title="item.brand + ' ' + item.model"
      />
    </div>
    <br /><br />

    <input
      checked="true"
      type="radio"
      id="first"
      name="carousel"
      @click="setRow(1)"
    />
    <input type="radio" id="second" name="carousel" @click="setRow(2)" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Main",
  data() {
    return {
      info: [],
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
  },
};
</script>

<style scoped>
.body {
  background: rgb(56, 56, 56);
  color: white;
  padding: 10px;
  text-align: center;
  margin-bottom: 30px;
}

button {
  font-size: large;
  border-radius: 100%;
}

.carousel-img {
  height: 0px;
  width: 0px;
  margin: 8px;
  opacity: 0;
  animation: pop-left 2s normal forwards;
}

img:nth-child(1) {
  animation-delay: 0.2s;
}

img:nth-child(2) {
  animation-delay: 0.4s;
}

img:nth-child(3) {
  animation-delay: 0.6s;
}


@keyframes pop-left {
  to {
    opacity: 1;
    height: 140px;
    width: 120px;
  }
}
</style>
