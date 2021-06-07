<template>
    <div class="bottom-info">
      <div class="column">
        <h5>ENDEREÇO</h5>
        <p>
          Rua Cristiano Viana, 549<br />
          Pinheiros - São Paulo-SP CEP: 05411-000
        </p>
      </div>
      <div class="column">
        <h5>HORÁRIOS</h5>
        <p>
          Segunda à Sexta 10h00 às 19h00<br /><br />
          Sábados 10h00 às 14h00
        </p>
      </div>
      <div class="column">
        <h5>ATENDIMENTO</h5>
        <p>
          Telefone (11) 3081-6600<br /><br /></p>
          <p>
          E-mail<br />
          <a href="mailto:atendimento@twotone.com.br">atendimento@twotone.com.br</a>
        </p>
      </div>
      <div class="column">
        <h5>NEWSLETTER</h5>
        <p>E-mail *</p>
        <input type="search" placeholder="" /><br><br><br>
        <button><b>ASSINAR</b></button>
      </div>
    </div>
</template>

<script>
export default {
    name: "App",
}
</script>

<style scoped>
.bottom-info {
  color: white;
  padding: 20px;
  text-align: center;
}

.column {
  vertical-align: top;
  display: inline-block;
  text-align: left;
  width: 160px;
  margin-right: 140px;
}

a {
  color: #42b983;
}

button {
  color: white;
  background: #42b983;
  border: none;
  padding: 10px;
}

/* input {
  height: 40px;
  width: 260px;
} */

@media screen and (max-width: 768px) {
  .column {
    display: block;
    margin: 0;
  }
}

</style>