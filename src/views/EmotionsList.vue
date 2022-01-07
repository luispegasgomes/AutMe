<template>
  <div class="emotions bgGrey d-flex flex-column justify-content-between">
    <Navbar activeTab="Emoções" />
    <main class="d-flex flex-column mx-5">
      <h1 class="fontAsap colorDarkBlue my-3 text-center">
        <BIconEmojiSmile /> Emoções <BIconEmojiFrown />
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

      <section class="mt-4 px-5 py-2 bgWhite d-flex flex-wrap">
        <article
          class="col-4 my-3 d-flex emotion"
          v-for="(emotion, index) in getEmotions"
          :key="index"
        >
          <img :src="emotion.imgUrl" :alt="emotion.name" width="90" />
          <div class="mx-4">
            <p class="fontNunito weightBold">{{ emotion.name }}</p>

            <BProgress
              :max="getImagesFromEmotion(emotion.name).length"
              class="mb-3 progBar"
              v-if="getUserType === 'child' || emotionsName !== 'all'"
            >
              <BProgressBar
                :style="{ background: '#143642' }"
                :value="
                  getRecognizedImages(
                    getUserType === 'child' ? getUsername : emotionsName,
                    emotion.name
                  ).length
                "
                :max="getImagesFromEmotion(emotion.name).length"
                show-value
              />
              <BProgressBar
                :style="{ background: '#ec9a29' }"
                :value="
                  getImagesFromEmotion(emotion.name).length -
                  getRecognizedImages(
                    getUserType === 'child' ? getUsername : emotionsName,
                    emotion.name
                  ).length
                "
              />
            </BProgress>
          </div>
        </article>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import {
  BIconEmojiSmile,
  BIconEmojiFrown,
  BProgress,
  BProgressBar,
} from "bootstrap-vue";

import { mapGetters } from "vuex";

export default {
  name: "EmotionsList",
  components: {
    Navbar,
    Footer,
    BIconEmojiSmile,
    BIconEmojiFrown,
    BProgress,
    BProgressBar,
  },
  data() {
    return {
      emotionsName: "all",
    };
  },
  computed: {
    ...mapGetters([
      "getEmotions",
      "getUserType",
      "getUsername",
      "getConnections",
      "getImagesFromEmotion",
      "getRecognizedImages",
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
  height: 25rem;
  overflow-y: scroll;
}

.emotion p {
  font-size: 28px;
}

.emotion .progBar {
  width: 10rem;
}
</style>
