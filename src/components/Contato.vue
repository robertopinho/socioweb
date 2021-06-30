<template>
  <section class="container">
    <div class="my-5 text-center">
      <span class="d-block text-white">GOSTARIA DE MAIS INFORMAÇÕES?</span>
      <h3 class="text-white">Fale Conosco</h3>
    </div>
    <div class="row">
      <div class="col-lg mb-5">
        <form class="contactForm bg-light p-4 box-shadow" action="">
          <div class="form-group">
            <label for="clienteNome">Nome</label>
            <input type="text" class="form-control" id="clienteNome" required />
          </div>
          <div class="form-group">
            <label for="clienteEmail">Email</label>
            <input type="email" class="form-control" id="clienteEmail" required />
          </div>
          <div class="form-group">
            <label for="clienteMensagem">Mensagem</label>
            <textarea
              id="clienteMensagem"
              class="form-control"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn contactButton">
            Enviar Mensagem
          </button>
        </form>

        <div class="row">
          <div class="col-lg mb-5">
            <h5 class="text-white mt-3">REDES SOCIAIS</h5>
            <ul class="mediaButtons" style="max-width: 260px">
              <h5>
                <!-- class="mediaButton1 btn btn-secondary btn-sm btn-block ml-2" -->
                <a
                  class="facebook-share-button"
                  href="http://facebook.com"
                  target="_blank"
                ></a>
              </h5>
              <h5>
                <!-- class="mediaButton2 btn btn-secondary btn-sm btn-block ml-2" -->
                <a
                  class="twitter-share-button"
                  href="http://twitter.com"
                  target="_blank"
                ></a>
              </h5>
              <h5>
                <!-- class="mediaButton3 btn btn-secondary btn-sm btn-block ml-3" -->
                <a
                  class="youTube-share-button"
                  href="http://youtube.com"
                  target="_blank"
                ></a>
              </h5>
              <h5>
                <!-- class="mediaButton3 btn btn-secondary btn-sm btn-block ml-3" -->
                <a
                  class="instagram-share-button"
                  href="http://instagram.com"
                  target="_blank"
                ></a>
              </h5>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-lg">
        <section class="text-dark">
          <div class="container">
            <div class="col-md-12 text-center map">
              <!-- <h5 style="font-size: xx-large">Estádio Benta Freitas</h5> -->
              <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.9657459977716!2d-52.33545938484315!3d-31.7714201812874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b5b8c74bbb6f%3A0x259ba380edeec188!2sEst%C3%A1dio%20Bento%20Freitas!5e0!3m2!1spt-BR!2sbr!4v1622593755373!5m2!1spt-BR!2sbr"
                width="600"
                height="387"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <h5 class="text-white mt-3">NOSSO ENDEREÇO</h5>
          <h6 class="text-white">
            R. Dr. João Pessoa, 694 - Centro, Pelotas - RS, 96010-470
          </h6>
          <hr />
          <!-- <h5 class="text-white mt-4">DADOS DE CONTATO</h5> -->
          <h6 class="text-white">
            <li>
              <img
                class="mr-2"
                src="img/icons_contato/email.png"
                height="35"
                width="35"
                alt="email"
              />
              <span>centraldosocio@fcsocio.com.br</span>
            </li>

            <br />

            <li>
              <img
                class="mr-2"
                src="img/icons_contato/whatsapp.png"
                height="35"
                width="35"
                alt="whatsapp"
              />
              <span>(53) 99153-7087</span>
            </li>
          </h6>
        </section>
      </div>
    </div>
  </section>
</template>