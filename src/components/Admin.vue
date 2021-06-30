<template>
  <div class="container mt-4">
    <h2 class="text-white">
      Controle de Sócios
      <!-- <router-link to="/" class="btn btn-danger float-right">
         <i class="fas fa-undo"></i> Voltar
      </router-link> -->
    </h2>
    <table class="table table-striped text-white">
      <thead>
        <tr>
          <th>ID Sócio</th>
          <!-- <th>Nome</th> -->
          <th>Plano</th>
          <th>Mês em aberto</th>
          <!-- <th>Mês atual</th> -->
          <th>Status do Pagamento</th>
          <th>Ação</th>
        </tr>
        <tr v-for="pag in pagamento" :key="pag.id_socio">
          <td>{{ pag.id_socio }}</td>
          <td>{{ pag.id_plano }}</td>
          <td>{{ pag.data_pagamento }}</td>
          <td v-if="pag.status_pagamento == 1" style="font-weight: bold;"><u>Pago</u></td>
          <td v-else>Pendente</td>
          <td>
            <button v-if="pag.status_pagamento == 0" class="btn btn-sm" @click="pagar(pag.id_socio, pag.id_plano, pag.data_pagamento, 1)">Pagar</button>
            <button v-else class="btn btn-sm" style="background: #FFFFFF22; color: #AAA" disabled> Pago </button>
          <td></td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pagamento: [],
    };
  },
  methods: {
    pagar(id_socio, id_plano, data_pagamento){
      let pagamento = { id_socio: id_socio, id_plano: id_plano, data_pagamento:data_pagamento, status_pagamento:1}
      axios.put("https://trabalhoalgo.herokuapp.com/planos/pagamentos", pagamento)
      .then(this.listar())
    },
    listar() {
      axios
        .get("https://trabalhoalgo.herokuapp.com/planos/pagamentos")
        .then((response) => (this.pagamento = response.data));
    },
  },
  mounted() {
    this.listar();
  },
  props: {
   dados: Object,
  },
};
</script>


