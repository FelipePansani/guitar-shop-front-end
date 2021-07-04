<template>
    <div class="bottom-info">
      <div class="column">
        <h5>ENDEREÇO</h5>
        <p>
          Rua do Limoeiro, 000<br />
          Centro - São Paulo-SP CEP: 00000-000
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
          Telefone (00) 0000-0000<br /><br /></p>
          <p>
          E-mail<br />
          <a href="mailto:atendimento@singletone.com">atendimento@singletone.com</a>
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


@media screen and (max-width: 40rem) {
  .column {
    display: block;
    margin: 0;
  }
}

</style>