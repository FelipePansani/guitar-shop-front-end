<template>
  <div>
    <div style="display:inline" v-for="image in images" :key="image.id">
      <img :src="image.path" alt="">
    </div><br><br>

    <div class="bottom-info">
      <div class="column">
        <h3>ENDEREÇO</h3>
        <p>
          Rua Cristiano Viana, 549<br />
          Pinheiros - São Paulo-SP CEP: 05411-000
        </p>
      </div>
      <div class="column">
        <h3>HORÁRIOS</h3>
        <p>
          Segunda à Sexta 10h00 às 19h00<br /><br />
          Sábados 10h00 às 14h00
        </p>
      </div>
      <div class="column">
        <h3>ATENDIMENTO</h3>
        <p>
          Telefone (11) 3081-6600<br /><br />
          E-mail<br />
          atendimento@twotone.com.br
        </p>
      </div>
      <div class="column">
        <h3>NEWSLETTER</h3>
        <label for="email">Email *</label><br />
        <input type="search" placeholder="" /><br><br>
        <button>ASSINAR</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      images: [
        {
          path: "https://www.twotone.com.br/images/banners/twotone-rancher.jpg",
        },
        {
          path: "https://www.twotone.com.br/images/banners/twotone_baixos.jpg",
        },
        {
          path: "https://www.twotone.com.br/images/banners/twotone-violao.jpg",
        },
      ],
    };
  },
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

h3 {
  font-size: 14px;
}

.column {
  text-align: left;
  max-width: 200px;
  left: 0%;
}

button {
  font-size: large;
}

.main-item {
  display: inline-block;
  height: 180px;
  margin: 15px;
}

img {
  height: 320px;
  border: 3px solid white;
  display: inline;
  width: 380px;
}

.bottom-info div {
  display: inline-block;
}
</style>
