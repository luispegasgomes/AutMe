<template>
  <div class="children bgGrey d-flex flex-column justify-content-between">
    <Navbar activeTab="Crianças" />

    <main class="h-75">
      <button type="button" class="mb-5 mx-5 px-2">Ordenar por nome</button>

      <div class="d-flex justify-content-center">
        <section class="col-5 d-flex flex-column align-items-center">
          <div class="listbox row row-cols-4">
            <article
              class="card my-3 mx-4 col-4 d-flex flex-column align-items-center"
              v-for="(connection, index) in getConnections"
              :key="index"
            >
              <!-- getChildAvatar(connection.childUser) -->
              <img
                class="card-img pt-4"
                style="width: 50%"
                :src="getChildAvatar(connection.childUser).avatar"
                :alt="connection.childUser"
              />
              <h4 class="pt-4">{{ connection.childUser }}</h4>
            </article>
          </div>
        </section>
      </div>
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

.listbox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 12px 12px 0px var(--orange);
  width: 170%;
  height: 30rem;
  overflow-y: scroll;
}

.title {
  font-size: 300%;
}

.card {
  width: 13rem;
  height: 12rem;
  text-align: center;
  font-size: 50%;
}

button {
  background: var(--white);
  border-color: var(--blue);
  border-width: 3px;
  border-radius: 10px;
}
button:hover {
  background: var(--blue);
  color: var(--white);
}
</style>
