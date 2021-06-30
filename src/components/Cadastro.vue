<template>
  <section class="registerBackground">
    <div class="registerBackground2">
      <!-- <img class="" src="img/radialLogo.png" alt="" /> -->
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h4 class="text-dark mt-5">Cadastro de sócios</h4>

            <form class="text-dark" @submit.prevent="salvar">
              <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" class="form-control" id="nome" name="nome" v-model="socio.nome" required autofocus/>
              </div>

              <div class="form-group">
                <label for="cpf">CPF:</label>
                <input type="text" class="form-control" id="cpf" name="cpf" v-model="socio.cpf" required maxlength="11"/>
              </div>

              <!-- <div class="form-group">
            <label for="endereco_largadouro">Endereço:</label>
            <input
              type="text"
              class="form-control"
              id="endereco_largadouro"
              name="endereco_largadouro"
              required
            />
          </div> -->

              <!-- <div class="form-group">
            <label for="endereco_numero">Número:</label>
            <input
              type="text"
              class="form-control"
              id="endereco_numero"
              name="endereco_numero"
              required
            />
          </div> -->

              <!-- <div class="form-group">
            <label for="endereco_cep">CEP:</label>
            <input
              type="text"
              class="form-control"
              id="endereco_cep"
              name="endereco_cep"
              required
            />
          </div> -->

              <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="text" class="form-control" id="email" name="email" v-model="socio.email" required/>
              </div>

              <!-- <div class="form-group">
            <label for="cidade">Cidade:</label>
            <input
              type="text"
              class="form-control"
              id="cidade"
              name="cidade"
              required
            />
          </div> -->

              <!-- <div class="form-group">
            <label for="UF">UF:</label>
            <input
              type="text"
              class="form-control"
              id="UF"
              name="UF"
              required
            />
          </div> -->

              <!-- <div class="form-group">
            <label for="phone">Telefone</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              name="phone"
              required
            />
          </div>-->

              <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" id="senha" name="senha" v-model="socio.senha" required/>
              </div>

              <!-- <div class="form-group">
            <label for="message">Mensagem</label>
            <div class="input-group mb-3">
              <textarea
                class="form-control"
                placeholder="Digite seu comentário"
              ></textarea>
            </div>
          </div> -->

              <input
                type="submit"
                class="registerButton btn btn-secondary btn-md"
                value=" Enviar Dados "
              />
            </form>
          </div>

          <!-- <div class="col-sm-7">
            <div class="fanCard col-md-10 col-sm-6 col-12">
              <div class="card">
                <img class="card-img-top" src="img/fan.jpg" alt="fan" />
                <div class="card-body">
                  <h6 class="statement">
                    Fone/whats: (53) 99153-7087
                    <hr />
                    Endereço: R. Dr. João Pessoa, 694 - Centro, Pelotas - RS,
                    96010-470
                  </h6>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      socio: {
        id: null,
        nome: null,
        senha: null,
        cpf: null,
        email: null,
      },
    };
  },
  methods: {
    salvar() {
      try {
        axios.post("https://trabalhoalgo.herokuapp.com/socio", this.socio)
        .then((res)=> {
          if(res.statusText == "Created"){
            alert("Cadastro efetuado com sucesso!")
            this.$router.push("/login")
          } else {
            alert('Ops, email já cadastrado.')
          }
        })
      } catch (erro) {
        console.log(erro);
        console.log('qweqwe');
      }
    },
  },
};
</script>

