<template>
  <div class="landing bgGrey d-flex flex-column justify-content-between">
    <Navbar />

    <main>
      <div class="mt-5 d-flex">
        <section class="col-7 d-flex flex-column align-items-center">
          <img src="../assets/balao_mensagem.svg" width="30%" />
          <img src="../assets/Menino_Landing.svg" width="20%" />
        </section>

        <section class="col-4 d-flex flex-column align-items-center">
          <div class="games">
            <p
              class="d-flex flex-column align-items-center colorDarkBlue fontAsap weightBold"
              style="font-size: 35px"
            >
              Jogos
            </p>

            <div class="d-flex align-items-center">
              <div class="d-flex flex-column align-items-center mx-4">
                <img src="../assets/adivinha.jpg" class="imgs" />
              </div>
              <div class="d-flex flex-column">
                <h2 class="fontAsap" style="font-size: 35px">Adivinha-me!</h2>
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

            <div class="d-flex align-items-center my-4">
              <div class="d-flex flex-column align-items-center mx-4">
                <img src="../assets/imita.jpg" class="imgs" />
              </div>
              <div class="d-flex flex-column">
                <h2 class="fontAsap" style="font-size: 35px">Imita-me!</h2>
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
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Landing",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.landing {
  height: 100vh;
}

.games {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 12px 12px 0px var(--orange);
}

.imgs {
  width: 180px;
  border-radius: 30px;
}

.btnsPlay {
  border: none;
  border-radius: 8px;
  width: 150px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: var(--darkBlue);
}
</style>
