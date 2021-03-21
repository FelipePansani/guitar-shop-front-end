<template>
    <div class="bottom-info">
      <div class="column">
        <h4>ENDEREÇO</h4>
        <p>
          Rua Cristiano Viana, 549<br />
          Pinheiros - São Paulo-SP CEP: 05411-000
        </p>
      </div>
      <div class="column">
        <h4>HORÁRIOS</h4>
        <p>
          Segunda à Sexta 10h00 às 19h00<br /><br />
          Sábados 10h00 às 14h00
        </p>
      </div>
      <div class="column">
        <h4>ATENDIMENTO</h4>
        <p>
          Telefone (11) 3081-6600<br /><br />
          E-mail<br />
          <a href="mailto:atendimento@twotone.com.br">atendimento@twotone.com.br</a>
        </p>
      </div>
      <div class="column">
        <h4>NEWSLETTER</h4>
        <label for="email">Email *</label><br />
        <input type="search" placeholder="" /><br><br>
        <button>ASSINAR</button>
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
  columns: 4;
  color: white;
  padding: 40px;
  margin-left: 40px;
  vertical-align: text-top;
}

.column {
  vertical-align: text-top;
  text-align: left;
  width: 200px;
  left: 0%;
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

</style>