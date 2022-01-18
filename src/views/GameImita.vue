<template>
  <div class="landing bgGrey d-flex flex-column justify-content-between">
    <Navbar />
    <main class="">
      <div class="d-flex align-items-center mt-2 mx-4">
        <img src="../assets/imita-me.png" width="100" class="imgs" />
        <div class="mx-3 fontAsap" style="font-size: 30px; font-weight: bold">
          Imita-me!
        </div>
      </div>

      <div v-if="activeTip === true" class="hint">
        <img src="../assets/balao_mensagem.svg" width="260px" />
        <p
          class="col-12 colorBlue fontAsap"
          style="font-size: 18px; position: absolute; top: 10px; left: 12px"
        >
          {{ newTip }}
        </p>
      </div>

      <!--DOUBT-->
      <div
        v-if="doubt === true"
        style="position: absolute; left: 1520px; top: 310px"
      >
        <img src="../assets/balao_mensagem.svg" width="320px" />
        <p
          class="col-11 mx-2 colorOrange fontAsap"
          style="font-size: 18px; position: absolute; top: 10px; left: 12px"
        >
          Neste jogo vais ter de imitar os "Emoji's" que te são apresentados!
        </p>
      </div>

      <div class="d-flex justify-content-between">
        <div class="mx-5 mt-4 p-5">
          <img
            src="../assets/meninaimita.svg"
            width="200px"
            style="position: relative; top: 140px"
          />
        </div>

        <div
          v-if="startGame === false"
          class="profileBox2 d-flex flex-column justify-content-between align-items-center mx-5 mb-3"
        >
          <p
            class="mt-3 mx-3 fontNunito colorBlue"
            style="font-size: 22px; text-align: center"
          >
            Olá meu amigo! Espero que estejas mesmo bem, clica em "Vamos
            começar" para dar início ao jogo!
          </p>
          <div class="d-flex flex-column align-items-center mb-5">
            <img src="../assets/doubt.png" width="100" class="mb-4" />
            <button class="btnsPlay bgBlue" v-on:click="showDoubt()">
              Como funciona o jogo?
            </button>
          </div>

          <button v-on:click="startGameMethod()" class="btnsPlay bgOrange mb-3">
            Vamos começar!
          </button>
        </div>
        <!--GAME-->
        <div
          v-if="startGame === true"
          class="profileBox2 d-flex flex-column justify-content-between mx-5 mb-3"
        >
          <!--FIRST EMOTION-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 0"
          >
            <div
              class="mt-2 d-flex flex-column align-items-center colorBlue weightBold"
              style="font-size: 40px"
            >
              {{ getEmotionsForImita[0].name }}
            </div>
            <button v-on:click="showHint()" class="hintbtn">
              <img src="../assets/Dica.png" class="" width="65" height="65" />
            </button>
          </div>

          <div v-if="step === 0">
            <div class="d-flex align-items-center justify-content-between p-3">
              <button class="arrow">&lt;</button>
              <img
                :src="getEmotionsForImita[0].imgUrl"
                :alt="getEmotionsForImita[0].imgUrl"
                width="200"
              />
              <button class="arrow" v-on:click.prevent="nextStep">></button>
            </div>
          </div>

          <!--FIRST EMOTION-->

          <!--SECOND EMOTION-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 1"
          >
            <div
              class="mt-2 d-flex flex-column align-items-center colorBlue weightBold"
              style="font-size: 40px"
            >
              {{ getEmotionsForImita[1].name }}
            </div>
            <button v-on:click="showHint()" class="hintbtn">
              <img src="../assets/Dica.png" class="" width="65" height="65" />
            </button>
          </div>

          <div v-if="step === 1">
            <div class="d-flex align-items-center justify-content-between p-3">
              <button class="arrow" v-on:click.prevent="previousStep">
                &lt;
              </button>
              <img
                :src="getEmotionsForImita[1].imgUrl"
                :alt="getEmotionsForImita[1].imgUrl"
                width="200"
              />
              <button class="arrow" v-on:click.prevent="nextStep">></button>
            </div>
          </div>

          <!--SECOND EMOTION-->

          <!--THIRD EMOTION-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 2"
          >
            <div
              class="mt-2 d-flex flex-column align-items-center colorBlue weightBold"
              style="font-size: 40px"
            >
              {{ getEmotionsForImita[2].name }}
            </div>
            <button v-on:click="showHint()" class="hintbtn">
              <img src="../assets/Dica.png" class="" width="65" height="65" />
            </button>
          </div>

          <div v-if="step === 2">
            <div class="d-flex align-items-center justify-content-between p-3">
              <button class="arrow" v-on:click.prevent="previousStep">
                &lt;
              </button>
              <img
                :src="getEmotionsForImita[2].imgUrl"
                :alt="getEmotionsForImita[2].imgUrl"
                width="200"
              />
              <button class="arrow" v-on:click.prevent="nextStep">></button>
            </div>
          </div>

          <!--THIRD EMOTION-->

          <!--FOURTH EMOTION-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 3"
          >
            <div
              class="mt-2 d-flex flex-column align-items-center colorBlue weightBold"
              style="font-size: 40px"
            >
              {{ getEmotionsForImita[3].name }}
            </div>
            <button v-on:click="showHint()" class="hintbtn">
              <img src="../assets/Dica.png" class="" width="65" height="65" />
            </button>
          </div>

          <div v-if="step === 3">
            <div class="d-flex align-items-center justify-content-between p-3">
              <button class="arrow" v-on:click.prevent="previousStep">
                &lt;
              </button>
              <img
                :src="getEmotionsForImita[3].imgUrl"
                :alt="getEmotionsForImita[3].imgUrl"
                width="200"
              />
              <button class="arrow" v-on:click.prevent="nextStep">></button>
            </div>
          </div>

          <!--FOURTH EMOTION-->

          <!--FIFTH EMOTION-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 4"
          >
            <div
              class="mt-2 d-flex flex-column align-items-center colorBlue weightBold"
              style="font-size: 40px"
            >
              {{ getEmotionsForImita[4].name }}
            </div>
            <button v-on:click="showHint()" class="hintbtn">
              <img src="../assets/Dica.png" class="" width="65" height="65" />
            </button>
          </div>

          <div v-if="step === 4">
            <div class="d-flex align-items-center justify-content-between p-3">
              <button class="arrow" v-on:click.prevent="previousStep">
                &lt;
              </button>
              <img
                :src="getEmotionsForImita[4].imgUrl"
                :alt="getEmotionsForImita[4].imgUrl"
                width="200"
              />
              <button class="arrow">></button>
            </div>
          </div>

          <!--FIFTH EMOTION-->

          <div class="d-flex flex-column align-items-center my-4">
            <button
              class="fontNunito bgOrange btnsPlay"
              style="height: 50px"
              v-if="step != 4"
            >
              <img src="../assets/verificar.png" width="30" />
              Registar emoção
            </button>
            <button
              v-on:click="finishGame()"
              class="fontNunito bgBlue btnsPlay"
              style="height: 50px"
              v-if="step === 4"
            >
              <img src="../assets/finish.png" width="30" class="mx-2" />
              Terminar Jogo
            </button>
          </div>
        </div>
        <!--GAME-->
        <div class="mx-5 mt-5 p-5">
          <img
            src="../assets/meninoimita.svg"
            width="200px"
            style="position: relative; top: 140px"
          />
        </div>
      </div>
    </main>
    <b-modal
      id="modal-1"
      title="Conta-nos o teu dia!"
      ok-title="Confirmar"
      hide-header
      hide-footer
    >
      <div class="d-flex flex-column">
        <div class="d-flex align-items-center justify-content-between">
          <div class="fontBarlow" style="font-size: 30px">Terminou o jogo!</div>
          <button
            v-on:click="closeModal()"
            class="fontNunito mt-2"
            style="border: none; border-radius: 20px"
          >
            <img src="../assets/btn_close.png" width="40" />
          </button>
        </div>
        <div class="d-flex flex-column align-items-center mt-3">
          <img src="../assets/like.svg" width="100" />
          <div
            class="fontNunito mt-3 align-items-center"
            style="font-size: 20px; text-align: center"
          >
            Parabéns! <br />
            Acertaste 3 das emoções apresentadas.
          </div>

          <router-link :to="{ name: 'Landing' }"
            ><button class="btnsPlay mt-4 mb-2 bgBlue">
              Voltar à página inicial
            </button></router-link
          >
        </div>
      </div>
    </b-modal>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters } from "vuex";
