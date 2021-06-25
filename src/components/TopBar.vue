<template>
  <div>
    <!-- <div class="background-stripe-one"></div>
    <div class="background-stripe-two"></div>
    <div class="background-stripe-three"></div> -->

    <div class="main">
      <div class="icons-list">
        <a href=""><i class="fab fa-facebook-square"></i></a>
        <a href=""><i class="fab fa-twitter-square"></i></a>
        <a href=""><i class="fab fa-youtube"></i></a>
      </div>
      <a class="logo" href="">
        <img src="https://i.ibb.co/pQRjMtZ/shield-final.png" alt="" />
      </a>
      <input placeholder="Type here..." type="text" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;
}

.logo img {
  width: 100%;
}

.icons-list {
  display: flex;
}

.icons-list a {
  color: white;
  margin: 0.4rem;
  font-size: 2rem;
}

input {
  border-radius: 2rem;
  height: 2rem;
  padding-left: 0.8rem;
}

.icons-list,
.logo {
  margin-right: 10%;
}

@media screen and (max-width: 40rem) {
  .main {
    display: block;
    text-align: center;
    align-items: center;
    padding: 0.625rem;
  }

  .logo img {
    width: min(75%);
  }

  input {
    width: min(75%);
  }

  .icons-list  {
    display: flex;
    justify-content: center;
  }

  .icons-list,
  input,
  .logo {
    margin: 0;
  }
}
</style>