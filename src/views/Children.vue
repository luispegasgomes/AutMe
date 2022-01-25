<template>
  <div class="children bgGrey d-flex flex-column">
    <Navbar activeTab="Crianças" />
    <main class="my-3 d-flex flex-column align-items-center">
      <div class="d-flex flex-column align-items-center mt-3">
        <div class="d-flex align-items-center">
          <img src="../assets/children.png" height="70" />
          <p class="fontAsap mx-2 my-1 colorDarkBlue" style="font-size: 32px">
            As minhas crianças
          </p>
        </div>

        <button class="button1 fontAsap mt-4">Ordenar por nome</button>
      </div>
      

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
            v-on:click="selectedChild = connection.childUser"
          />
          <h4 class="mt-4">{{ connection.childUser }}</h4>
          <button class="button2" v-on:click="clickChild(selectedChild = connection.childUser)">Ver mais</button>
        </article>
      </section>
    </main>
        <div class="fixed-bottom">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Children",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      selectedChild: "",
    }
  },
  methods: {
    ...mapMutations(["SET_CLICKED_CHILD"]),
    clickChild() {
      this.SET_CLICKED_CHILD(this.selectedChild)
      this.$router.push({ name: "FichaTecnica" });
    }
  },
  computed: {
    ...mapGetters(["getUsername", "getConnections", "getChildAvatar", "getUserClick"]),
  },
};
</script>

<style scoped>
.children {
  height: 100vh;
}

.button1 {
  background: var(--white);
  border-color: var(--blue);
  border-width: 3px;
  border-radius: 6px;
  width: 200px;
}
.button2 {
  background: var(--white);
  border-color: var(--blue);
  border-radius: 6px;
  width: 130px;
  font-size: 15px;
  color: var(--blue);
}

.listbox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 12px 12px 0px var(--orange);
  height: 35rem;
  width: 60%;
  overflow-y: scroll;
}

.card {
  width: 13rem;
  height: 14rem;
  text-align: center;
  font-size: 50%;
  border-color: var(--blue);
  border-width: 3px;
}
</style>
