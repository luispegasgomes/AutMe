<template>
  <div class="emotions bgGrey d-flex flex-column">
    <Navbar activeTab="Emoções" />
    <main class="d-flex flex-column mx-5">
      <h1 class="fontAsap colorDarkBlue my-3 text-center">
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/emotion.png" width="100" />
          <p class="mx-5">As minhas emoções</p>
        </div>
      </h1>

      <div
        class="d-flex align-items-center"
        v-if="getUserType === 'tutor' || getUserType === 'psychologist'"
      >
        <p class="fontAsap colorDarkBlue mr-3 my-2" style="font-size: 22px">
          Filtro:
        </p>
        <select v-model="emotionsName" @change="showEmotions">
          <option value="all">Todas as emoções</option>
          <option
            v-for="(connection, index) in getConnections"
            :key="index"
            :value="connection.childUser"
          >
            {{ connection.childUser }}
          </option>
        </select>
      </div>
      <div class="d-flex flex-column align-items-center mt-4">
        <p class="fontAsap colorBlue" style="font-size:28px;">
          Olá amiguinho! Aqui estás ver todas as emoções que já reconheceste
          pelo jogo CompletaMe.
        </p>
        <section class="mt-4 bgWhite d-flex col-7">
          <div
            class="col-2 mt-3 mx-3 emotion"
            v-for="(emotion, index) in getUsernameRecognizedEmotion"
            :key="index"
          >
            <img
              :src="emotion.imgUrl"
              :alt="emotion.name"
              width="90"
              height="90"
            />
            <p class="fontNunito weightBold">{{ emotion.name }}</p>
          </div>
        </section>
      </div>
    </main>
    <div class="fixed-bottom">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "EmotionsList",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      emotionsName: "all",
    };
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      "getEmotions",
      "getUserType",
      "getUsername",
      "getConnections",
      "getImagesFromEmotion",
      "getUsernameRecognizedEmotion",
      "getUsernameDiary",
    ]),
    showEmotions() {
      return this.emotionsName === "all" ? this.getEmotions : this.getEmotions;
    },
  },
};
</script>

<style scoped>
.emotions {
  height: 100vh;
}

select {
  height: 36px;
  width: 20rem;
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  margin-left: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
}

section {
  border: 4px solid var(--orange);
  border-radius: 11px;
  box-shadow: 8px 8px var(--orange);
  text-align: center;
  height: 30rem;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}

.emotion p {
  font-size: 28px;
}
</style>
