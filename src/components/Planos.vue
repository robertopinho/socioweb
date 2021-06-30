<template>
  <div class="mt-3 mb-50 d-flex justify-content-center row">
    <input id="id_socio" type="text" hidden :value="dados['id_socio']">
    <div v-for="plano in planos" v-bind:key="plano.id_plano">
      <div class="card ml-10" style="width: 20rem;">
        <img :src="'img/planos/'+plano.id_plano+ '.png'" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between">
            <div>
              {{ plano.nome }}
            </div>
            <div class="text-danger bold">
               R${{ plano.valor }}
            </div>
          </h5>

          <div class="t-left mb-10" style="list-style-type: none;">
            <li>{{plano.descricao.split(';')[0]}}</li>
            <li>{{plano.descricao.split(';')[1]}}</li>
            <li>{{plano.descricao.split(';')[2]}}</li>
            <li>{{plano.descricao.split(';')[3]}}</li>
            <li>{{plano.descricao.split(';')[4]}}</li>
          </div>
          <div v-if="dados['nome']">
            <a @click="setPlano(plano.id_plano, plano.url_plano)" style="cursor: pointer" target="_blank" title="Pagar com PagSeguro"><img src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar.gif" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></a>
          </div>
          <div v-else>
            <router-link to="/login" title="Pagar com PagSeguro"><img src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar.gif" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
 data() {
    return {
      planos : []
    };
  },
  methods: {
    setPlano(id_plano, url) {
      const date = new Date() //.toISOString().slice(0,10)
      let mes = date.getMonth()
      const ano = date.getFullYear()
      if(mes < 10) { 
        mes = '0'+mes
      }
      const data = mes+ '' +ano;
      const pagamento = {'id_socio': parseInt(document.querySelector("#id_socio").value), 'id_plano': id_plano, 'data_pagamento': data, 'status_pagamento': 0};
      console.log(pagamento);
      axios.post("https://trabalhoalgo.herokuapp.com/planos/pagamentos", pagamento ).then((res) => {
          if(res.status == 201){
            alert('Plano cadastrado com sucesso \nApós pagamento enviar comprovante para: centraldosocio@fcsocio.com.br')
            window.open(url)
          } else {
            alert('Plano já cadastrado, favor entrar em contato pelo email: \ncentraldosocio@fcsocio.com.br')
          }
        }
      )
      },
    listar() {
      axios
        .get("https://trabalhoalgo.herokuapp.com/planos")
        .then((response) => (this.planos = response.data));
  
    }
  }, mounted() {
    this.listar()
  },
  props: {
    dados: Object,
  },
} 
</script>