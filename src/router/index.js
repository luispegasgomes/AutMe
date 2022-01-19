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
import GameImita from "../views/GameImita.vue";
import AdivinhaLevel from "../views/AdivinhaLevel.vue";
import Adivinha from "../views/Adivinha.vue";
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
      types: ["child", "tutor", "psychologist", "admin"],
    },
  },
  {
    path: "/diary",
    name: "Diary",
    component: Diary,
    meta: {
      requiresAuth: false,
      title: "O meu diário",
      types: ["child"],
    },
  },
  {
    path: "/children",
    name: "Children",
    component: Children,
    meta: {
      requiresAuth: false,
      title: "As minhas crianças",
      types: ["tutor", "psychologist"],
    },
  },
  {
    path: "/PsychologistList",
    name: "PsychologistList",
    component: PsychologistList,
    meta: {
      requiresAuth: false,
      title: "Os psicólogos",
      types: ["tutor"],
    },
  },
  {
    path: "/emotions",
    name: "EmotionsList",
    component: EmotionsList,
    meta: {
      requiresAuth: false,
      title: "Emoções",
      types: ["child", "tutor", "psychologist", "admin"],
    },
  },
  {
    path: "/manage",
    name: "Manage",
    component: Manage,
    meta: {
      requiresAuth: false,
      title: "Gestão",
      types: ["admin"],
    },
  },
  {
    path: "/gameimita",
    name: "GameImita",
    component: GameImita,
    meta: {
      requiresAuth: false,
      title: "GameImita",
      types: ["child", "tutor", "psychologist", "admin"],
    },
  },
  {
    path: "/adivinhalevel",
    name: "AdivinhaLevel",
    component: AdivinhaLevel,
    meta: {
      requiresAuth: false,
      title: "Adivinha - Escolhe o nível",
      types: ["child", "tutor", "psychologist", "admin"],
    },
  },
  {
    path: "/adivinha",
    name: "Adivinha",
    component: Adivinha,
    meta: {
      requiresAuth: false,
      title: "Adivinha",
      types: ["child", "tutor", "psychologist", "admin"],
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
