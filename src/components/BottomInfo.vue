<template>
  <div>
    <div>
      <img src="../../media/twotone-rancher.jpg" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>

    <div class="bottom-info">
      <div>
        <h3>ENDEREÇO</h3>
        <p>
          Rua Cristiano Viana, 549<br />
          Pinheiros - São Paulo-SP CEP: 05411-000
        </p>
      </div>
      <div>
        <h3>HORÁRIOS</h3>
        <p>
          Segunda à Sexta 10h00 às 19h00<br /><br />
          Sábados 10h00 às 14h00
        </p>
      </div>
      <div>
        <h3>ATENDIMENTO</h3>
        <p>
          Telefone (11) 3081-6600<br /><br />
          E-mail<br />
          atendimento@twotone.com.br
        </p>
      </div>
      <div>
        <h3>NEWSLETTER</h3>
        <label for="email">Email *</label><br />
        <input type="search" placeholder="" />
      </div>
    </div>
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
