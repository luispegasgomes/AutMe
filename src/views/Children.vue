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
      </div>

      <section class="d-flex flex-wrap bgWhite listbox mx-5 mt-4">
        <article
          class="
            card
            my-3
            mx-4
            col-4
            d-flex
            flex-column
            align-items-center
            rounded
          "
          v-for="(connection, index) in getBindings"
          :key="index"
        >
          <img
            class="mt-4"
            height="100"
            style="border-radius: 50%"
            :src="connection.avatar"
            :alt="connection.avatar"
            v-on:click="selectedChild = connection.child"
          />
          <h4 class="mt-2">{{ connection.child }}</h4>
          <button
          id="seefichatecnica"
            class="button2 mt-3 bgOrange"
            v-on:click="clickChild((selectedChild = connection))"
          >
            Ver Ficha Técnica
          </button>
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

import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Children",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      selectedChild: "",
    };
  },
  created() {
    this.loadBindings("");
  },
  methods: {
    ...mapMutations(["SET_CLICKED_CHILD"]),
    ...mapActions(["loadBindings"]),

    clickChild() {
      this.SET_CLICKED_CHILD(this.selectedChild);
      this.$router.push({ name: "FichaTecnica" });
    },
  },
  computed: {
    ...mapGetters([
      "getUsername",
      "getChildAvatar",
      "getUserClick",
      "getBindings",
    ]),
  },
};
</script>

<style scoped>
.children {
  height: 100vh;
}

.button1 {
  border-color: var(--blue);
  border-width: 3px;
  border-radius: 6px;
  width: 200px;
}
.button2 {
  border: none;
  border-radius: 6px;
  width: 150px;
  height: 30px;
  font-size: 15px;
  color: white;
}

.listbox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 12px 12px 0px var(--orange);
  height: 25rem;
  width: 60%;
  overflow-y: scroll;
}

.card {
  width: 13rem;
  height: 15rem;
  text-align: center;
  font-size: 50%;
  border-color: var(--blue);
  border-width: 8px;

}
</style>
