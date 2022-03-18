<template>
  <div class="psychologistList bgGrey d-flex flex-column">
    <Navbar activeTab="Psicólogos" />

    <main class="mt-5">
      <div class="window row mt-5">
        <section class="list col-3 p-5">
          <div>
            <select class="mb-5 sltCities" aria-label="Default select example">
              <option selected>Seleciona a cidade</option>
              <option
                v-for="(city, index) in cities"
                :key="index"
                :value="city"
              >
                {{ city }}
              </option>
            </select>
            <button class="btnCities fontNunito bgOrange colorDarkBlue">
              Filtrar
            </button>
          </div>
          <div style="overflow-y: scroll" class="listpsy d-flex flex-column">
            <button
              v-for="(psychologist, index) in getPsychologists"
              :key="index"
              :value="psychologist"
              v-on:click="
                selected = getPsychologistsByUsername(psychologist.username)
              "
              :class="{
                btn: true,
                fontAsap: true,
                'my-2': true,
                selectedBtn:
                  selected == getPsychologistsByUsername(psychologist.username),
              }"
            >
              {{ psychologist.username }}
            </button>
          </div>
        </section>

        <section
          class="description col-6 d-flex flex-column bgWhite"
          v-if="selected"
        >
          <div class="d-flex align-items-center justify-content-between mb-3">
            <img
              :src="selected.avatar"
              :alt="selected.avatar"
              style="width: 8%"
            />
            <h1 class="text-center">{{ selected.name }}</h1>
            <img
              src="../assets/fivestars.png"
              alt="Avatar"
              style="width: 15%"
            />
          </div>
          <!--PSYCOLOGIST INFORMATIONS-->
          <div
            class="d-flex flex-column align-items-center mt-5 mb-3 fontNunito"
          >
            <h3>
              Email:
              <span class="colorOrange" style="font-weight: bold">
                {{ mail }}
              </span>
            </h3>
            <h3>
              Contacto: <span class="colorBlue"> {{ selected.contact }}</span>
            </h3>
            <h3 class="mt-3">
              Localização da clínica:
              <span class="colorOrange" style="font-weight: bold">
                {{ selected.locationAdress }}
              </span>
            </h3>
            <h3>
              Código Postal:
              <span class="colorBlue"> {{ selected.postalCode }}</span>
            </h3>
          </div>

          <div class="d-flex flex-column align-items-center mt-5">
            <button v-b-modal.modal-1 class="fontNunito bgOrange orangebtns">
              Marcar consulta
            </button>
          </div>
        </section>
        <section
          v-else
          class="description col-6 d-flex flex-column align-items-center"
        >
          <div
            class="text-center fontNunito mt-3"
            style="font-size: 30px; text-align: center"
          >
            Olá! Do lado esquerdo da página dispõe de uma lista nos nossos
            psicólogos que poderão ajudar a sua criança a ultrapassar todas as
            dificuldades. Selecione um dos psicólogos para marcar uma consulta!
          </div>
          <img
            src="../assets/psychologist_ico.png"
            width="160px"
            class="mt-5"
          />
        </section>
      </div>
    </main>

    <div class="fixed-bottom">
      <Footer />
    </div>
    <!--ADD NEW DIARY-->
    <b-modal
      id="modal-1"
      title="Marcar primeira consulta"
      hide-header
      hide-footer
    >
      <div class="d-flex flex-column">
        <div class="d-flex align-items-center justify-content-between">
          <div class="fontBarlow" style="font-size: 30px">
            Marcar uma consulta
          </div>
          <button v-on:click="closeModal()" class="fontNunito closebtn mt-2">
            <img src="../assets/btn_close.png" width="40" />
          </button>
        </div>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-4" style="font-size: 20px">
            Nome do psicólogo: {{ selected.name }}
          </div>
          <div style="font-size: 20px">
            Clínica: {{ selected.locationAdress }}
          </div>
        </div>

        <form
          @submit.prevent="addAppointment"
          class="d-flex flex-column align-items-center mt-3"
        >
          <select id="txtTitle" v-model="form.childUsername" class="col-4">
            <option value="" disabled>Selecionar criança</option>
            <option
              v-for="(name, index) in getConnections"
              :key="index"
              :value="name.childUser"
            >
              {{ name.childUser }}
            </option>
          </select>
          <input
            type="date"
            v-model="form.date"
            id="txtTitle"
            class="mt-3"
            required
          />

          <div
            class="mt-5 fontNunito colorOrange"
            style="font-size: 25px; font-weight: bold"
          >
            Horários disponíveis
          </div>
          <div class="schedules mt-4">
            <button
              class="mx-2 hour"
              v-for="(schedule, index) in schedules"
              :key="index"
              v-on:click="setNewSchedule(schedule)"
              :disabled="checkSchedule(schedule)"
              style="text-align: center; width: 60px"
            >
              {{ schedule }}
            </button>
          </div>
          <input
            type="submit"
            class="fontNunito bgOrange orangebtns mt-4 col-8"
            style="width: 120px; height: 40px; font-size: 22px"
            value="Confirmar"
          />
        </form>
      </div>
    </b-modal>
    <!--ADD NEW DIARY-->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "PsychologistList",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      cities: [
        "Porto",
        "Lisboa",
        "Faro",
        "Vila Real",
        "Aveiro",
        "Guarda",
        "Portalegre",
      ],
      citySelected: "",
      selected: "",
      mail: "",
      form: {
        username: "",
        date: "",
        hour: "",
        locationAdress: "",
        childUsername: "",
        avatar: "",
      },
      schedules: [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
      ],
    };
  },
  updated() {
    this.mail = this.getLoggedPsychologistEmail.filter(
      (d) => d.username === this.selected.username
    )[0].email;
  },
  computed: {
    ...mapGetters([
      "getUsername",
      "getPsychologists",
      "getPsychologistsByUsername",
      "getLoggedPsychologistEmail",
      "getConnections",
    ]),
  },
  methods: {
    ...mapMutations(["SET_NEW_APPOINTMENT", "CONNECT_PSYCHOLOGIST"]),

    setSelected(text) {
      this.selected = text;
      alert(text);
    },
    closeModal() {
      this.$bvModal.hide("modal-1");
      console.log(this.selected.username);
    },
    setNewSchedule(schedule) {
      this.form.hour = schedule;
    },
    addAppointment() {
      // Submit form data
      this.form.username = this.selected.username;
      this.form.avatar = this.selected.avatar;
      this.SET_NEW_APPOINTMENT(this.form);
      this.$bvModal.hide("modal-1");
      const item = {
        childUser: this.form.childUsername,
        tutorUser: this.getUsername,
        psychologistUser: this.selected.username,
      };
      this.CONNECT_PSYCHOLOGIST(item);
    },
    checkSchedule(schedule) {
      if (this.form.hour === schedule) {
        return true;
      }
    },
  },
};
</script>

<style scoped>
button:disabled {
  background-color: var(--orange);
  color: black;
}
.closebtn {
  border: none;
  border-radius: 8px;
  font-size: 25px;
  color: white;
  text-align: center;
  height: 50px;
  width: 50px;
}
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

.btnCities {
  border: 2px solid var(--blue);
  border-radius: 100px;
  font-size: 20px;
  width: 35%;
  text-align: center;
  height: 40px;
  margin-left: 30px;
}

.sltCities {
  height: 40px;
  border-radius: 100px;
}

.description {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 12px 12px 0px var(--orange);
  margin-left: 200px;
  height: 500px;
}
input {
  height: 40px;
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  box-shadow: 0px 4px 4px 0px #00000040;
}

.schedules {
  font-size: 20px;
  border: 3px solid #ec9a29;
  border-radius: 11px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
}
.hour {
  border: 3px solid var(--blue);
  text-align: center;
  background: white;
  margin-top: 12px;
  margin-bottom: 10px;
}

.listpsy {
  border: 3px solid var(--orange);
  height: 375px;
}
</style>
