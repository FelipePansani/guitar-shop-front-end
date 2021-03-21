<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">HOME</router-link>
      </li>
      <li>
        <router-link to="/guitars">GUITARRAS</router-link>
      </li>
      <li>
        <router-link to="/amps">AMPLIFICADORES</router-link>
      </li>
      <li>
        <router-link to="/basses">BAIXOS</router-link>
      </li>
      <li>
        <router-link to="/acoustic">VIOLÕES</router-link>
      </li>
      <li class="multimidia">
        <router-link to="">MULTIMÍDIA</router-link>
        <i onmouseover="icon='fas fa-times'" :class="icon"></i>
        <ul class="multimidia-column">
          <li><router-link to="/photos">GALERIA DE FOTOS</router-link></li>
          <li><router-link to="/">GALERIA DE VÍDEOS</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/atendimento">ATENDIMENTO</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      // arrowDown: "fas fa-arrow-down",
      // closeBtn: "fas fa-times",
      // multimidiaHover: true,
      icon: "fas fa-arrow-down",
    };
  },
  methods: {
    Hover() {
      this.icon = "fas fa-times";
    },
    notHover() {
      this.icon = "fas fa-arrow-down";
    },
  },
};
</script>

<style scoped>
nav {
  background: #42b983;
}

.multimidia-column {
  position: absolute;
  display: none;
  background: #42b983;
  padding: 5px;
  animation-duration: 0.5s;
  animation-name: example;
}

.multimidia:hover .multimidia-column {
  display: block;
}

i {
  color: white;
}

ul {
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 20px 20px;
}

a {
  text-decoration: none;
  color: white;
  font-weight: 700;
}

li:active {
  color: rgb(56, 56, 56);
}

@keyframes example {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}
</style>
