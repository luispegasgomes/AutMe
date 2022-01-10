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
          class="description col-6 d-flex flex-column"
          v-if="selected == 'Filipa Castro'"
        >
          <div class="d-flex align-items-center justify-content-between mb-3">
            <img
              src="../assets/temp_profile_img.png"
              alt="Avatar"
              style="width: 8%"
            />
            <h1>Filipa Castro</h1>
            <img
              src="../assets/fivestars.png"
              alt="Avatar"
              style="width: 20%"
            />
          </div>
          <!--PSYCOLOGIST INFORMATIONS-->
          <div class="d-flex flex-column align-items-center mt-5 mb-3">
            <h3>Email: filipa_manuela@hotmail.com</h3>
            <h3>Contacto: 910000111</h3>
            <h3>Localização da clínica: Moreira, Maia</h3>
            <h3>Código Postal: 0000-000</h3>
          </div>

          <div class="d-flex flex-column align-items-center mt-5">
            <button v-b-modal.modal-1 class="fontNunito bgOrange orangebtns">
              Marcar consulta
            </button>
          </div>
        </section>
      </div>
    </main>

    <Footer />
    <!--ADD NEW DIARY-->
    <b-modal
      id="modal-1"
      title="Marcar primeira consulta"
      ok-title="Confirmar"
      @ok="addDiary"
      style="text-align: center"
    >
      <div class="d-flex flex-column align-items-center">
        <div class="fontBarlow" style="font-size: 30px">
          Marcar primeira consulta
        </div>
        <div class="mt-4">Nome do psicólogo: Filipa Castro</div>
        <div>Clínica: Moreira da Maia</div>
        <input type="date" id="txtTitle" class="col-8 mt-5" />
        <div class="form-check d-flex align-items-center mt-5">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
            style="width: 23px; height: 23px"
          />
          <label class="form-check-label mx-2" for="flexCheckChecked">
            Manhã
          </label>
          <input
            class="form-check-input mx-2"
            type="checkbox"
            id="flexCheckChecked"
            style="width: 23px; height: 23px"
          />
          <label class="form-check-label" for="flexCheckChecked"> Tarde </label>
        </div>
        <div class="mt-5 schedules">
          <div class="d-flex flex-column align-items-center">
            Horários disponíveis
          </div>
          <div class="d-flex mt-3">
            <div class="mx-3 hour">09:00</div>
            <div class="mx-3 hour">09:30</div>
            <div class="mx-3 hour">10:00</div>
            <div class="mx-3 hour">10:30</div>
          </div>
          <div class="d-flex mt-3 mb-3">
            <div class="mx-3 hour">11:00</div>
            <div class="mx-3 hour">11:30</div>
            <div class="mx-3 hour">12:00</div>
            <div class="mx-3 hour">12:30</div>
          </div>
        </div>
        <button
          class="fontNunito bgOrange orangebtns mt-4 col-8"
          style="width: 120px; height: 40px; font-size: 22px"
        >
          Confirmar
        </button>
      </div>
    </b-modal>
    <!--ADD NEW DIARY-->
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
.orangebtns {
  border: none;
  border-radius: 8px;
  font-size: 25px;
  color: white;
  text-align: center;
  height: 50px;
  width: 200px;
}

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
input {
  height: 40px;
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  box-shadow: 0px 4px 4px 0px #00000040;
}

.schedules{
  font-size: 20px;
  border: 3px solid #EC9A29;
  border-radius: 11px;
}
.hour{
  border: 3px solid var(--blue);
  width: 80px;
  text-align: center;
}
</style>
