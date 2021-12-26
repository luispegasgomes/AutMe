import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import InfoAutism from "../views/InfoAutism.vue";
import Landing from "../views/Landing.vue";

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
      title: "Entrar",
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
