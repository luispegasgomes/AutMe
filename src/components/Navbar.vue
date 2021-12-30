<template>
  <nav class="d-flex justify-content-between align-items-end px-3 py-2">
    <img src="../assets/logo.svg" alt="AutMe logo" height="50" />

    <div class="d-flex align-items-end colorDarkBlue" style="font-size: 20px">
      <ul class="navbar-nav fontBarlow weightLight d-flex flex-row">
        <li class="nav-item mx-2">
          <router-link :to="{ name: '' }" class="nav-link text-uppercase"
            >Emoções</router-link
          >
        </li>
        <li class="nav-item mx-2" v-if="true">
          <router-link :to="{ name: 'Diary' }" class="nav-link text-uppercase"
            >Diário</router-link
          >
        </li>
        <li class="nav-item mx-2" v-if="true">
          <router-link
            :to="{ name: 'Children' }"
            class="nav-link text-uppercase"
            >Crianças</router-link
          >
        </li>
        <li class="nav-item mx-2" v-if="true">
          <router-link :to="{ name: '' }" class="nav-link text-uppercase"
            >Pedidos</router-link
          >
        </li>
        <li class="nav-item mx-2" v-if="true">
          <router-link :to="{ name: '' }" class="nav-link text-uppercase"
            >Agenda</router-link
          >
        </li>
        <li class="nav-item mx-2" v-if="true">
          <router-link :to="{ name: '' }" class="nav-link text-uppercase"
            >Psicólogos</router-link
          >
        </li>
        <li class="nav-item mx-2" v-if="true">
          <router-link :to="{ name: '' }" class="nav-link text-uppercase"
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
};
</script>

<style scoped>
li a,
li a:hover {
  color: black;
  padding: 0;
}
</style>
