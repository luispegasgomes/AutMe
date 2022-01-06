<template>
  <div class="emotions bgGrey d-flex flex-column justify-content-between">
    <Navbar activeTab="Emoções" />
    <main class="d-flex flex-column mx-5">
      <h1 class="fontAsap colorDarkBlue my-3 text-center">
        <BIconEmojiSmile /> Emoções <BIconEmojiFrown />
      </h1>

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
              :max="10"
              class="mb-3 progBar"
              v-if="getUserType === 'child'"
            >
              <BProgressBar :style="{ background: '#143642' }" :value="0" />
              <BProgressBar :style="{ background: '#ec9a29' }" :value="10" />
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
  computed: {
    ...mapGetters(["getEmotions", "getUserType"]),
  },
};
</script>

<style scoped>
.emotions {
  height: 100vh;
}

input {
  height: 36px;
  width: 15rem;
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
