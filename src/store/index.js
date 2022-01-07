import Vue from "vue";
import Vuex from "vuex";

import users from "./modules/users";
import emotions from "./modules/emotions";
import games from "./modules/games";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    emotions,
    games,
  },
});
