<template>
  <div class="top-bar">
    <span class="one">
      <div class="icons">
        <a href="https://pt-br.facebook.com/"
          ><i class="fab fa-facebook-square"></i
        ></a>
        <a href="https://twitter.com/"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.youtube.com/"
          ><i style="font-size: 32px" class="fab fa-youtube"></i
        ></a>
      </div>
    </span>
    <a href=""><h1>Single Tone</h1></a>
    <input type="text" placeholder="Digite aqui..." />
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
.top-bar {
  padding: 50px;
  columns: 3;
  background: transparent;
}

a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-right: 20px;
}

.icons {
  font-size: 28px;
  margin-right: 20px;
  float: left;
}

input {
  border-radius: 25px;
  height: 35px;
  width: 250px;
  padding: 0px 8px;
}

h1 {
  text-align: center;
}

.one {
  height: 33%;
  background-color: greenyellow;
}
</style>
