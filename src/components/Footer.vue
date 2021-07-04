<template>
  <div>
    <h5>
      Copyright © 2021 Single Tone - Todos os direitos reservados. Desenvolvido
      por<span> Felipe Pansani.</span>
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
  padding: 3.75rem;
  color: white;
  scroll-behavior: smooth;
}

h5,
a {
  display: flex;
}

a {
  color: #42b983;
  font-size: 1.875rem;
  cursor: pointer;
  justify-content: right;
}

i:hover {
  color: gray;
}

span {
  color: #42b983;
}


@media screen and (max-width: 40rem) {
  div {
    font-size: 0.8rem;
    break-after: right;
    padding: 40px;
  }

    /* h5,
    a {
      display: block;
    } */
}
</style>
