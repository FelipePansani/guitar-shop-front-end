<template>
  <div>
    <div class="brand-box">
      <h3>Amplificadores</h3>
      <a href=""><img :src="image1" alt="" /></a>
      <a href=""><img :src="image2" alt="" /></a>
      <a href=""><img :src="image3" alt="" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      image1:
        "https://www.twotone.com.br/cache/com_zoo/images/Logo_Fender_2_d028a00b4bc2b834b8a7ed8b00c3eff5.jpg",
      image2:
        "https://www.twotone.com.br/cache/com_zoo/images/Logo_Marshall_f2ad04ea13965b833e0aab7757b6f9f7.jpg",
      image3:
        "https://www.twotone.com.br/cache/com_zoo/images/Logo_Orange_9722858c52a949eb1e9a44d387a7c75b.jpg",
    };
  },
};
</script>

<style scoped>
.brand-box {
  text-align: center;
  padding: 20px;
  margin: 40px;
  background-color: rgb(8, 8, 8);
  border: 2px solid white
}

.brand-box h3 {
  color: white;
}

.brand-box a {
  display: inline-block;
  margin: 30px;
}

</style>
