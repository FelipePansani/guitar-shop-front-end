<template>
  <div class="main-nav">
    <nav>
      <ul>
        <div :key="item.EnName" v-for="item in NavItems">
          <div v-if="item.EnName == 'multimidia'">
            <li
              @mouseover="icon='fas fa-times'"
              @mouseleave="icon='fas fa-arrow-down'"
              class="multimidia"
            >
              <router-link :class="{ active: myActive == item.EnName }" to="">MULTIMÍDIA</router-link>
              <i :style="myActive === item.EnName ? 'color: rgb(56, 56, 56);' : ''" :class="icon"></i>
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
  background: #42b983;
  height: auto;
  padding: 0.125rem 0.625rem;
}

 nav * > *{
  display: inline-block;
}

.fas.fa-bars {
  padding: 0.125rem;
  border-radius: 5%;
  box-shadow: 0 0 4px black;
  color: white;
}

.multimidia-column {
  position: absolute;
  display: none;
  background: #42b983;
  padding:  0.3125rem;
  animation-duration: 0.5s;
  animation-name: fade-in;
  z-index: 1;
}

.multimidia-column li {
  display: block;
  margin: 0.75rem;
}

.fas.fa-arrow-down {
  margin-left: 0.3125rem;
  color: white;
}

.fas.fa-times {
  margin-left: 0.3125rem;
  color: white;
}

.multimidia:hover .multimidia-column {
  display: block;
  padding: 0 0.75rem;
}

li {
  margin: 0 0 0 1.25rem;
}

a {
  text-decoration: none;
  color: white;
  font-weight: 700;
}

.active {
  color: rgb(56, 56, 56);
}

.active i {
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
</style>
