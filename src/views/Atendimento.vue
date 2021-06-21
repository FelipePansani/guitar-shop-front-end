<template>
  <div id="app">
    <TopBar2 />
    <NavBar :Active="'atendimento'"/>
    <div class="form">
      <h3>
        Entre em contato conosco.br <br />Os campos marcados com * são de
        preencimento obrigatório.
      </h3>

      <div class="first-row">
        <label for="">Nome:*</label>
        <input class="big-text" type="text" />

        <label for="">E-mail*</label>
        <input class="big-text" type="email" />
      </div>

      <div class="second-row">
        <label for="">DDD e Telefone:*</label><br />
        <input class="big-text" type="text" />

        <label for="">Cidade:*</label>
        <input class="big-text" type="text" />

        <label for="">UF:*</label>
        <input class="big-text" type="text" />
      </div>

      <label for="">Produto:*</label>
      <input class="big-text" type="text" /><br />

      <label for="">Comentário:*</label><br />
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <h4>Selecione para receber nossa newsletter</h4>
      <input type="checkbox" /><br />

      <form action="?" method="POST">
          <h2>*</h2>
        <div class="g-recaptcha" data-sitekey="asdfASDF"></div>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
    <BottomInfo />
    <Footer />
  </div>
</template>

<script>
import TopBar2 from "../components/TopBar2.vue";
import NavBar from "../components/NavBar.vue";
import BottomInfo from "../components/BottomInfo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
    }
  },
  components: {
    TopBar2,
    NavBar,
    BottomInfo,
    Footer,
  },
};
</script>

<style scoped>

.form {
  color: white;
  padding: 40px;
}

.first-row {
  column-count: 2;
}

.second-row {
  column-count: 3;
}

.big-text {
  width: 100%;
  height: 25px;
  border-radius: 5px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  resize: none;
}
</style>