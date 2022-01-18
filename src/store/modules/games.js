export default {
  state: {
    difficultyLevel: "hard",
  },
  getters: {
    getDifficultyLevel: (state) => state.difficultyLevel,
  },
  mutations: {
    SET_DIFFICULTYLEVEL(state, payload) {
      state.difficultyLevel = payload;
    },
  },
  actions: {},
};
