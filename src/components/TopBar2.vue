<template>
  <div>
    <div class="background-stripe-one"></div>
    <div class="background-stripe-two"></div>
    <div class="background-stripe-three"></div>

    <div class="main">
      <div class="icons-list">
        <a href=""><i class="fab fa-facebook-square"></i></a>
        <a href=""><i class="fab fa-twitter-square"></i></a>
        <a href=""><i class="fab fa-youtube"></i></a>
      </div>
      <a class="logo" href="">
        <img src="https://i.ibb.co/pQRjMtZ/shield-final.png" alt="" />
      </a>
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.main {
  padding: 80px;
  display: inline-flex;
  height: auto;
}

.icons-list {
  display: inline-flex;
}

.icons-list a {
  color: white;
  margin: 4px;
  font-size: 30px;
}

.logo {
  transform: translate(0, -180%);
}

input {
  border-radius: 25px;
  height: 30px;
  padding-left: 0.8rem;
}

.icons-list,
.logo {
  height: 50px;
  margin: 0 0 0 8vw;
}

@media screen and (max-width: 768px) {
  .main {
    display: block;
    padding: 25px;
    text-align: center;
  }

  .logo img {
    width: 240px;
  }

  .icons-list,
  input,
  .logo {
    margin: 0;
  }
}
</style>