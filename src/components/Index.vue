<template>
  <div class="mt-3 mb-5">
    <div id="carousel" className="container">
      <div classname="row">
        <div id="socio-carousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
              class="liTraces mr-2"
              data-target="#socio-carousel"
              data-slide-to="0"
            ></li>
            <li
              class="liTraces"
              data-target="#socio-carousel"
              data-slide-to="1"
            ></li>
            <li
              class="liTraces ml-2"
              data-target="#socio-carousel"
              data-slide-to="2"
            ></li>
          </ol>

          <div class="img carousel-inner">
            <div class="carousel-item active">
              <img
                src="img/carousel/1.jpg"
                class="d-block w-100 img"
                alt="banner1"
              />
              <div class="container">
                <div class="label carousel-caption">
                  <p class="linkStyle">
                    <router-link class="linkAll" to="/cadastro">Associe-se</router-link>
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img
                src="img/carousel/2.jpg"
                class="d-block w-100 img"
                alt="banner2"
              />
              <div class="container">
                <div class="label carousel-caption">
                  <p class="linkStyle">
                    <router-link class="linkAll" to="/clube">Nossa História</router-link>
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img
                src="img/carousel/3.jpg"
                class="d-block w-100 img"
                alt="banner3"
              />
              <div class="container">
                <div class="label carousel-caption">
                  <p class="linkStyle">
                    <router-link class="linkAll" to="/planos">Pacotes</router-link>
                  </p>
                </div>
              </div>
            </div>

            <a
              class="control carousel-control-prev ml-3"
              href="#socio-carousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next mr-3"
              href="#socio-carousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 col-sm-6 col-12 mt-4 mb-70 ml-100 mr-20">
        <div class="card">
          <img class="card-img-top" src="img/index/gauchao.jpg" alt="gauchao" />
          <div class="card-body">
            <h4 class="card-title">Notícias</h4>
            <p class="card-text">
              Gauchão: Brasil de Pelotas vence fora de casa.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12 mt-4 mb-70 ml-100 mr-20">
        <div class="card">
          <img class="card-img-top" src="img/index/brapel.jpg" alt="brapel" />
          <div class="card-body">
            <h4 class="card-title">Brapel</h4>
            <p class="card-text">
              Xavante fica no 0 a 0 com o Pelotas no clássico.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6 col-12 mt-4 mb-70 ml-100 mr-20">
        <div class="card">
          <img class="card-img-top" src="img/index/table.png" alt="tabela" />
          <div class="card-body">
            <h4 class="card-title">Classificação Gauchão</h4>
            <p class="card-text">Fique por dentro da tabela desta rodada.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
