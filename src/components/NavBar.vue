<template>
  <nav>
    <ul>
      <li>
        <a href="">HOME</a>
      </li>
      <li>
         <router-link to="/guitars">bezKoder</router-link>
        <!-- <a href="http://localhost:8080/guitars">GUITARRAS</a> -->
      </li>
      <li>
        <a href="">AMPLIFICADORES</a>
      </li>
      <li>
        <a href="">BAIXOS</a>
      </li>
      <li>
        <a href="">VIOLÕES</a>
      </li>
      <li><a href="">MULTIMÍDIA</a><i class="fas fa-arrow-down"></i></li>
      <li>
        <a href="">ATENDIMENTO</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
nav {
  background: #42b983;
}

.fas.fa-arrow-down {
  margin-left: 8px;
  color: white;
  background: transparent;
  border: none;
}

i:hover i{
  display: none;
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
}
</style>
