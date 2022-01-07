<template>
  <div class="level bgGrey d-flex flex-column justify-content-between">
    <Navbar />
    <main class="d-flex flex-column align-items-center my-3">
      <div class="d-flex align-items-center">
        <img src="../assets/adivinha.jpg" id="adivinha" />
        <h1 class="fontAsap weightBold px-4">Adivinha-me!</h1>
      </div>

      <div id="levelbox" class="my-5 p-5 d-flex flex-column w-75">
        <p
          class="fontNunito text-center col-10 align-self-center"
          style="font-size: 20px"
        >
          Neste jogo, mediante o nível que escolheres serão selecionadas imagens
          diferentes de emoções para tu responderes, bora lá descobrir algumas
          emoções! Ah e não te esqueças de consultar no fim a secção de emoções
          para veres como te estas a sair: Sem mais demoras, bora jogar!
        </p>
        <section class="d-flex justify-content-between">
          <router-link :to="{ name: 'Adivinha' }">
            <button
              class="fontNunito bgOrange colorDarkBlue btnsPlay my-2"
              @click="SET_DIFFICULTYLEVEL('easy')"
            >
              Fácil
            </button>
          </router-link>
          <router-link :to="{ name: 'Adivinha' }">
            <button
              class="fontNunito bgOrange colorDarkBlue btnsPlay my-2"
              @click="SET_DIFFICULTYLEVEL('medium')"
            >
              Intermédio
            </button>
          </router-link>
          <router-link :to="{ name: 'Adivinha' }">
            <button
              class="fontNunito bgOrange colorDarkBlue btnsPlay my-2"
              @click="SET_DIFFICULTYLEVEL('hard')"
            >
              Difícil
            </button>
          </router-link>
        </section>
      </div>

      <div class="d-flex">
        <img
          src="../assets/Ativo_4.svg"
          alt="boneco rapaz"
          height="200px"
          id="boy"
        />
        <img src="../assets/Ativo_1.svg" alt="boneco rapariga" height="200px" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapMutations } from "vuex";
export default {
  name: "AdivinhaLevel",
  components: {
    Navbar,
    Footer,
  },
  methods: {
    ...mapMutations(["SET_DIFFICULTYLEVEL"]),
  },
};
</script>

<style scoped>
.level {
  height: 100vh;
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
  width: 200px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: var(--darkBlue);
}
</style>
