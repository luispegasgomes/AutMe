export default {
  state: {
    emotions: [
      {
        name: "Aceitação",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f917.png",
      },
      {
        name: "Admiração",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f929.png",
      },
      {
        name: "Afeição",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f970.png",
      },
      {
        name: "Alegria",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f60a.png",
      },
      {
        name: "Amor",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f970.png",
      },
      {
        name: "Calma",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f60c.png",
      },
      {
        name: "Diversão",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f92a.png",
      },
      {
        name: "Aflição",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f623.png",
      },
      {
        name: "Choque",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f632.png",
      },
      {
        name: "Desespero",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f631.png",
      },
      {
        name: "Dúvida",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f914.png",
      },
      {
        name: "Fúria",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f624.png",
      },
      {
        name: "Indiferença",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f610.png",
      },
      {
        name: "Nervosismo",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f62c.png",
      },
      {
        name: "Nojo",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f92e.png",
      },
      {
        name: "Raiva",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f621.png",
      },
      {
        name: "Tristeza",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f61e.png",
      },
      {
        name: "Vergonha",
        imgUrl:
          "https://images.emojiterra.com/google/android-11/512px/1f633.png",
      },
    ],
  },
  getters: {
    getEmotions: (state) =>
      state.emotions.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      }),
  },
  mutations: {},
  actions: {},
};
