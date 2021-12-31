import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import InfoAutism from "../views/InfoAutism.vue";
import Landing from "../views/Landing.vue";
import Profile from "../views/Profile.vue";
import Diary from "../views/Diary.vue";
import Children from "../views/Children.vue";
import PsychologistList from "../views/PsychologistList.vue";
import EmotionsList from "../views/EmotionsList.vue";
import Manage from "../views/Manage.vue";
import Error from "../views/Error.vue";

function isAuthenticated() {
  return store.getters.getIsAuthenticated;
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
      title: "AutMe",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
      title: "Entrar",
    },
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresAuth: false,
      title: "Registar",
    },
  },
  {
    path: "/infoaustism",
    name: "InfoAutism",
    component: InfoAutism,
    meta: {
      requiresAuth: false,
      title: "Informações",
    },
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
    meta: {
      requiresAuth: false,
      title: "Landing",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: false,
      title: "O meu perfil",
    },
  },
  {
    path: "/diary",
    name: "Diary",
    component: Diary,
    meta: {
      requiresAuth: false,
      title: "O meu diário",
    },
  },
  {
    path: "/children",
    name: "Children",
    component: Children,
    meta: {
      requiresAuth: false,
      title: "As minhas crianças",
    },
  },
  {
    path: "/PsychologistList",
    name: "PsychologistList",
    component: PsychologistList,
    meta: {
      requiresAuth: false,
      title: "Os psicólogos",
    },
  },
  {
    path: "/emotions",
    name: "EmotionsList",
    component: EmotionsList,
    meta: {
      requiresAuth: false,
      title: "Emoções",
    },
  },
  {
    path: "/manage",
    name: "Manage",
    component: Manage,
    meta: {
      requiresAuth: false,
      title: "Gestão",
    },
  },
  {
    path: "*",
    name: "Error",
    component: Error,
    meta: {
      requiresAuth: false,
      title: "Erro",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: "Login" });
  } else {
    next();
  }
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
