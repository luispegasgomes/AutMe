export default {
  state: {
    emotions: [
      {
        name: "admiraçao",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f929.png",
        hint: "Acaba em O e tem um 'D'",
      },
      {
        name: "alegria",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f60a.png",
        hint: "Está muito contente ou...",
      },
      {
        name: "espantado",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f632.png",
        hint: "Está surpreso!",
      },
      {
        name: "duvida",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f914.png",
        hint: "Qual será está emoção?",
      },
      {
        name: "indiferença",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f610.png",
        hint: "Não quero mesmo saber.",
      },
      {
        name: "nervosismo",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f62c.png",
        hint: "Vou ter teste de PW1",
      },
      {
        name: "nojo",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f92e.png",
        hint: "Aiii que ...!",
      },
      {
        name: "raiva",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f621.png",
        hint: "Estou mesmo em brasa!!!",
      },
      {
        name: "tristeza",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f61e.png",
        hint: "Hoje não estou bem.",
      },
      {
        name: "vergonha",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f633.png",
        hint: "A palavra começa com V",
      },
    ],
    images: [
      {
        emotion: "Vergonha",
        imgUrl: "https://img.freepik.com/fotos-gratis/retrato-da-ruiva-fofa-emocional-da-menina-dando-palmas-nas-maos-isolado-em-um-branco_157927-17603.jpg?size=626&ext=jpg&ga=GA1.2.1905393522.1641340800",
      },
      {
        emotion: "Vergonha",
        imgUrl:
          "../raposa/Fofinho.svg",
      },
      {
        emotion: "Vergonha",
        imgUrl:
          "../cat/irritado.jpg",
      },
      {
        emotion: "Tristeza",
        imgUrl:
          "../raposa/Triste.svg",
      },
      {
        emotion: "Tristeza",
        imgUrl:
          "../person/person_sad-01.svg",
      },
      {
        emotion: "Tristeza",
        imgUrl:
          "../cat/triste.jpg",
      },
      {
        emotion: "Raiva",
        imgUrl:
          "../person/test.svg",
      },
      {
        emotion: "Raiva",
        imgUrl:
          "../raposa/Chateado.svg",
      },
      {
        emotion: "Raiva",
        imgUrl:
          "../cat/raiva.jpg",
      },
      {
        emotion: "Nojo",
        imgUrl:
          "https://static.vecteezy.com/system/resources/previews/002/890/858/original/young-fat-man-refuse-eating-broccoli-and-throws-it-in-trash-can-guy-with-refusing-gesture-facial-expression-of-disgust-picky-food-eater-unhealthy-lifestyle-concept-vector.jpg",
      },
      {
        emotion: "Nervosismo",
        imgUrl:
          "../raposa/Fugitivo.svg",
      },
      {
        emotion: "Nervosismo",
        imgUrl:
          "https://image.cachorrogato.com.br/textimages/cao-bravo.jpg",
      },
      {
        emotion: "Indiferença",
        imgUrl:
          "../person/person_really-01.svg",
      },
      {
        emotion: "Indiferença",
        imgUrl:
          "../cat/indiferença.jpg",
      },
      {
        emotion: "Dúvida",
        imgUrl:
          "../person/person_confused.svg",
      },
      {
        emotion: "Alegria",
        imgUrl:
          "https://i.pinimg.com/originals/62/50/d6/6250d6a15f2e025617136ecf120b686b.png",
      },
      {
        emotion: "Alegria",
        imgUrl:
          "../person/person_happy-01.svg",
      },
      {
        emotion: "Alegria",
        imgUrl:
          "../raposa/gato_feliz.svg",
      },
      {
        emotion: "Admiração",
        imgUrl: "../cat/espantado.jpg",
      },
      {
        emotion: "Admiração",
        imgUrl:
          "../raposa/Assustado.svg",
      },
      {
        emotion: "Admiração",
        imgUrl: "https://preview.pixlr.com/images/450nwm/100/1/1001466188.jpg",
      },
    ],
    recognizedImages: [
      {
        childUsername: "crianca",
        emotion: "Alegria",
        imgUrl:
          "http://www.clubefelicidade.com.br/dashboard/uploads/a61183b4-c641-4b4d-b915-67d6697fa20d/diferenca-entre-felicidade-alegria.jpg",
      },
      {
        childUsername: "crianca",
        emotion: "Alegria",
        imgUrl:
          "https://palavradodiacoutinho.com.br/wp-content/uploads/2019/05/alegria.jpg",
      },
    ],
  },
  getters: {
    /* Get 5 random emotions for the game ImitaMe */
    getEmotionsForImita: (state) => state.emotions.sort(() => Math.random() - 0.5),
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
    getRecognizedImages: (state) => (c, e) =>
      state.recognizedImages.filter(
        (ri) => ri.childUsername === c && ri.emotion === e
      ),
  },
  mutations: {
    ADD_EMOTION(state, payload) {
      state.emotions.push(payload);
    },
    ADD_IMAGE(state, payload) {
      state.images.push(payload);
    },
    REMOVE_EMOTION(state, payload) {
      state.emotions = state.emotions.filter(
        (emotion) => emotion.name !== payload
      );
      state.images = state.images.filter((image) => image.emotion !== payload);
      state.recognizedImages = state.recognizedImages.filter(
        (image) => image.emotion !== payload
      );
    },
    REMOVE_IMAGE(state, payload) {
      state.images = state.images.filter((image) => image.imgUrl !== payload);
      state.emotions = state.emotions.filter((emotion) =>
        state.images.find((image) => image.emotion === emotion.name)
      );
    },
    ADD_RECOGNIZED(state, payload) {
      state.recognizedImages.push(...payload);
    },
  },
  actions: {},
};
