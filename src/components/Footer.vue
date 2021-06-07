<template>
  <div>
    <h5>
      Copyright © 2021 Single Tone - Todos os direitos reservados. Desenvolvido
      por <span>Felipe Pansani.</span>
    </h5>
    <a v-on:click="toTop()"><i class="fas fa-arrow-circle-up"></i></a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
div {
  background: rgb(20, 20, 20);
  padding: 60px;
  color: white;
  scroll-behavior: smooth;
  /* width: auto; */
}

h5,
a {
  display: inline;
}

a {
  color: #42b983;
  font-size: 30px;
  margin-left: 40%;
  cursor: pointer;
}

i:hover {
  color: gray;
}

span {
  color: #42b983;
}

@media screen and (max-width: 768px) {
  div {
    font-size: 0.8rem;
    break-after: right;
    padding: 40px;
  }
  
  h5,
  a {
    display: block;
  }
}
</style>
