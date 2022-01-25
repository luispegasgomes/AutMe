<template>
  <nav class="d-flex justify-content-between align-items-end pl-3 py-2">
    <router-link :to="{ name: 'Landing' }" class="nav-link text-uppercase"
      ><img src="../assets/logo.svg" alt="AutMe logo" height="50"
    /></router-link>

    <div class="d-flex align-items-end colorDarkBlue" style="font-size: 20px">
      <ul class="navbar-nav fontBarlow weightLight d-flex flex-row col-3">
        <li
          v-if="getUserType != 'child'"
          :class="{
            'nav-item': true,
            'mx-5': true,
            selected: activeTab == 'Emoções',
          }"
          class="col-6 d-flex flex-column align-items-center"
        >
          <router-link
            :to="{ name: 'EmotionsList' }"
            class="nav-link text-uppercase"
            >EMOÇÕES</router-link
          >
        </li>
        <li
          v-if="getUserType != 'child' && getUserType != 'admin'"
          :class="{
            'nav-item': true,
            'mx-5': true,
            selected: activeTab == 'Crianças',
          }"
          class="col-6 d-flex flex-column align-items-center"
        >
          <router-link
            :to="{ name: 'Children' }"
            class="nav-link text-uppercase"
            >Crianças</router-link
          >
        </li>
        <li
          v-if="getUserType === 'psychologist'"
          :class="{
            'nav-item': true,
            'mx-5': true,
            selected: activeTab == 'Pedidos',
          }"
        >
          <router-link :to="{ name: '' }" class="nav-link text-uppercase"
            >Pedidos</router-link
          >
        </li>
        <li
          v-if="getUserType === 'psychologist'"
          :class="{
            'nav-item': true,
            'mx-5': true,
            selected: activeTab == 'Agenda',
          }"
          class="col-6 d-flex flex-column align-items-center"
        >
          <router-link :to="{ name: '' }" class="nav-link text-uppercase"
            >Agenda</router-link
          >
        </li>
        <li
          v-if="getUserType === 'tutor'"
          :class="{
            'nav-item': true,
            'mx-5': true,
            selected: activeTab == 'Psicólogos',
          }"
          class="col-6 d-flex flex-column align-items-center"
        >
          <router-link
            :to="{ name: 'PsychologistList' }"
            class="nav-link text-uppercase"
            >Psicólogos</router-link
          >
        </li>
        <li
          v-if="getUserType === 'admin'"
          :class="{
            'nav-item': true,
            'mx-2': true,
            selected: activeTab == 'Gestão',
          }"
        >
          <router-link :to="{ name: 'Manage' }" class="nav-link text-uppercase"
            >Gestão</router-link
          >
        </li>
      </ul>
    </div>
    <div class="d-flex mx-3">
      <router-link
        :to="{ name: 'Profile' }"
        class="mx-1 d-flex flex-column align-items-end"
      >
        <img :src="profileImage" :alt="profileImage" height="50" width="50" style="border-radius:100px"/>
      </router-link>
      <button class="btn" @click="logout">
        <img src="../assets/shutdown.png" height="30" />
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import router from "../router";
export default {
  name: "Navbar",
  props: {
    activeTab: String,
  },
  data() {
    return {
      profileImage: "../temp_profile_img.png",
    }
  },
  mounted() {
    if (this.getUserType == "psychologist") {
      this.profileImage = this.getLoggedPsychologist[0].avatar;
    } else if (this.getUserType == "child") {
      this.profileImage = this.getLoggedChild[0].avatar;
    } else if (this.getUserType == "tutor") {
      this.profileImage = this.getLoggedTutor[0].avatar;
    }
  },
  methods: {
    logout() {
      this.SET_LOGOUT();
      router.push({ name: "Home" });
    },
    ...mapMutations(["SET_LOGOUT"]),
  },
  computed: {
    ...mapGetters([
      "getUserType",
      "getChildAvatar",
      "getLoggedChild",
      "getLoggedTutor",
      "getLoggedPsychologist",
    ]),
  },
};
</script>

<style scoped>
li a,
li a:hover {
  color: black;
  padding: 0;
}

.selected {
  background: var(--blue);
  padding: 0 5px;
  font-weight: bold;
  border-radius: 10px;
}

.selected a {
  color: var(--white);
}
</style>
