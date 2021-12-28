function create_UUID() {
  let dt = new Date().getTime();
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

export default {
  state: {
    isAuthenticated: false,
    loggedUserType: "",
    loggedUsername: "",
    users: localStorage.users
      ? JSON.parse(localStorage.users)
      : [
          {
            username: "admin",
            email: "admin@gmail.com",
            password: "Esmad_2122",
            type: "admin",
          },
          {
            username: "crianca",
            email: "crianca@gmail.com",
            password: "Esmad_2122",
            type: "child",
          },
          {
            username: "tutor",
            email: "tutor@gmail.com",
            password: "Esmad_2122",
            type: "tutor",
          },
          {
            username: "psicologo",
            email: "psicologo@gmail.com",
            password: "Esmad_2122",
            type: "psychologist",
          },
        ],
    admins: localStorage.admins
      ? JSON.parse(localStorage.admins)
      : [
          {
            username: "admin",
            name: "Nome Admin",
            avatar: "",
          },
        ],
    children: localStorage.children
      ? JSON.parse(localStorage.children)
      : [
          {
            username: "crianca",
            name: "Nome Criança",
            avatar: "",
            gender: "M",
            birth: "2002-01-01",
            code: create_UUID(),
          },
        ],
    tutors: localStorage.tutors
      ? JSON.parse(localStorage.tutors)
      : [
          {
            username: "tutor",
            name: "Nome Tutor",
            avatar: "",
            gender: "M",
            birth: "1960-01-01",
            contact: "912345678",
          },
        ],
    psychologists: localStorage.psychologists
      ? JSON.parse(localStorage.psychologists)
      : [
          {
            username: "psicologo",
            name: "Nome Psicólogo",
            avatar: "",
            gender: "F",
            birth: "1996-01-01",
            contact: "932145678",
            locationAdress: "rua",
            postalCode: "4000-123",
            city: "Maia",
          },
        ],
  },
  getters: {
    getIsAuthenticated: (state) => state.isAuthenticated,
    getUserType: (state) => state.loggedUserType,
    getUsername: (state) => state.loggedUsername,
    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password
      ),
    isUnvailable: (state) => (username, email) =>
      state.users.some(
        (user) => user.username === username || user.email === email
      ),
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      const user = state.users.find((user) => user.username === payload);
      state.isAuthenticated = true;
      state.loggedUserType = user.type;
      state.loggedUsername = user.username;
    },
    SET_LOGOUT(state) {
      state.isAuthenticated = false;
      state.loggedUserType = "";
      state.loggedUsername = "";
    },
    CREATE_ACCOUNT(state, payload) {
      state.users.push({
        username: payload.username,
        email: payload.userEmail,
        password: payload.userPassword,
        type: payload.userType,
      });
      localStorage.users = JSON.stringify(state.users);
      if (payload.userType === "admin") {
        state.admins.push({
          username: payload.username,
          name: `${payload.userName} ${payload.userSurname}`,
          avatar: "",
        });
        localStorage.admins = JSON.stringify(state.admins);
      } else if (payload.userType === "child") {
        state.children.push({
          username: payload.username,
          name: `${payload.userName} ${payload.userSurname}`,
          avatar: "",
          gender: payload.userGender,
          birth: payload.userDate,
          code: create_UUID(),
        });
        localStorage.children = JSON.stringify(state.children);
      } else if (payload.userType === "tutor") {
        state.tutors.push({
          username: payload.username,
          name: `${payload.userName} ${payload.userSurname}`,
          avatar: "",
          gender: payload.userGender,
          birth: payload.userDate,
          contact: payload.userPhone,
        });
        localStorage.tutors = JSON.stringify(state.tutors);
      } else {
        state.psychologists.push({
          username: payload.username,
          name: `${payload.userName} ${payload.userSurname}`,
          avatar: "",
          gender: payload.userGender,
          birth: payload.userDate,
          contact: payload.userPhone,
          locationAdress: payload.userLocation,
          postalCode: payload.userPostalCode,
          city: payload.userCity,
        });
        localStorage.tutors = JSON.stringify(state.tutors);
      }
    },
  },
  actions: {},
};
