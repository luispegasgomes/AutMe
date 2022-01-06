<template>
  <div
    class="psychologistList bgGrey d-flex flex-column justify-content-between"
  >
    <Navbar activeTab="Psicólogos" />

    <main>
      <div class="window row">
        <section class="list col-2 p-5">
          <button
            v-on:click="setSelected('Filipa Castro')"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'Filipa Castro',
            }"
          >
            Filipa Castro
          </button>
          <button
            v-on:click="setSelected('Dário Pereira')"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'Dário Pereira',
            }"
          >
            Dário Pereira
          </button>
          <button
            v-on:click="setSelected('José Maria')"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'José Maria',
            }"
          >
            José Maria
          </button>
          <button
            v-on:click="setSelected('Raquel Silva')"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'Raquel Silva',
            }"
          >
            Raquel Silva
          </button>
          <button
            v-on:click="setSelected('Daniel Medeiros')"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'Daniel Medeiros',
            }"
          >
            Daniel Medeiros
          </button>
        </section>

        <section
          class="description col-6 d-flex"
          v-if="selected == 'Filipa Castro'"
        >
          <div>
            <div class="d-flex flex-row justify-content-between">
              <img
                class="card-img m-4"
                src="../assets/facebook.png"
                alt="Avatar"
                style="width: 10%; height: 10%"
              />
              <h1 class="m-5">Filipina Castro</h1>
              <p>rating</p>
            </div>
            <h3>Email: filipa_manuela@hotmail.com</h3>
            <h3>Contacto: 910000111</h3>
            <h3>Localização da clínica: Moreira, Maia</h3>
            <h3>Código Postal: 0000-000</h3>
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

/* import { mapGetters } from "vuex"; */
export default {
  name: "PsychologistList",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    setSelected(text) {
      this.selected = text;
    },
  },
};
</script>

<style scoped>
.psychologistList {
  height: 100vh;
}

.window {
  width: 100%;
}

.list {
  margin-left: 100px;
}

section button {
  font-size: 28px;
  text-align: start;
}

section .selectedBtn {
  background: var(--blue);
  color: var(--white);
}

.description {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 12px 12px 0px var(--orange);
  margin-left: 200px;
}

h3 {
  text-align: center;
}

h1 {
  text-align: center;
}
</style>
