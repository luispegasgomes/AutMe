<template>
  <div class="landing bgrGrey">
    <!--NAVBAR-->
    <nav class="navbar navbar-expand-lg bgrgrey navbar-light">
      <!--LOGO-->
      <a class="navbar-brand mx-4" href="#">
        <img src="../assets/logo_AutMe.png" width="70%" />
      </a>
      <!--PAGES-->
      <div
        class="
          container
          d-flex
          flex-column
          justify-content-center
          align-items-center
          mx-5
        "
      >
        <ul class="navbar-nav">
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">EMOÇÕES</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">DIÁRIO</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">CRIANÇAS</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">PEDIDOS</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">AGENDA</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">PSICÓLOGOS</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">GESTÃO</a>
          </li>
        </ul>
      </div>
      <!--PAGES-->

      <!--PROFILE IMG-->
      <div class="d-flex align-items-end justify-content-end mx-4">
        <img src="../assets/temp_profile_img.png" width="13%" />
      </div>
      <!--PROFILE IMG-->
    </nav>

    <div
      id="btns"
      class="fontNunito d-flex flex-column align-items-center my-3"
    >
      <router-link :to="{ name: 'Register' }">
        <button class="bgOrange colorDarkBlue my-2">
          Mostrar notificações
        </button>
      </router-link>
    </div>
    <div class="row my-5">
      <div class="col-sm-3 col-md-6 d-flex flex-column align-items-center">
        <img src="../assets/balao_mensagem.svg" width="36%" />
        <img src="../assets/Menino_Landing.svg" width="22%" />
      </div>
      <div class="col-sm-3 col-md-6 d-flex flex-column align-items-center my-1">
        <div class="gamebox">
          <p
            class="d-flex flex-column align-items-center colorDarkBlue fontAsap"
            style="font-size: 35px; font-weight: bold"
          >
            Jogos
          </p>
          <div class="d-flex align-items-center">
            <div class="d-flex flex-column align-items-center mx-4">
              <img
                src="../assets/adivinha.jpg"
                width="200px"
                style="border: none; border-radius: 30px"
              />
            </div>
            <div class="d-flex flex-column">
              <p class="fontBarlow" style="font-size: 35px">Adivinha-me!</p>
              <p class="fontNunito col-11 my-2" style="font-size: 18px">
                Será que tu sabes todas as nossas emoções?
              </p>
              <button
                class="fontNunito bgOrange colorDarkBlue col-10 btnsPlay my-3"
              >
                Jogar!
              </button>
            </div>
          </div>
          <!--IMITA-ME!-->
          <div class="d-flex align-items-center my-5">
            <div class="d-flex flex-column align-items-center mx-4">
              <img
                src="../assets/adivinha.jpg"
                width="200px"
                style="border: none; border-radius: 30px"
              />
            </div>
            <div class="d-flex flex-column">
              <p class="fontBarlow" style="font-size: 35px">Imita-me!</p>
              <p class="fontNunito col-11 my-2" style="font-size: 18px">
                Vê se consegues repetir as emoções que te são dadas!
              </p>
              <button
                class="fontNunito bgOrange colorDarkBlue col-10 btnsPlay my-3"
              >
                Jogar!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-blue font-nunito text-center text-white">
      <!-- Grid container -->
      <div class="container p-4">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <img src="../assets/facebook.png" width="50px" class="mx-4" />

          <!-- Twitter -->
          <img src="../assets/instagram.png" width="50px" class="mx-4"/>

          <!-- Instagram -->
          <img src="../assets/twitter.png" width="50px" class="mx-4"/>

        </section>
        <!-- Section: Social media -->

        <!-- Section: Text -->
        <section>
          <div>T. +351 252 291 700</div>
          <div>E. geral@esmad.ipp.pt</div>
        </section>
        <!-- Section: Text -->
      </div>
      <!-- Grid container -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style>
#btns * {
  border: none;
  border-radius: 8px;
  outline: none;
  width: 200px;
  font-size: 20px;
  color: #fff;
}
.gamebox {
  border: solid;
  border-color: #ec9a29;
  border-width: 7px;
  border-radius: 10px;
  width: 550px;
  height: 600px;
  color: #143642;
  box-shadow: 12px 12px 0px #ec9a29;
}
.btnsPlay {
  border: none;
  border-radius: 8px;
  width: 150px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: #143642;
}
footer {
  background-color: #143642;
  color: #fff;
}
</style>
