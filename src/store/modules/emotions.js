export default {
  state: {
    newEmotions: [],
    images: [],
  },
  getters: {
    /* Sort emotions for the game CompletaMe */
    getNew: (state) => state.newEmotions[0].sort(() => Math.random() - 0.5),
    getImages: (state) => state.images[0],
    getEmotionsForAdivinha: (state) => (difficulty) => {
      let list = state.images
        .sort(() => Math.random() - 0.5)
        .filter(
          (imgItem) =>
            !state.recognizedImages.find(
              (riItem) => imgItem.imgUrl === riItem.imgUrl
            )
        )
        .splice(0, difficulty === "easy" ? 4 : difficulty === "medium" ? 6 : 8);
      return list;
    },
    getEmotionsNames: (state) => state.emotions.map((emotion) => emotion.name),
    getEmotionNameFromImage: (state) => (img) =>
      state.images.find((image) => image.imgUrl === img).emotion,
    getEmotions: (state) =>
      state.emotions.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      }),
    getImagesFromEmotion: (state) => (e) =>
      state.images.filter((image) => image.emotion === e),
    isEmotionUnavailable: (state) => (emotionName) =>
      !state.emotions.some(
        (emotion) => emotion.name.toLowerCase() === emotionName.toLowerCase()
      ),
  },
  mutations: {
    ADD_EMOTION(state, payload) {
      state.emotions.push(payload);
      localStorage.emotions = JSON.stringify(state.emotions);
    },
    ADD_IMAGE(state, payload) {
      state.images.push(payload);
      localStorage.images = JSON.stringify(state.images);
    },
    REMOVE_EMOTION(state, payload) {
      state.emotions = state.emotions.filter(
        (emotion) => emotion.name !== payload
      );
      state.images = state.images.filter((image) => image.emotion !== payload);
      state.recognizedImages = state.recognizedImages.filter(
        (image) => image.emotion !== payload
      );

      localStorage.emotions = JSON.stringify(state.emotions);
      localStorage.images = JSON.stringify(state.images);
      localStorage.recognizedImages = JSON.stringify(state.recognizedImages);
    },
    REMOVE_IMAGE(state, payload) {
      state.images = state.images.filter((image) => image.imgUrl !== payload);
      state.emotions = state.emotions.filter((emotion) =>
        state.images.find((image) => image.emotion === emotion.name)
      );
      localStorage.emotions = JSON.stringify(state.emotions);
      localStorage.images = JSON.stringify(state.images);
    },
    ADD_RECOGNIZED(state, payload) {
      state.recognizedImages.push(...payload);
      localStorage.recognizedImages = JSON.stringify(state.recognizedImages);
    },
    SET_EMOTIONS(state, payload) {
      state.newEmotions.push(payload.emotions)
    },
    SET_IMAGES(state, payload) {
      state.images = []
      state.images.push(payload.images)
    }
  },
  actions: {
    async getEmotionsAPI(context) {
      const response = await fetch(`http://127.0.0.1:3000/emotions`, {
        method: 'GET',
      })
      if (response.ok) {
        context.commit("SET_EMOTIONS", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async getImagesAPI(context) {
      const response = await fetch(`http://127.0.0.1:3000/images`, {
        method: 'GET',
      })
      if (response.ok) {
        context.commit("SET_IMAGES", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
  },
};
