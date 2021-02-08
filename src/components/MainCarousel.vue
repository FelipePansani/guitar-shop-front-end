<template>
  <div>
    <img
      class="carousel-img"
      src="../../media/Guitar-Rig-6.jpg"
      alt="Carousel-img"
    /><br />
    <button></button>
    <button></button>

  
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
div {
  margin-top: -16px;
  background: rgb(56, 56, 56);
  color: white;
  padding: 10px;
  text-align: center;
}

button {
  font-size: large;
  border-radius: 100%;
}

.main-item {
  display: inline-block;
  height: 180px;
  margin: 15px;
}

.carousel-img {
  height: 320px;
  /* width: 80%; */
}

.bottom-info div {
  display: inline-block;
}
</style>
