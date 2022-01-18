<template>
  <div class="game bgGrey d-flex flex-column justify-content-between">
    <Navbar />
    <main class="my-3 d-flex flex-column align-items-center">
      <p class="fontNunito" style="font-size: 30px">
        Adivinha as emoções de cada imagem!
      </p>
      <div class="gameBox p-4 d-flex flex-wrap justify-content-between col-8">
        <article
          v-for="(item, index) in emotions"
          :key="index"
          :class="getDifficultyLevel === 'easy' ? 'm-4' : 'm-2'"
        >
          <img
            :src="item.imgUrl"
            alt="img"
            :width="getDifficultyLevel === 'easy' ? '300' : '200'"
            :height="getDifficultyLevel === 'easy' ? '300' : '200'"
          />
          <select v-model="answers[index]" class="mt-2">
            <option value="" disabled>Emoção</option>
            <option
              v-for="(name, index) in getEmotionsNames"
              :key="index"
              :value="name"
            >
              {{ name }}
            </option>
          </select>
        </article>
      </div>

      <button
        class="bgOrange colorWhite px-2 py-1 my-3 border-0 d-flex align-items-center"
        @click="verify"
      >
        <img src="../assets/verificar.png" width="40" />
        <span class="fontNunito px-1" style="font-size: 28px"
          >Vamos verificar!</span
        >
      </button>
    </main>

    <b-modal id="modal" hide-header hide-footer>
      <div class="d-flex flex-column">
        <div class="d-flex align-items-center justify-content-between">
          <div class="fontBarlow" style="font-size: 30px">Terminou o jogo!</div>
        </div>
        <div class="d-flex flex-column align-items-center mt-3">
          <img src="../assets/like.svg" width="100" />
          <div
            class="fontNunito mt-3 align-items-center"
            style="font-size: 20px; text-align: center"
          >
            Reconheceste {{ counter }} emoções
          </div>

          <div>
            <button
              class="btnsPlay mt-4 mb-2 bgBlue px-2 mx-3"
              @click="refresh"
            >
              Jogar de novo!
            </button>

            <router-link :to="{ name: 'Landing' }"
              ><button class="btnsPlay mt-4 mb-2 bgBlue px-2">
                Voltar à página inicial
              </button></router-link
            >
          </div>
        </div>
      </div>
    </b-modal>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import router from "../router";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Adivinha",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      emotions: "",
      answers: ["", "", "", "", "", "", "", ""],
      counter: 0,
    };
  },
  mounted() {
    this.emotions = this.getEmotionsForAdivinha(this.getDifficultyLevel);
  },
  methods: {
    verify() {
      let recognized = [];
      const imgs = document.querySelectorAll("article img");
      for (let i = 0; i < imgs.length; i++) {
        // add to counter and recognizedImages if answer is right
        if (this.getEmotionNameFromImage(imgs[i].src) === this.answers[i]) {
          this.counter++;
          recognized.push({
            childUsername: this.getUsername,
            emotion: this.answers[i],
            imgUrl: imgs[i].src,
          });
        }
      }
      this.ADD_RECOGNIZED(recognized);
      this.$bvModal.show("modal");
    },
    refresh() {
      router.go();
    },
    ...mapMutations(["ADD_RECOGNIZED"]),
  },
  computed: {
    ...mapGetters([
      "getDifficultyLevel",
      "getEmotionsForAdivinha",
      "getEmotionsNames",
      "getEmotionNameFromImage",
      "getUsername",
    ]),
  },
};
</script>

<style scoped>
.game {
  min-height: 100vh;
}

.gameBox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 6px 6px 0px var(--orange);
  background: white;
}

.gameBox article {
  display: flex;
  flex-direction: column;
}

.gameBox img {
  border-radius: 20px;
}

.gameBox select {
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  box-shadow: 0px 4px 4px 0px #00000040;
}

.btnsPlay {
  border: none;
  border-radius: 8px;
  font-size: 20px;
  color: white;
}
</style>
