<template>
  <div class="level bgGrey d-flex flex-column">
    <Navbar />
    <main class="d-flex flex-column align-items-center">
      <div class="d-flex align-items-center">
        <img src="../assets/quizme.png" id="adivinha" />
        <h1 class="fontAsap weightBold px-4">
          Quiz<span class="colorOrange weightBold">Me</span>
        </h1>
      </div>
      <!--QUESTION 1-->
      <div
        id="levelbox"
        class="mt-5 p-3 d-flex flex-column w-50"
        v-if="step == 1"
      >
        <div class="d-flex justify-content-between">
          <p class="fontNunito text-left col-10" style="font-size: 30px">
            {{ getImages[0].question }}
          </p>
          <p class="colorBlue fontAsap" style="font-size: 25px">Questão 1/4</p>
        </div>

        <section
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <img :src="getImages[0].img" width="200px" />
          <button
            v-on:click="selected1 = getImages[0].wrongAnswer"
            class="btnsPlay bgBlue mt-3"
          >
            {{ getImages[0].wrongAnswer }}
          </button>
          <button
          id="correct"
            class="btnsPlay bgBlue mt-4"
            v-on:click="selected1 = getImages[0].correctAnswer"
          >
            {{ getImages[0].correctAnswer }}
          </button>
          <button id="q1"
            class="btnsPlay bgOrange mt-3"
            style="width: 120px"
            v-on:click="changeQuestion1()"
          >
            Seguinte
          </button>
        </section>
      </div>
      <!--QUESTION 1-->
      <!--QUESTION 2-->
      <div
        id="levelbox"
        class="mt-5 p-3 d-flex flex-column w-50"
        v-if="step == 2"
      >
        <div class="d-flex justify-content-between">
          <p class="fontNunito text-left col-10" style="font-size: 30px">
            {{ getImages[1].question }}
          </p>
          <p class="colorBlue fontAsap" style="font-size: 25px">Questão 2/4</p>
        </div>

        <section
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <img :src="getImages[1].img" width="200px" />
          <button
            class="btnsPlay bgBlue mt-4"
            v-on:click="selected2 = getImages[1].correctAnswer"
          >
            {{ getImages[1].correctAnswer }}
          </button>
          <button
            v-on:click="selected2 = getImages[1].wrongAnswer"
            class="btnsPlay bgBlue mt-3"
          >
            {{ getImages[1].wrongAnswer }}
          </button>

          <button
          id="q2"
            class="btnsPlay bgOrange mt-3"
            style="width: 120px"
            v-on:click="changeQuestion2()"
          >
            Seguinte
          </button>
        </section>
      </div>
      <!--QUESTION 2-->
      <!--QUESTION 3-->
      <div
        id="levelbox"
        class="mt-5 p-3 d-flex flex-column w-50"
        v-if="step == 3"
      >
        <div class="d-flex justify-content-between">
          <p class="fontNunito text-left col-10" style="font-size: 30px">
            {{ getImages[2].question }}
          </p>
          <p class="colorBlue fontAsap" style="font-size: 25px">Questão 3/4</p>
        </div>

        <section
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <img :src="getImages[2].img" width="200px" />
          <button
            v-on:click="selected3 = getImages[2].wrongAnswer"
            class="btnsPlay bgBlue mt-3"
          >
            {{ getImages[2].wrongAnswer }}
          </button>
          <button
            class="btnsPlay bgBlue mt-4"
            v-on:click="selected3 = getImages[2].correctAnswer"
          >
            {{ getImages[2].correctAnswer }}
          </button>
          <button
          id="q3"
            class="btnsPlay bgOrange mt-3"
            style="width: 120px"
            v-on:click="changeQuestion3()"
          >
            Seguinte
          </button>
        </section>
      </div>
      <!--QUESTION 3-->
      <!--QUESTION 4-->
      <div
        id="levelbox"
        class="mt-5 p-3 d-flex flex-column w-50"
        v-if="step == 4"
      >
        <div class="d-flex justify-content-between">
          <p class="fontNunito text-left col-10" style="font-size: 30px">
            {{ getImages[3].question }}
          </p>
          <p class="colorBlue fontAsap" style="font-size: 25px">Questão 4/4</p>
        </div>

        <section
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <img :src="getImages[3].img" width="200px" />
          <button
            class="btnsPlay bgBlue mt-4"
            v-on:click="selected4 = getImages[3].correctAnswer"
          >
            {{ getImages[3].correctAnswer }}
          </button>
          <button
            v-on:click="selected4 = getImages[3].wrongAnswer"
            class="btnsPlay bgBlue mt-3"
          >
            {{ getImages[3].wrongAnswer }}
          </button>

          <button
          id="q1"
            class="btnsQuestion bgOrange mt-3"
            style="width: 120px"
            v-on:click="changeQuestion4()"
          >
            Seguinte
          </button>
        </section>
      </div>
      <!--QUESTION 4-->
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
            Acertaste {{ count }} das emoções apresentadas.
          </div>

          <router-link :to="{ name: 'Landing' }"
            ><button
              class="btnsPlay mt-4 mb-2 bgBlue goBack"
              style="width: 200px"
            >
              Voltar à página inicial
            </button></router-link
          >
        </div>
      </div>
    </b-modal>
    <div class="fixed-bottom">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "AdivinhaLevel",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      step: 1,
      count: 0,
      selected1: "",
      selected2: "",
      selected3: "",
      selected4: "",
      message: "Que pena, vais ter de estar mais atento...",
      messageImg: "../sad.png",
    };
  },
  created() {
    this.getImagesAPI("");
  },
  methods: {
    ...mapMutations(["SET_DIFFICULTYLEVEL"]),
    ...mapActions(["getImagesAPI"]),
    changeQuestion1() {
      if (this.getImages[0].correctAnswer == this.selected1) {
        this.count += 1;
      }
      this.step += 1;
    },
    changeQuestion2() {
      if (this.getImages[1].correctAnswer == this.selected2) {
        this.count += 1;
      }
      this.step += 1;
    },
    changeQuestion3() {
      if (this.getImages[2].correctAnswer == this.selected3) {
        this.count += 1;
      }
      this.step += 1;
    },
    changeQuestion4() {
      if (this.getImages[3].correctAnswer == this.selected4) {
        this.count += 1;
      }
      if (this.count >= 2) {
        this.message = "Muitos parabéns. Continua no bom caminho!";
        this.messageImg = "../like.svg";
      }
      this.$bvModal.show("modal-1");
    },
    closeModal() {
      this.$bvModal.hide("modal-1");
    },
  },
  computed: {
    ...mapGetters(["getImages"]),
  },
};
</script>

<style scoped>
.level {
  min-height: 100vh;
  position: relative;
}

#adivinha {
  width: 100px;
  border-radius: 20px;
}

#levelbox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  background: var(--white);
  box-shadow: 12px 12px 0px var(--orange);
}

#boy {
  margin-right: 12rem;
}

.btnsPlay {
  border: none;
  border-radius: 8px;
  width: 600px;
  height: 40px;
  font-size: 20px;
  color: white;
}
.btnsQuestion {
  border: none;
  border-radius: 8px;
  width: 600px;
  height: 40px;
  font-size: 20px;
  color: white;
}
.btnsPlay:focus {
  border: none;
  border-radius: 8px;
  width: 600px;
  height: 40px;
  font-size: 20px;
  background: #143642;
}
</style>
