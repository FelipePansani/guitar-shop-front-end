<template>
  <div class="main-nav">
    <div class="up-bar">
      <i v-on:click="showMenu()" class="fas fa-bars"></i>
    </div>
    <nav :class="{ mobile_nav: isMobile }">
      <ul>
        <div :key="item.id" v-for="item in NavItems">
          <div v-if="item.EnName == 'multimidia'">
            <li
              @mouseover="icon='fas fa-times'"
              @mouseleave="icon='fas fa-arrow-down'"
              class="multimidia"
            >
              <router-link :class="{ active: myActive == item.EnName }" to="">MULTIMÍDIA</router-link>
              <i :id="{ active: myActive == item.EnName }" :class="icon"></i>
              <ul class="multimidia-column">
                <li>
                  <router-link to="/photos">GALERIA DE FOTOS</router-link>
                </li>
                <li>
                  <router-link to="">GALERIA DE VÍDEOS</router-link>
                </li>
              </ul>
            </li>
          </div>
          <li>
            <router-link v-if="item.EnName !== 'multimidia'"
              :class="{ active: myActive == item.EnName }"
              :to="`/${item.path}`"
              >{{ item.name }}</router-link
            >
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: ["Active"],
  data() {
    return {
      icon: "fas fa-arrow-down",
      isActive: true,
      isMobile: false,
      myActive: this.Active,
      NavItems: [
        { id: 1, name: "HOME", EnName: "Home", path: "" },
        { id: 2, name: "GUITARRAS", EnName: "guitars", path: "guitars" },
        { id: 3, name: "AMPLIFICADORES", EnName: "amps", path: "amps" },
        { id: 4, name: "BAIXOS", EnName: "basses", path: "basses" },
        { id: 5, name: "VIOLÕES", EnName: "acoustic", path: "acoustic" },
        { id: 6, name: "MULTIMÍDIA", EnName: "multimidia" },
        { id: 7, name: "ATENDIMENTO", EnName: "atendimento", path: "atendimento", },
      ],
    };
  },

  methods: {
    showMenu: function () {
      this.isMobile = true;
    },
  },
};
</script>

<style scoped>
.main-nav {
  width: 100%;
}

nav {
  background: #42b983;
}

.mobile_nav {
  position: fixed;
  background: #42b983;
  height: 100%;
  top: 0;
  left: 0;
  width: 34vw;
  display: block;
}

.up-bar {
  position: absolute;
  background: #42b983;
  font-size: 28px;
  width: 100%;
  margin-left: 0;
  top: 0;
  padding: 5px;
  display: none;
}

.fas.fa-bars {
  padding: 2px;
  border-radius: 5%;
  box-shadow: 0 0 4px black;
  color: white;
}

.multimidia-column {
  position: absolute;
  display: none;
  background: #42b983;
  padding: 5px;
  animation-duration: 0.5s;
  animation-name: fade-in;
  z-index: 1;
}

.multimidia:hover .multimidia-column {
  display: block;
}

.fas.fa-arrow-down {
  margin-left: 5px;
  color: white;
}

.fas.fa-times {
  margin-left: 5px;
  color: white;
}

ul {
  list-style-type: none;
}

li {
  margin: 20px 20px;
}

div {
  display: inline-block;
}

a {
  text-decoration: none;
  color: white;
  font-weight: 700;
}

.active {
  color: rgb(56, 56, 56);
}

#active {
  color: rgb(56, 56, 56);
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
  nav {
    display: none;
  }
  .up-bar {
    display: block;
  }
}
</style>
