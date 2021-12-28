<template>
  <div class="landing bgGrey d-flex flex-column justify-content-between">
    <Navbar />

    <main>
      <div class="d-flex align-items-center justify-content-center">
        <section class="col-4 d-flex flex-column align-items-center mb-4">
          <p style="position: relative; top:75px; left:-50px; font-size:25px; font-weight: bold;" class="fontAsap">Olá {{ getUsername }}!</p>
          <img src="../assets/balao_mensagem.svg" width="300px" />
          <img src="../assets/Menino_Landing.svg" width="200px" />
        </section>
        
        <section class="col-5 d-flex flex-column align-items-center" >
          <div class="gamebox">
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
                <p class="fontNunito col-9 my-1" style="font-size: 18px">
                  Será que tu sabes todas as nossas emoções?
                </p>
                <button
                  class="fontNunito bgOrange colorDarkBlue btnsPlay my-2"
                >
                  Jogar!
                </button>
              </div>
            </div>

            <div class="d-flex align-items-center my-5">
              <div class="d-flex flex-column align-items-center mx-4">
                <img src="../assets/imita.jpg" class="imgs" />
              </div>
              <div class="d-flex flex-column">
                <h2 class="fontAsap" style="font-size: 35px">Imita-me!</h2>
                <p class="fontNunito col-9 my-1" style="font-size: 18px">
                  Vê se consegues repetir as emoções!
                </p>
                <button
                  class="fontNunito bgOrange colorDarkBlue col-10 btnsPlay my-2"
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
import { mapGetters } from "vuex";
export default {
  name: "Landing",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      name: "Landing",
    }
  },
  computed: {
    ...mapGetters(["getUsername"]),
  },
};
</script>

<style scoped>
.landing {
  height: 100vh;
}

.gamebox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 12px 12px 0px var(--orange);
  width: 500px;
}

.imgs {
  width: 180px;
  border-radius: 30px;
}

.btnsPlay {
  border: none;
  border-radius: 8px;
  width: 200px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: var(--darkBlue);
}

</style>
