<template>
  <div>
    <div class="brand-box">
      <h3>Violões</h3>
      <a href=""><img :src="image1" alt="" /></a>
      <a href=""><img :src="image2" alt="" /></a>
      <a href=""><img :src="image3" alt="" /></a>
      <a href=""><img :src="image4" alt="" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      image1:
        "https://www.twotone.com.br/cache/com_zoo/images/Logo_Gibson_b3604bf821bbff94887b47704d5bb273.jpg",
      image2:
        "https://www.twotone.com.br/cache/com_zoo/images/Logo_Martin_b9f4c0ec4eadd68ba20113f1c30e5458.jpg",
      image3:
        "https://www.twotone.com.br/cache/com_zoo/images/logo-takamine_f88ec7ee13ebdff549b501389be0e3b4.jpg",
      image4:
        "https://www.twotone.com.br/cache/com_zoo/images/Logo_Taylor_0b4d384e89524e4ad19712810697dcf7.jpg",
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