export default {
  name: "Imita",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      step: 0,
      activeTip: false,
      newTip: "",
      startGame: false,
      doubt: false,
    };
  },
  methods: {
    finishGame() {
      this.$bvModal.show("modal-1");
    },
    previousStep() {
      this.step -= 1;
      this.activeTip = false;
    },
    nextStep() {
      this.step += 1;
      this.activeTip = false;
    },

    showHint() {
      this.newTip = this.getEmotionsForImita[this.step].hint;
      this.activeTip = true;
    },
    startGameMethod() {
      this.startGame = true;
      this.getEmotionsForImita = this.getEmotionsForImita.sort(
        () => Math.random() - 0.5
      );
    },
    showDoubt() {
      this.doubt = true;
    },
    closeModal() {
      this.$bvModal.hide("modal-1");
    },
  },
  computed: {
    ...mapGetters(["getEmotionsForImita"]),
  },
};
</script>

<style scoped>
.landing {
  height: 100vh;
}

.arrow {
  background-color: #0f8b8d;
  color: white;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
}

.profileBox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 6px 6px 0px var(--orange);
  background: white;
  width: 350px;
}
.profileBox2 {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 6px 6px 0px var(--orange);
  background: white;
  width: 500px;
  height: 600px;
}

.imgs {
  border-radius: 30px;
}

.btnsPlay {
  border: none;
  border-radius: 8px;
  width: 220px;
  height: 34px;
  font-size: 20px;
  color: white;
}

form input {
  height: 40px;
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  margin-left: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
}

.hint {
  position: absolute;
  top: 300px;
  left: 230px;
}

.hintbtn {
  border: none;
  border-radius: 20px;
  font-size: 25px;
  color: white;
  text-align: center;
}
</style>
