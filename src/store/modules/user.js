export default {
  state: {
    isAuthenticated: false,
    userType: "",
    username: "",
  },
  getters: {
    getIsAuthenticated: (state) => state.isAuthenticated,
    getUserType: (state) => state.userType,
    getUsername: (state) => state.username,
  },
  mutations: {},
  actions: {},
};
