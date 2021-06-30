<template>
  <div id="app">
    <Menu :dados="dados"/>
    <router-view :dados="dados"/>
    <Footer />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
//import Carousel from "./components/Carousel.vue";
//import Register from "./components/Resgister.vue";
import axios from "axios"
export default {
  name: "App",
  components: {
    Menu,
    //Carousel,
    Footer,
    //carousel    
    //Register,
  },
  data() {
    return {
      nome: null, 
      dados: {}
    };
  },
  methods: {
    socio() {
      axios.get('https://trabalhoalgo.herokuapp.com/socio').then((res) => { 
        console.log(res)
      })
    },
    socioDados(dados) {
      this.dados = dados
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
