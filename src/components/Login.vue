 <template>
  <section>     
    <form class="form-signin mt-5 loginBox" @submit.prevent="logar">
      <img src="img/logos/login.png" alt="logo" width="30" height="30" />
      <h3 class="partnerLogin mb-3 font-weight-normal">
        Login Sócio Torcedor
      </h3>

      <div className="form-label-group">
        <input
          type="email"
          id="email"
          name="email"
          class="form-email"
          placeholder="Seu e-mail"
          v-model="email"
          required
          autoFocus
        />
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="senha"
          name="senha"
          v-model="senha"
          class="form-password"
          placeholder="Sua senha"
          required
        />
      </div>
      <button class="enterButton" type="submit">Entrar</button>
      <hr>
      <router-link to="/cadastro" class="bePartner ">Clique aqui e seja sócio</router-link>
    </form>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      active: true,
      email: null,
      senha: null,
    };
  },
  methods: {
    logar() {
      axios
        .post("https://trabalhoalgo.herokuapp.com/login", { email: this.email, senha: this.senha })
        .then((response) => {
          if (response.data.token == null) {
            alert("Erro... Email ou senha inválido");
          } else {
            const nome = response.data['socio'].nome.split(' ')[0]
            alert(`Bem vindo ${nome}`)
            console.log(response.data['socio']);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("admin", response.data['socio'].administrador);
            this.$parent.socioDados(response.data['socio']);
            this.$router.push('/');
          }
        }
      );
    },
  },
  props: {
    dados: Object,
  },
};
</script>