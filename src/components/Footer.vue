<template>
  <div>
    <h5>
      Copyright © 2021 Single Tone - Todos os direitos reservados. Desenvolvido
      por <span>Felipe Pansani.</span>
    </h5>
    <a href="#top"><i class="fas fa-arrow-circle-up"></i></a>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
div {
  background: rgb(20, 20, 20);
  height: 100px;
  margin-bottom: 0px;
  padding-top: 80px;
  padding-left: 40px;
  color: white;
  columns: 2;
}

a {
  position: absolute;
  color: #42b983;
  font-size: 30px;
  text-align: right;
  right: 80px;
}

span {
  color: #42b983;
}
</style>
