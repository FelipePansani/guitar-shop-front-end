<template>
  <div>
    <div class="background-stripe-one"></div>
    <div class="background-stripe-two"></div>
    <div class="background-stripe-three"></div>

    <div class="top-bar">
      <div class="column1">
        <a href=""><i class="fab fa-facebook-square"></i></a>
        <a href=""><i class="fab fa-twitter-square"></i></a>
        <a href=""><i class="fab fa-youtube"></i></a>
      </div>

      <div class="column2">
        <router-link to="/"
          ><img src="https://i.ibb.co/pQRjMtZ/shield-final.png"
          
        /></router-link>
      </div>

      <div class="column3">
        <input type="text" placeholder="Digite aqui..." />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      logoPath: "../../media/single-tone-logo3.jpg",
    };
  },
};
</script>

<style scoped>
.background-stripe-one {
  top: 0;
  left: 0;
  position: absolute;
  background-image: url("https://image.shutterstock.com/image-photo/wood-black-background-texture-blank-260nw-489899377.jpg");
  width: 100%;
  height: 5rem;
}

.background-stripe-two {
  top: 5rem;
  left: 0;
  position: absolute;
  border-top: 1px solid white;
  background-image: url("https://image.shutterstock.com/image-photo/wood-black-background-texture-blank-260nw-489899377.jpg");
  width: 100%;
  height: 4rem;
}

.background-stripe-three {
  top: 9rem;
  left: 0;
  position: absolute;
  border-top: 1px solid white;
  background-image: url("https://image.shutterstock.com/image-photo/wood-black-background-texture-blank-260nw-489899377.jpg");
  width: 100%;
  height: 5rem;
}

.top-bar {
  background: transparent;
  height: 32vh;
}

.column1 {
  position: absolute;
  padding: 5rem;
  width: 30%;
  word-wrap: break-word;
  top: 0;
  color: white;
}

.column1 i {
  color: white;
  font-size: 32px;
  margin: 1rem;
  width: 1vw;
}

.column2 {
  position: absolute;
  padding-left: 0rem;
  width: 30%;
  left: 32%;
  word-wrap: break-word;
  top: 0;
  color: white;
}

.column3 {
  position: absolute;
  width: 30%;
  left: 70%;
  margin-top: 7%;
  word-wrap: break-word;
  top: 0;
  color: white;
}

img {
  height: 32vh;
}

input {
  border-radius: 25px;
  height: 5vh;
  width: 15rem;
  padding-left: 0.8rem;
}

@media screen and (max-width: 768px) {
}
</style>
