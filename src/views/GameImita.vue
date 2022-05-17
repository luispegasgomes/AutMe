<template>
  <div class="landing bgGrey d-flex flex-column justify-content-between">
    <Navbar />
    <main class="">
      <div class="d-flex align-items-center mt-2 mx-4">
        <img src="../assets/completa.png" width="100" class="imgs" />
        <div class="mx-3 fontAsap" style="font-size: 30px; font-weight: bold">
          Completa<span class="colorOrange weightBold">Me</span>
        </div>
      </div>

      <div v-if="activeTip === true" class="hint">
        <img src="../assets/balao_mensagem.svg" width="260px" />
        <p
          class="col-12 colorBlue fontAsap"
          style="
            font-size: 18px;
            position: absolute;
            top: 10px;
            left: 12px;
            font-weight: bold;
          "
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
          style="
            font-size: 18px;
            position: absolute;
            top: 10px;
            left: 12px;
            font-weight: bold;
          "
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
          class="
            profileBox2
            d-flex
            flex-column
            justify-content-between
            align-items-center
            mx-5
            mb-3
          "
        >
          <p
            class="mt-3 mx-3 fontNunito colorBlue"
            style="font-size: 22px; text-align: center; font-weight: bold"
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
          class="
            profileBox2
            d-flex
            flex-column
            justify-content-between
            mx-5
            mb-3
          "
        >
          <!--FIRST EMOTION-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 0"
          >
            <div class="d-flex flex-column">
              <p class="mt-2 mx-1 colorBlue fontAsap" style="font-size: 20px">
                Emoção 1/5
              </p>
              <div
                class="d-flex align-items-center colorBlue weightBold"
                style="font-size: 40px"
              >
                <div v-for="index in lifes" :key="index" class="d-flex mx-1">
                  <img src="../assets/heart.png" width="30" />
                </div>
              </div>
            </div>

            <button v-on:click="showHint()" class="hintbtn">
              <img src="../assets/Dica.png" class="" width="65" height="65" />
            </button>
          </div>

          <div v-if="step === 0">
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-between
                p-3
              "
            >
              <img
                :src="getEmotionsForImita[0].imgUrl"
                :alt="getEmotionsForImita[0].imgUrl"
                width="200"
              />
            </div>
          </div>

          <!--FIRST EMOTION-->

          <!--SECOND EMOTION-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 1"
          >
            <div class="d-flex flex-column">
              <p class="mt-2 mx-1 colorBlue fontAsap" style="font-size: 20px">
                Emoção 2/5
              </p>
              <div
                class="d-flex align-items-center colorBlue weightBold"
                style="font-size: 40px"
              >
                <div v-for="index in lifes" :key="index" class="d-flex mx-1">
                  <img src="../assets/heart.png" width="30" />
                </div>
              </div>
            </div>
            <button v-on:click="showHint()" class="hintbtn">
              <img src="../assets/Dica.png" class="" width="65" height="65" />
            </button>
          </div>

          <div v-if="step === 1">
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-between
                p-3
              "
            >
              <img
                :src="getEmotionsForImita[1].imgUrl"
                :alt="getEmotionsForImita[1].imgUrl"
                width="200"
              />
            </div>
          </div>

          <!--SECOND EMOTION-->

          <!--THIRD EMOTION-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 2"
          >
            <div class="d-flex flex-column">
              <p class="mt-2 mx-1 colorBlue fontAsap" style="font-size: 20px">
                Emoção 3/5
              </p>
              <div
                class="d-flex align-items-center colorBlue weightBold"
                style="font-size: 40px"
              >
                <div v-for="index in lifes" :key="index" class="d-flex mx-1">
                  <img src="../assets/heart.png" width="30" />
                </div>
              </div>
            </div>
            <button v-on:click="showHint()" class="hintbtn">
              <img src="../assets/Dica.png" class="" width="65" height="65" />
            </button>
          </div>

          <div v-if="step === 2">
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-between
                p-3
              "
            >
              <img
                :src="getEmotionsForImita[2].imgUrl"
                :alt="getEmotionsForImita[2].imgUrl"
                width="200"
              />
            </div>
          </div>

          <!--THIRD EMOTION-->

          <!--FOURTH EMOTION-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 3"
          >
            <div class="d-flex flex-column">
              <p class="mt-2 mx-1 colorBlue fontAsap" style="font-size: 20px">
                Emoção 4/5
              </p>
              <div
                class="d-flex align-items-center colorBlue weightBold"
                style="font-size: 40px"
              >
                <div v-for="index in lifes" :key="index" class="d-flex mx-1">
                  <img src="../assets/heart.png" width="30" />
                </div>
              </div>
            </div>
            <button v-on:click="showHint()" class="hintbtn">
              <img src="../assets/Dica.png" class="" width="65" height="65" />
            </button>
          </div>

          <div v-if="step === 3">
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-between
                p-3
              "
            >
              <img
                :src="getEmotionsForImita[3].imgUrl"
                :alt="getEmotionsForImita[3].imgUrl"
                width="200"
              />
            </div>
          </div>

          <!--FOURTH EMOTION-->

          <!--FIFTH EMOTION-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 4"
          >
            <div class="d-flex flex-column">
              <p class="mt-2 mx-1 colorBlue fontAsap" style="font-size: 20px">
                Emoção 5/5
              </p>
              <div
                class="d-flex align-items-center colorBlue weightBold"
                style="font-size: 40px"
              >
                <div v-for="index in lifes" :key="index" class="d-flex mx-1">
                  <img src="../assets/heart.png" width="30" />
                </div>
              </div>
            </div>
            <button v-on:click="showHint()" class="hintbtn">
              <img src="../assets/Dica.png" class="" width="65" height="65" />
            </button>
          </div>

          <div v-if="step === 4">
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-between
                p-3
              "
            >
              <img
                :src="getEmotionsForImita[4].imgUrl"
                :alt="getEmotionsForImita[4].imgUrl"
                width="200"
              />
            </div>
          </div>

          <!--FIFTH EMOTION-->

          <!--END GAME-->
          <div
            class="d-flex mt-2 mx-3 justify-content-between"
            v-if="step === 5"
          >
            <div class="d-flex flex-column align-items-center">
              <p
                class="mt-2 mx-1 colorBlue fontAsap"
                style="font-size: 24px; text-align: center; font-weight: bold"
              >
                Chegaste ao fim do jogo, agora vamos lá ver como te saíste...
                Clica em "Terminar Jogo" para saberes o resultado!
              </p>
              <img src="../assets/finish-line.png" width="200px" class="mt-5" />
            </div>
          </div>

          <!--END GAME-->

          <div class="word" v-if="step != 5">
            <div class="word-letters">
              <div
                class="colorOrange word-letter"
                style="font-size: 30px; font-weight: bold"
                v-for="(letter, key) in word"
                :key="key"
              >
                {{ checkLetter(letter) ? letter : "" }}
              </div>
            </div>
          </div>
          <!--KEYBOARD-->
          <div class="d-flex flex-column align-items-center" v-if="step != 5">
            <div class="d-flex keyboard">
              <button
                class="keyboard-btn col-1 bgBlue"
                v-for="(letter, index) in 'ABCÇDEFGHIJLMNOPRSTUVXZ'"
                :key="index"
                v-on:click="play(letter)"
                :disabled="checkLetter(letter)"
              >
                {{ letter }}
              </button>
            </div>
          </div>

          <div class="d-flex flex-column align-items-center my-4">
            <div class="d-flex">
              <button
                class="fontNunito bgOrange btnsPlay"
                style="height: 50px"
                v-if="step != 5"
                v-on:click="nextStep()"
              >
                <img src="../assets/verificar.png" width="30" />
                Registar emoção
              </button>
              <button
                v-on:click="finishGame()"
                class="fontNunito bgBlue btnsPlay mx-2"
                style="height: 50px"
                v-if="step === 5"
              >
                <img src="../assets/finish.png" width="30" class="mx-2" />
                Terminar Jogo
              </button>
            </div>
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
          <img :src="messageImg" :alt="messageImg" width="100" />
          <div
            class="fontNunito mt-3 align-items-center"
            style="font-size: 20px; text-align: center"
          >
            {{ message }} <br />
            Acertaste {{ countCorrectWords }} das emoções apresentadas.
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
import { mapGetters, mapMutations} from "vuex";
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
      lifes: 5,
      word: "",
      letters: [],
      counter: 0,
      countCorrectWords: 0,
      message: "Que pena, vais ter de estar mais atento...",
      messageImg: "../sad.png",
      wordRecognized:"",
      formEmotion: {
        username: "",
        name: "",
        imgUrl: "",
      },
      letrasunicas: ""
    };
  },
  computed: {
    ...mapGetters(["getEmotionsForImita", "getUsername"]),
  },
  methods: {
    finishGame() {
      if (this.countCorrectWords >= 3) {
        this.message = "Muitos parabéns. Continua no bom caminho!";
        this.messageImg = "../like.svg";
      }
      this.$bvModal.show("modal-1");
    },
    nextStep() {
      this.countHits();
      // Write code to save the child recognized emotions
      console.log(this.word);
      this.wordRecognized = this.word;
      switch (this.wordRecognized) {
        case "vergonha":
          this.wordRecognized = "Vergonha";
          this.formEmotion.imgUrl = "https://images.emojiterra.com/google/android-11/512px/1f633.png"
          break;
        case "alegria":
          this.wordRecognized = "Alegria";
          this.formEmotion.imgUrl = "https://images.emojiterra.com/google/android-11/512px/1f60a.png"
          break;
        case "admiraçao":
          this.wordRecognized = "Admiração";
          this.formEmotion.imgUrl = "https://images.emojiterra.com/google/android-11/512px/1f929.png"
          break;
        case "espantado":
          this.wordRecognized = "Espantado";
          this.formEmotion.imgUrl = "https://images.emojiterra.com/google/android-11/512px/1f632.png"
          break;
        case "duvida":
          this.wordRecognized = "Dúvida";
          this.formEmotion.imgUrl = "https://images.emojiterra.com/google/android-11/512px/1f914.png"
          break;
        case "indiferença":
          this.wordRecognized = "Indiferença";
          this.formEmotion.imgUrl = "https://images.emojiterra.com/google/android-11/512px/1f610.png"
          break;
        case "nervosismo":
          this.wordRecognized = "Nervosismo";
          this.formEmotion.imgUrl = "https://images.emojiterra.com/google/android-11/512px/1f62c.png"
          break;
        case "nojo":
          this.wordRecognized = "Nojo";
          this.formEmotion.imgUrl = "https://images.emojiterra.com/google/android-11/512px/1f92e.png"
          break;
        case "raiva":
          this.wordRecognized = "Raiva";
          this.formEmotion.imgUrl = "https://images.emojiterra.com/google/android-11/512px/1f621.png"
          break;
        case "tristeza":
          this.wordRecognized = "Tristeza";
          this.formEmotion.imgUrl = "https://images.emojiterra.com/google/android-11/512px/1f61e.png"
          break;
      }
      // Data Submit
      this.formEmotion.name = this.wordRecognized
      this.formEmotion.username = this.getUsername
      if (this.letrasunicas.length === this.letters.length) {
        this.SET_NEW_RECOGNIZED_EMOTION(this.formEmotion);
      }

      this.step += 1;
      this.activeTip = false;
      this.letters = [];
      this.counter += 1;
      this.lifes = 5;
      this.word = this.getEmotionsForImita[+this.counter].name;
    },

    showHint() {
      this.newTip = this.getEmotionsForImita[this.step].hint;
      this.activeTip = true;
    },
    startGameMethod() {
      this.startGame = true;
      this.word = this.getEmotionsForImita[0].name;
    },
    showDoubt() {
      this.doubt = true;
    },
    closeModal() {
      this.$bvModal.hide("modal-1");
    },

    // CHECK LETTER
    checkLetter(letter) {
      return this.letters.find(
        (pos) => pos.toLowerCase() === letter.toLowerCase()
      );
    },

    play(letter) {
      if (this.word.toLowerCase().indexOf(letter.toLowerCase()) >= 0) {
        this.letters.push(letter);
      } else {
        this.lifes -= 1;
      }

      if (this.lifes == 0) {
        if (this.step != 4) {
          this.step += 1;
          this.letters = [];
          this.lifes = 5;
          this.counter += 1;
          this.word = this.getEmotionsForImita[+this.counter].name;
        }
      }

      if (this.lifes == 0 && this.step == 4) {
        alert("Acabou o jogo!");
      }
    },
    countHits() {
      this.letrasunicas = [...new Set(this.word.split(""))];
      if (this.letrasunicas.length === this.letters.length) {
        this.countCorrectWords += 1;
      }
    },
    ...mapMutations(["SET_NEW_RECOGNIZED_EMOTION"]),
  },
};
</script>

<style scoped>
button:disabled {
  background-color: var(--orange);
  opacity: 0.5;
}

.word {
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.word-letters {
  display: flex;
  margin-bottom: 20px;
}

.word-letter {
  height: 30px;
  width: 30px;
  margin: 0px 5px;
  border-bottom: 1px solid #0f8b8d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.keyboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
}

.keyboard-btn {
  color: white;
  border: none;
  border-radius: 7px;
  margin: 5px;
}

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
  border-radius: 20px;
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
