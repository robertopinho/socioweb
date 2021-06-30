<template>
  <div class="menu row justify-content-between">
    <router-link class="nav-link" to="/">
      <img class="img-logo mr-3 col-8" src="img/logos/xavante.png" />
    </router-link>
    <nav class="navbar navbar-expand-md col-8">
      <div class="collapse navbar-collapse col-9" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Início</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/clube">Clube</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/planos">Planos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contato">Contato</router-link>
          </li>
        </ul>
      </div>
      <span style="color: white" v-if="dados['nome']">
        Olá,
        <b>{{ dados['nome'].split(" ")[0] }}</b>
        <router-link  v-if="dados['administrador'] == 1"  class="nav-link" to="/Admin">Administrativo</router-link>
        <div v-else><br></div>
        <button class="btn btn-dark" @click="sair()">
          <i class="fas fa-sign-out-alt"></i> Sair
        </button>
      </span>
      <span v-else>
        <router-link to="/login" tag="button" class="btn-sm btn-danger"
          >Área do Sócio <i class="fas fa-sign-in-alt"></i
        ></router-link>
        <router-link class="linkCadastro" to="/cadastro"
          >Cadastre-se</router-link
        >
      </span>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    sair() {
      localStorage.clear()
      this.$parent.socioDados({})
      window.location.replace('/')
    },
  },

  props: {
    dados: Object
  },
};
</script>
