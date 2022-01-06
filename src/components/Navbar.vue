<template>
  <nav class="d-flex justify-content-between align-items-end px-3 py-2">
    <router-link :to="{ name: 'Landing' }" class="nav-link text-uppercase"
      ><img src="../assets/logo.svg" alt="AutMe logo" height="50"
    /></router-link>

    <div class="d-flex align-items-end colorDarkBlue" style="font-size: 20px">
      <ul class="navbar-nav fontBarlow weightLight d-flex flex-row">
        <li
          :class="{
            'nav-item': true,
            'mx-2': true,
            selected: activeTab == 'Emoções',
          }"
        >
          <router-link
            :to="{ name: 'EmotionsList' }"
            class="nav-link text-uppercase"
            >Emoções</router-link
          >
        </li>
        <li
          v-if="true"
          :class="{
            'nav-item': true,
            'mx-2': true,
            selected: activeTab == 'Diário',
          }"
        >
          <router-link :to="{ name: 'Diary' }" class="nav-link text-uppercase"
            >Diário</router-link
          >
        </li>
        <li
          v-if="true"
          :class="{
            'nav-item': true,
            'mx-2': true,
            selected: activeTab == 'Crianças',
          }"
        >
          <router-link
            :to="{ name: 'Children' }"
            class="nav-link text-uppercase"
            >Crianças</router-link
          >
        </li>
        <li
          v-if="true"
          :class="{
            'nav-item': true,
            'mx-2': true,
            selected: activeTab == 'Pedidos',
          }"
        >
          <router-link :to="{ name: '' }" class="nav-link text-uppercase"
            >Pedidos</router-link
          >
        </li>
        <li
          v-if="true"
          :class="{
            'nav-item': true,
            'mx-2': true,
            selected: activeTab == 'Agenda',
          }"
        >
          <router-link :to="{ name: '' }" class="nav-link text-uppercase"
            >Agenda</router-link
          >
        </li>
        <li
          v-if="true"
          :class="{
            'nav-item': true,
            'mx-2': true,
            selected: activeTab == 'Psicólogos',
          }"
        >
          <router-link
            :to="{ name: 'PsychologistList' }"
            class="nav-link text-uppercase"
            >Psicólogos</router-link
          >
        </li>
        <li
          v-if="true"
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
    <router-link :to="{ name: 'Profile' }"
      ><img src="../assets/temp_profile_img.png" height="50"
    /></router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    activeTab: String,
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
