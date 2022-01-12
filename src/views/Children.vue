<template>
  <div class="children bgGrey d-flex flex-column justify-content-between">
    <Navbar activeTab="Crianças" />
    <main class="my-3 d-flex flex-column align-items-center">
      <div class="d-flex align-items-center">
        <img src="../assets/children.png" height="70" />
        <p class="fontAsap mx-2 my-1 colorDarkBlue" style="font-size: 32px">
          As minhas crianças
        </p>
      </div>
      <button class="mx-5 w-25 py-1 align-self-start">Ordenar por nome</button>

      <section class="d-flex flex-wrap bgWhite listbox mx-5 mt-4">
        <article
          class="card my-3 mx-4 col-4 d-flex flex-column align-items-center rounded"
          v-for="(connection, index) in getConnections"
          :key="index"
        >
          <img
            class="card-img pt-4"
            style="width: 50%"
            :src="getChildAvatar(connection.childUser)"
            :alt="connection.childUser"
          />
          <h4 class="mt-4">{{ connection.childUser }}</h4>
        </article>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import { mapGetters } from "vuex";
export default {
  name: "Children",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapGetters(["getUsername", "getConnections", "getChildAvatar"]),
  },
};
</script>

<style scoped>
.children {
  height: 100vh;
}

button {
  background: var(--white);
  border-color: var(--blue);
  border-width: 3px;
  border-radius: 10px;
}

.listbox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 12px 12px 0px var(--orange);
  height: 25rem;
  width: 75%;
  overflow-y: scroll;
}

.card {
  width: 13rem;
  height: 12rem;
  text-align: center;
  font-size: 50%;
}
</style>
