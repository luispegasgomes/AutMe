<template>
  <nav class="d-flex justify-content-between align-items-end pl-3 py-2">
    <router-link :to="{ name: 'Landing' }" class="nav-link text-uppercase"
      ><img src="../assets/tester.png" alt="AutMe logo" height="70"
    /></router-link>

    <div class="d-flex align-items-end colorDarkBlue" style="font-size: 20px">
      <ul class="navbar-nav fontBarlow weightLight d-flex flex-row col-3">
        <li
          v-if="userType != 'child'"
          :class="{
            'nav-item': true,
            'mx-5': true,
            selected: activeTab == 'Emoções',
          }"
          class="d-flex flex-column align-items-center"
        >
          <router-link
            :to="{ name: 'EmotionsList' }"
            class="nav-link text-uppercase navEmotions"
            >Conquistas</router-link
          >
        </li>
        <li
          v-if="userType != 'child' && userType != 'admin'"
          :class="{
            'nav-item': true,
            'mx-5': true,
            selected: activeTab == 'Crianças',
          }"
          class="d-flex flex-column align-items-center"
        >
          <router-link
            :to="{ name: 'Children' }"
            class="nav-link text-uppercase navChildren"
            >Crianças</router-link
          >
        </li>
        <li
          v-if="userType === 'psychologist'"
          :class="{
            'nav-item': true,
            'mx-5': true,
            selected: activeTab == 'Pedidos',
          }"
        >
          <router-link
            :to="{ name: 'Pedidos' }"
            class="nav-link text-uppercase navRequests"
            >Pedidos</router-link
          >
        </li>
        <li
          v-if="userType === 'psychologist'"
          :class="{
            'nav-item': true,
            'mx-5': true,
            selected: activeTab == 'Agenda',
          }"
          class="d-flex flex-column align-items-center"
        >
          <router-link
            :to="{ name: 'Agenda' }"
            class="nav-link text-uppercase navShedule"
            >Agenda</router-link
          >
        </li>
        <li
          v-if="userType === 'tutor'"
          :class="{
            'nav-item': true,
            'mx-5': true,
            selected: activeTab == 'Psicólogos',
          }"
          class="d-flex flex-column align-items-center"
        >
          <router-link
            :to="{ name: 'PsychologistList' }"
            class="nav-link text-uppercase navPsychologists"
            >Psicólogos</router-link
          >
        </li>
        <li
          v-if="userType === 'admin'"
          :class="{
            'nav-item': true,
            'mx-2': true,
            selected: activeTab == 'Gestão',
          }"
        >
          <router-link
            :to="{ name: 'Manage' }"
            class="nav-link text-uppercase navManagement"
            >Gestão</router-link
          >
        </li>
      </ul>
    </div>
    <div class="d-flex mx-3">
      <router-link
        :to="{ name: 'Profile' }"
        class="mx-1 d-flex flex-column align-items-end profile"
      >
        <img
          :src="getUserInfo.child_avatar"
          :alt="getUserInfo.child_avatar"
          height="50"
          width="50"
          style="border-radius: 100px"
        />
      </router-link>
      <button id="btnLogOut" class="btn" @click="logout">
        <img src="../assets/shutdown.png" height="30" />
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import router from "../router";
export default {
  name: "Navbar",
  props: {
    activeTab: String,
  },
  data() {
    return {
      profileImage: "../temp_profile_img.png",
      userType: "",
    };
  },
  created() {
    this.getUserAPI()
      .then(() => console.log("Deu certo!"))
      .catch((err) => (this.warning = `${err}`));
  },
  mounted() {
    this.userType = this.getUserType.role;
    if (this.getUserType.role == "psychologist") {
      this.profileImage = this.getLoggedPsychologist[0].avatar;
    } else if (this.getUserType.role == "child") {
      this.profileImage = this.getLoggedChild[0].avatar;
    } else if (this.getUserType.role == "tutor") {
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
      "getUserInfo",
    ]),
    ...mapActions(["getUserAPI"]),
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
