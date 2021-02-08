<template>
  <div class="top-bar">
    <div class="icons">
      <a href=""><i class="fab fa-facebook-square"></i></a>
      <a href=""><i class="fab fa-twitter-square"></i></a>
      <a href=""><i class="fab fa-instagram-square"></i></a>
    </div>
    <a href=""><h1>Single Tone</h1></a>
    <input type="text" placeholder="Digite aqui..." />
  </div>
</template>

<script>
// import "font-awesome/css/font-awesome.css";

export default {
  name: "TopBar",
};
</script>

<style scoped>
.top-bar {
  padding: 15px;
  text-align: center;
}
a {
  color: black;
}

.icons {
  font-size: 28px;
  margin-right: 10px;
  float: left;
}

.icons i {
  margin-right: 20px;
}

.icons,
h1,
input {
  display: inline-block;
  margin: 40px;
}

h1 {
  text-align: center;
}

input {
  float: right;
  border-radius: 25px;
  height: 30px;
  width: 200px;
  padding: 0px 8px;
}
</style>
