export default {
  state: {
    loggedUserType: localStorage.user ? JSON.parse(localStorage.user) : [],
    loggedUsername: "",
    loggedUser: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : {},
    loggedUserInfo: "",
    userInfo: {},
    loggedEmail: "",
    userclick: localStorage.userclick ? JSON.parse(localStorage.userclick) : "",
    psychologists: [],
    psychologist: [],
    diaries: [],
    user: {},
    users: [],
    achievements:[],
    allAchievements: [],
    bindings: [],


  },
  getters: {
    getAchievements: (state) => state.achievements,
    getAllAchievements: (state) => state.allAchievements,
    getDiaries: (state) => state.diaries,
    getBindings: (state) => state.bindings[0],
    getUserInfo: (state) => state.userInfo,
    getPsychologists: (state) => state.psychologists[0],
    getPsychologistByUsername: (state) => state.psychologist,
    // This method returns the diaries corresponding to the logged user
    getIsAuthenticated: (state) => state.isAuthenticated,
    getUserType: (state) => state.loggedUser,
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

    getLoggedPsychologist: (state) =>
      state.psychologists.filter((d) => d.username === state.loggedUsername),
    getLoggedPsychologistEmail: (state) => state.users,
    getLoggedChild: (state) =>
      state.children.filter((d) => d.username === state.loggedUsername),
    getLoggedTutor: (state) =>
      state.tutors.filter((d) => d.username === state.loggedUsername),
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
    SET_LOGOUT(state) {
      state.loggedUser = {}
      state.user = {}
      localStorage.loggedUser = JSON.stringify(state.loggedUser);
    },
    SET_NEW_PASSWORD(state, payload) {
      state.users = state.users.map((user) =>
        user.username === state.loggedUsername ? {
          ...user,
          password: payload,
        } :
        user
      );

      localStorage.users = JSON.stringify(state.users);
    },
    SET_NEW_CONTACT(state, payload) {
      state.psychologists = state.psychologists.map((user) =>
        user.username === state.loggedUsername ? {
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
          user.username === state.loggedUsername ? {
            ...user,
            avatar: payload.newImg,
          } :
          user
        );
        localStorage.psychologists = JSON.stringify(state.psychologists);
      } else if (payload.userType == "child") {
        state.children = state.children.map((user) =>
          user.username === state.loggedUsername ? {
            ...user,
            avatar: payload.newImg,
          } :
          user
        );
        localStorage.children = JSON.stringify(state.children);
      } else if (payload.userType == "tutor") {
        state.tutors = state.tutors.map((user) =>
          user.username === state.loggedUsername ? {
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
      state.userclick = payload
      localStorage.userclick = JSON.stringify(state.userclick)
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
        c.childUser === payload.childUser && c.tutorUser === payload.tutorUser ? {
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
    SET_PSYCHOLOGISTS(state, payload) {
      state.psychologists.push(payload.users)
    },
    SET_PSYCHOLOGIST(state, payload) {
      state.psychologist.push(payload);
    },
    SET_DIARIES(state, payload) {
      state.diaries = []
      state.diaries.push(payload.user.diaries)
    },
    SET_LOGGED_USER(state, payload) {
      state.user = {}
      state.loggedUser.accessToken = payload.accessToken
      state.loggedUser.role = payload.role
      state.loggedUser.username = payload.username
      localStorage.loggedUser = JSON.stringify(state.loggedUser)
    },
    SET_USER_INFO(state, payload) {
      state.userInfo = {}
      state.userInfo.name = payload.user.name
      state.userInfo.username = payload.user.username
      state.userInfo.role = payload.user.role
      state.userInfo.email = payload.user.email
      state.userInfo.child_gender = payload.user.child_gender
      state.userInfo.child_avatar = payload.user.child_avatar
      state.userInfo.birthDate = payload.user.birthDate
      state.achievements = payload.user.achievements
    },
    SET_ACHIEVEMENTS(state, payload) {
      state.allAchievements = payload.achievements
    },
    SET_BINDINGS(state, payload) {
      state.bindings = []
      state.bindings.push(payload.user.bindings)
    },

  },
  actions: {
    async loadPsychologists(context) {
      const response = await fetch(`http://127.0.0.1:3000/users/psychologists`, {
        method: 'GET',
      })
      if (response.ok) {
        context.commit("SET_PSYCHOLOGISTS", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async loadDiaries(context) {
      let user = JSON.parse(localStorage.getItem('loggedUser'))
      const response = await fetch(`http://127.0.0.1:3000/users/${user.username}/diaries`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + user.accessToken
        },
      })
      if (response.ok) {
        context.commit("SET_DIARIES", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async loginAPI(context, data) {

      const response = await fetch("http://127.0.0.1:3000/users/login", {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      })
      if (response.status == 401) {
        alert('Credenciais inválidas')
      }
      if (response.ok) {
        context.commit("SET_LOGGED_USER", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async registerAPI(context, data) {

      const response = await fetch("http://127.0.0.1:3000/users", {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
      })
      if (!response.status == 201) {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async getUserAPI(context) {
      let user = JSON.parse(localStorage.getItem('loggedUser'))
      
      const response = await fetch(`http://127.0.0.1:3000/users/${user.username}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + user.accessToken
        },
      })
      if (response.ok) {
        context.commit("SET_USER_INFO", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async updatePasswordAPI(context,data){
      let user = JSON.parse(localStorage.getItem('loggedUser'))
      const response = await fetch(`http://127.0.0.1:3000/users/password/${user.username}`, {
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        method: 'PATCH',
        headers: {'Authorization': 'Bearer '+user.accessToken, 'Content-Type': 'application/json'},
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      })
      if(!response.ok){
        const err=await response.json()
        throw new Error(err.error)
      }
    },

    async addDiaryAPI(context, data) {
      let user = JSON.parse(localStorage.getItem('loggedUser'))
      const response = await fetch(`http://127.0.0.1:3000/users/${user.username}/diaries`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.accessToken
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
      })
      if (!response.status == 201) {
        const err = await response.json()
        throw new Error(err.error)
      }
    },

    async removeDiaryAPI(context,data){
      let user = JSON.parse(localStorage.getItem('loggedUser'))
      const response=await fetch(`http://127.0.0.1:3000/users/${user.username}/diaries/${data}`,{
        method: 'DELETE',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.accessToken
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
       
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async getAllAchievementsAPI(context) {
      
      const response = await fetch(`http://127.0.0.1:3000/achievements`, {
        method: 'GET',
      })
      if (response.ok) {
        context.commit("SET_ACHIEVEMENTS", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },

    async updateAvatarAPI(context,data){
      let user = JSON.parse(localStorage.getItem('loggedUser'))
      const response = await fetch(`http://127.0.0.1:3000/users/${user.username}`, {
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        method: 'PATCH',
        headers: {'Authorization': 'Bearer '+user.accessToken, 'Content-Type': 'application/json'},
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      })
      if(!response.ok){
        const err=await response.json()
        throw new Error(err.error)
      }
    },
    async addAchievementAPI(context,data){
      let user = JSON.parse(localStorage.getItem('loggedUser'))
      const response = await fetch(`http://127.0.0.1:3000/users/${user.username}/achievements/${data}`, {
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        method: 'PUT',
        headers: {'Authorization': 'Bearer '+user.accessToken, 'Content-Type': 'application/json'},
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      })
      if(!response.ok){
        const err=await response.json()
        throw new Error(err.error)
      }
    },
    async loadBindings(context) {
      let user = JSON.parse(localStorage.getItem('loggedUser'))
      const response = await fetch(`http://127.0.0.1:3000/users/${user.username}/bindings`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + user.accessToken
        },
      })
      if (response.ok) {
        context.commit("SET_BINDINGS", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async addBindingAPI(context, data) {
      let user = JSON.parse(localStorage.getItem('loggedUser'))
      const response = await fetch(`http://127.0.0.1:3000/users/${user.username}/bindings/${data}`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.accessToken
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      })
      if (!response.status == 201) {
        const err = await response.json()
        throw new Error(err.error)
      }

    },

    async addBindingAPI2(context, data) {
      let user = JSON.parse(localStorage.getItem('loggedUser'))
      const response = await fetch(`http://127.0.0.1:3000/users/${data.psychologist}/bindings/${data.allUserUsername}`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.accessToken
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      })
      if (!response.status == 201) {
        const err = await response.json()
        throw new Error(err.error)
      }

    },
    async addAppointmentAPI(context, data) {
      const response = await fetch(`http://127.0.0.1:3000/users/${data.allUserUsername}/appointments`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
      })
      if (!response.status == 201) {
        const err = await response.json()
        throw new Error(err.error)
      }
    },


  }

};