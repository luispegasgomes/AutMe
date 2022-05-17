function create_UUID() {
  let dt = new Date().getTime();
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx".replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

export default {
  state: {
    isAuthenticated: false,
    loggedUserType: "",
    loggedUsername: "",
    loggedUserInfo: "",
    loggedEmail: "",
    userclick: "",
    psychologistsDB:[],

    users: localStorage.users ?
      JSON.parse(localStorage.users) :
      [{
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
          username: "filipacastro2",
          email: "psicologo@gmail.com",
          password: "Esmad_2122",
          type: "psychologist",
        },
      ],
    admins: localStorage.admins ?
      JSON.parse(localStorage.admins) :
      [{
        username: "admin",
        name: "Nome Admin",
        avatar: "/temp_profile_img.png",
      }, ],
    children: localStorage.children ?
      JSON.parse(localStorage.children) :
      [{
        username: "crianca",
        name: "Nome Criança",
        avatar: "/temp_profile_img.png",
        gender: "M",
        birth: "2002-01-01",
        code: create_UUID(),
      }, ],
    tutors: localStorage.tutors ?
      JSON.parse(localStorage.tutors) :
      [{
        username: "tutor",
        name: "José António",
        avatar: "/homem.jpg",
        gender: "M",
        birth: "1960-01-01",
        contact: "912345678",
      }, ],
    psychologists: localStorage.psychologists ?
      JSON.parse(localStorage.psychologists) :
      [{
        username: "filipacastro2",
        name: "Filipa Castro",
        avatar: "/Filipa-Castro.png",
        gender: "F",
        birth: "1996-01-01",
        contact: "932145678",
        locationAdress: "Moreira, Maia",
        postalCode: "4000-123",
        city: "Maia",
      }, ],
    connections: localStorage.connections ?
      JSON.parse(localStorage.connections) :
      [{
        childUser: "crianca",
        tutorUser: "tutor",
        psychologistUser: "psicologo",
      }, ],
    diary: localStorage.diary ?
      JSON.parse(localStorage.diary) :
      [{
          username: "crianca",
          title: "Estou feliz!",
          description: "Foi um dia em cheio :D :D",
          date: "2021-04-22",
        },
        {
          username: "crianca",
          title: "Estou muito triste:(",
          description: "Foi um dia que não me senti bem na escola!",
          date: "2021-04-23",
        },
      ],
      
    recognizedImages: localStorage.recognizedImages ?
      JSON.parse(localStorage.recognizedImages) :
      [
        {
          username: "crianca",
          name: "Alegria",
          imgUrl: "https://images.emojiterra.com/google/android-11/512px/1f60a.png",
        },
        {
          username: "crianca",
          name: "Admiração",
          imgUrl: "https://images.emojiterra.com/google/android-11/512px/1f929.png",
        },
      ],
  },
  getters: {
    getPsychologistsDB: (state) => state.psychologistsDB,
    getPsychologistsByUsernameDB: (state) => (selected) =>
    state.psychologistsDB.find((psico) => psico.username === selected),
    getIsAuthenticated: (state) => state.isAuthenticated,
    getUserType: (state) => state.loggedUserType,
    getUsername: (state) => state.loggedUsername,
    getEmail: (state) => state.loggedEmail,
    getLoggedUserInformations: (state) => state.loggedUserInfo,
    getUsernameDiary: (state) =>
      state.diary.filter((d) => d.username === state.loggedUsername),
    getUsernameRecognizedEmotion: (state) =>
      state.recognizedImages.filter((d) => d.username === state.loggedUsername),
    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password
      ),
    isUnvailable: (state) => (username, email) =>
      state.users.some(
        (user) => user.username === username || user.email === email
      ),
    userExists: (state) => (username) =>
      state.users.some((user) => user.username === username),
    getConnections: (state) =>
      state.connections.filter(
        (connection) =>
        connection.tutorUser === state.loggedUsername ||
        connection.psychologistUser === state.loggedUsername
      ),
    getChildAvatar: (state) => (childUsername) =>
      state.children.find((c) => c.username === childUsername).avatar,
    getPsychologists: (state) => state.psychologists,
    getLoggedPsychologist: (state) =>
      state.psychologists.filter((d) => d.username === state.loggedUsername),
    getLoggedPsychologistEmail: (state) => state.users,
    getLoggedChild: (state) =>
      state.children.filter((d) => d.username === state.loggedUsername),
    getLoggedTutor: (state) =>
      state.tutors.filter((d) => d.username === state.loggedUsername),
    getPsychologistsByUsername: (state) => (selected) =>
      state.psychologists.find((psico) => psico.username === selected),
    getSelectedChildInformations: (state) =>
      state.children.filter((d) => d.username === state.userclick),
    getLoggedChildCode: (state) =>
      state.children.find((c) => c.username === state.loggedUsername).code,
    getUsernameFromCode: (state) => (code) =>
      state.children.find((c) => c.code === code).username,
    checkSameConnection: (state) => (childUsername) =>
      state.connections.some(
        (c) =>
        c.childUser === childUsername && c.tutorUser === state.loggedUsername
      ),
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      const user = state.users.find((user) => user.username === payload);
      state.isAuthenticated = true;
      state.loggedUserType = user.type;
      state.loggedUsername = user.username;
      state.loggedEmail = user.email;

      state.loggedUserInfo = state.users.find(
        (user) => user.username === payload
      );

      switch (state.loggedUserType) {
        case "child":
          state.loggedUserInfo = state.children.find(
            (user) => user.username === payload
          );
          break;

        case "psychologist":
          state.loggedUserInfo = state.psychologists.find(
            (user) => user.username === payload
          );
          break;

        case "tutor":
          state.loggedUserInfo = state.tutors.find(
            (user) => user.username === payload
          );
          break;

        default:
          state.loggedUserInfo = state.admins.find(
            (user) => user.username === payload
          );
      }
      localStorage.loggedUserInfo = JSON.stringify(state.loggedUserInfo);
    },
    SET_LOGOUT(state) {
      state.isAuthenticated = false;
      state.loggedUserType = "";
      state.loggedUsername = "";
    },
    SET_NEW_PASSWORD(state, payload) {
      state.users = state.users.map((user) =>
        user.username === state.loggedUsername ?
        {
          ...user,
          password: payload,
        } :
        user
      );

      localStorage.users = JSON.stringify(state.users);
    },
    SET_NEW_CONTACT(state, payload) {
      state.psychologists = state.psychologists.map((user) =>
        user.username === state.loggedUsername ?
        {
          ...user,
          contact: payload,
        } :
        user
      );
      localStorage.psychologists = JSON.stringify(state.psychologists);
    },
    SET_NEW_PROFILE_IMG(state, payload) {
      if (payload.userType == "psychologist") {
        state.psychologists = state.psychologists.map((user) =>
          user.username === state.loggedUsername ?
          {
            ...user,
            avatar: payload.newImg,
          } :
          user
        );
        localStorage.psychologists = JSON.stringify(state.psychologists);
      } else if (payload.userType == "child") {
        state.children = state.children.map((user) =>
          user.username === state.loggedUsername ?
          {
            ...user,
            avatar: payload.newImg,
          } :
          user
        );
        localStorage.children = JSON.stringify(state.children);
      } else if (payload.userType == "tutor") {
        state.tutors = state.tutors.map((user) =>
          user.username === state.loggedUsername ?
          {
            ...user,
            avatar: payload.newImg,
          } :
          user
        );
        localStorage.tutors = JSON.stringify(state.tutors);
      }
    },
    SET_NEW_DIARY(state, payload) {
      state.diary.push({
        username: payload.username,
        title: payload.title,
        description: payload.description,
        date: payload.date,
      });
      localStorage.diary = JSON.stringify(state.diary);
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
          avatar: "/temp_profile_img.png",
        });
        localStorage.admins = JSON.stringify(state.admins);
      } else if (payload.userType === "child") {
        state.children.push({
          username: payload.username,
          name: `${payload.userName} ${payload.userSurname}`,
          avatar: "/temp_profile_img.png",
          gender: payload.userGender,
          birth: payload.userDate,
          code: create_UUID(),
        });
        localStorage.children = JSON.stringify(state.children);
      } else if (payload.userType === "tutor") {
        state.tutors.push({
          username: payload.username,
          name: `${payload.userName} ${payload.userSurname}`,
          avatar: "/temp_profile_img.png",
          gender: payload.userGender,
          birth: payload.userDate,
          contact: payload.userPhone,
        });
        localStorage.tutors = JSON.stringify(state.tutors);
      } else {
        state.psychologists.push({
          username: payload.username,
          name: `${payload.userName} ${payload.userSurname}`,
          avatar: "/temp_profile_img.png",
          gender: payload.userGender,
          birth: payload.userDate,
          contact: payload.userPhone,
          locationAdress: payload.userLocation,
          postalCode: payload.userPostalCode,
          city: payload.userCity,
        });
        localStorage.psychologists = JSON.stringify(state.psychologists);
      }
    },
    UPDATE_ACCOUNT(state, payload) {
      const requestedUser = state.users.find(
        (user) => user.username === payload
      );

      if (requestedUser.type === "child") {
        const child = state.children.find(
          (c) => c.username === requestedUser.username
        );
        state.admins.push({
          username: child.username,
          name: child.name,
          avatar: child.avatar,
        });
        state.children = state.children.filter(
          (c) => c.username !== requestedUser.username
        );
      } else if (requestedUser.type === "tutor") {
        const tutor = state.tutors.find(
          (t) => t.username === requestedUser.username
        );
        state.admins.push({
          username: tutor.username,
          name: tutor.name,
          avatar: tutor.avatar,
        });
        state.tutors = state.tutors.filter(
          (t) => t.username !== requestedUser.username
        );
      } else {
        const psychologist = state.psychologists.find(
          (p) => p.username === requestedUser.username
        );
        state.admins.push({
          username: psychologist.username,
          name: psychologist.name,
          avatar: psychologist.avatar,
        });
        state.psychologists = state.psychologists.filter(
          (p) => p.username !== requestedUser.username
        );
      }

      localStorage.users = JSON.stringify(state.users);
      localStorage.admins = JSON.stringify(state.admins);
      localStorage.children = JSON.stringify(state.children);
      localStorage.tutors = JSON.stringify(state.tutors);
      localStorage.psychologists = JSON.stringify(state.psychologists);
    },
    SET_CLICKED_CHILD(state, payload) {
      state.userclick = payload;
    },
    SET_NEW_CONNECTION(state, payload) {
      state.connections.push({
        childUser: payload,
        tutorUser: state.loggedUsername,
        psychologistUser: "",
      });
      localStorage.connections = JSON.stringify(state.connections);
    },
    CONNECT_PSYCHOLOGIST(state, payload) {
      state.connections = state.connections.map((c) =>
        c.childUser === payload.childUser && c.tutorUser === payload.tutorUser ?
        {
          ...c,
          psychologistUser: payload.psychologistUser
        } :
        c
      );
      localStorage.connections = JSON.stringify(state.connections);
    },
    SET_NEW_RECOGNIZED_EMOTION(state, payload) {
      state.recognizedImages.push({
        username: payload.username,
        name: payload.name,
        imgUrl: payload.imgUrl,
      });
      localStorage.recognizedImages = JSON.stringify(state.recognizedImages);
    },
    setPsychologists(state, psychologistsDB) {
      state.psychologistsDB = psychologistsDB;
    },
  },
  actions: {
    fetchAllPsychologists(context) {
      return fetch("http://127.0.0.1:3000/psychologists")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setPsychologists", data);
        })
        .catch((err) => console.error(err));
    },
  },
};