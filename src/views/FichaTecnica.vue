<template>
  <div class="landing bgGrey d-flex flex-column">
    <Navbar />
    <main>
      <div class="d-flex align-items-center mx-5 mt-3">
        <img
          :src="getUserClick.avatar"
          :alt="getUserClick.avatar"
          width="100px"
          class="mx-4"
          height="100"
          style="border-radius: 50%"
        />
        <p class="mt-3 fontAsap colorDarkBlue" style="font-size: 38px">
          {{ getUserClick.child }}
        </p>
      </div>
      <div class="d-flex flex-column align-items-center mt-3">
        <div class="d-flex">
          <button
            v-on:click="selected = 'Consultas'"
            id="consultas"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              'mx-3': true,
              selectedBtn: selected == 'Consultas',
            }"
            style="font-size: 25px"
          >
            <img src="../assets/consultas_ico.png" width="45px" />
            Consultas
          </button>
          <span style="font-size: 40px">|</span>
          <button
            v-on:click="selected = 'Progresso'"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              'mx-3': true,
              selectedBtn: selected == 'Progresso',
            }"
            style="font-size: 25px"
          >
            <img src="../assets/progresso_ico.png" width="45px" />
            Progresso
          </button>
          <span style="font-size: 40px">|</span>
          <button
            v-on:click="selected = 'Notas'"
            id="notes"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              'mx-3': true,
              selectedBtn: selected == 'Notas',
            }"
            style="font-size: 25px"
          >
            <img src="../assets/notas_ico.png" width="45px" />
            Notas
          </button>
        </div>
      </div>
    </main>

    <div class="d-flex flex-column justify-content-between align-items-center">
      <div v-if="selected === ''" class="profileBox2">
        <div class="d-flex flex-column align-items-center mt-3">
          <p
            class="
              fontAsap
              colorBlue
              mt-3
              mx-4
              d-flex
              flex-column
              justify-content-between
              align-items-center
            "
            style="font-size: 25px; text-align: center"
          >
            <img src="../assets/consultas_ico.png" width="50px" /> Clique em
            "Consultas" e terá acesso a todas as consultas previstas para a
            criança selecionada, bem como a respetiva data e hora e o psicólogo
            responsável.
          </p>
          <p
            class="
              fontAsap
              colorBlue
              mt-3
              mx-4
              d-flex
              flex-column
              justify-content-between
              align-items-center
            "
            style="font-size: 25px; text-align: center"
          >
            <img src="../assets/progresso_ico.png" width="50px" /> Clique em
            "Progresso" para poder ver todo o processo da criança mediante o
            diagonóstico que foi realizado pelo encarregado de educação da
            criança.
          </p>
          <p
            class="
              fontAsap
              colorBlue
              mt-3
              mx-4
              d-flex
              flex-column
              justify-content-between
              align-items-center
            "
            style="font-size: 25px; text-align: center"
          >
            <img src="../assets/notas_ico.png" width="50px" /> Clique em "Notas"
            para ver todas as notas que foram adicionadas pelo psicólogo
            responsável pela sua criança.
          </p>
        </div>
      </div>
      <!--CONSULTAS-->
      <div v-if="selected === 'Consultas'" class="profileBox2">
        <div
          class="d-flex align-items-center justify-content-between mt-3"
          v-for="(info, index) in getAppointments"
          :key="index"
        >
          <p
            class="mx-3 fontNunito colorBlue"
            style="font-size: 30px; text-align: center"
          >
            <img src="../assets/relogio_ico.png" width="45px" /> {{ info.time }}
          </p>
          <p class="fontAsap colorDarkBlue col-2" style="font-size: 30px">
            {{ info.date }}
          </p>
          <p class="mx-3 fontAsap colorDarkBlue" style="font-size: 30px">
            {{ info.psychologist }}
            <img
              :src="info.avatar"
              :alt="info.avatar"
              height="40px"
              width="40px"
              style="border-radius: 100%"
            />
          </p>
        </div>
        <div
          class="d-flex flex-column align-items-center mt-4"
          v-if="getUserType.role == 'psychologist'"
        >
          <button
            class="bgBlue"
            style="
              color: white;
              border: none;
              border-radius: 6px;
              width: 230px;
              font-size: 20px;
            "
            v-on:click="openModalAddNewAppointment()"
          >
            Marcar nova consulta
          </button>
        </div>
      </div>
      <!--CONSULTAS-->
      <!--PROGRESSO-->
      <div
        v-if="selected === 'Progresso'"
        class="d-flex flex-column align-items-center mt-3"
      >
        <img src="../assets/excavator.png" width="250" />
        <p
          class="mx-5 fontAsap colorBlue col-6 mt-4"
          style="font-size: 35px; text-align: center"
        >
          Esta página esta em desenvolvimento! Terás de aguardar por novas
          versões para estar disponível.
        </p>
      </div>
      <!--PROGRESSO-->

      <!--NOTAS-->
      <div v-if="selected === 'Notas'" class="notes">
        <div
          class="
            d-flex
            flex-column
            align-items-center
            justify-content-center
            mt-3
            cardNotes
          "
        >
          <div>
            <button
              class="bgOrange fontAsap"
              style="
                border: none;
                border-radius: 50px;
                width: 100px;
                color: white;
                height: 100px;
                font-size: 50px;
              "
              v-on:click="openModalAddNewNote"
            >
              +
            </button>
          </div>
        </div>
        <div
          class="d-flex flex-column justify-content-between mt-3 cardNotes"
          v-for="(info, index) in getNotes"
          :key="index"
        >
          <p class="text-left mt-2 mx-2" style="font-size: 23px">
            {{ info.title }}
          </p>
          <p class="text-left mx-2" style="font-size: 18px">
            {{ info.description }}
          </p>
          <p class="text-end mx-2" style="font-size: 19px">{{ info.date }}</p>
        </div>
      </div>
      <!--NOTAS-->
    </div>
    <div class="fixed-bottom mt-5">
      <Footer />
    </div>
    <!--ADD NEW NOTE-->
    <b-modal
      id="modal-1"
      title="Conta-nos o teu dia!"
      ok-title="Confirmar"
      hide-header
      hide-footer
    >
      <div class="d-flex flex-column">
        <div class="d-flex align-items-center justify-content-between">
          <div class="fontBarlow" style="font-size: 30px">
            Adicionar nova nota
          </div>
          <button v-on:click="closeModal()" class="fontNunito closebtn mt-2" id="addnote">
            <img src="../assets/btn_close.png" width="40" />
          </button>
        </div>

        <form
          @submit.prevent="addNewNote"
          class="d-flex flex-column align-items-center"
        >
          <input
            type="date"
            id="txtDate"
            v-model="form.date"
            placeholder="Data"
            class="mx-2 mt-5"
            style="width: 220px"
          />
          <input
            type="text"
            id="txtTitle"
            v-model="form.title"
            placeholder="Título"
            style="width: 280px"
            class="mt-4"
          />

          <input
            type="text"
            id="txtDescription"
            v-model="form.description"
            class="my-3 mt-4"
            placeholder="O que pretende dizer?"
            style="height: 200px; width: 440px"
          />
          <input
            type="submit"
            class="fontNunito bgOrange orangebtns mt-2 col-8"
            style="width: 120px; height: 40px; font-size: 22px"
            value="Confirmar"
          />
        </form>
      </div>
    </b-modal>

    <b-modal
      id="modal-2"
      title="Marcar primeira consulta"
      hide-header
      hide-footer
    >
      <div class="d-flex flex-column">
        <div class="d-flex align-items-center justify-content-between">
          <div class="fontBarlow" style="font-size: 30px">
            Marcar uma consulta
          </div>
          <button v-on:click="closeModal2()" class="fontNunito closebtn mt-2">
            <img src="../assets/btn_close.png" width="40" />
          </button>
        </div>

        <form
          @submit.prevent="addNewAppointment"
          class="d-flex flex-column align-items-center mt-3"
        >
          <input
            type="date"
            v-model="form2.date"
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
              class="mx-2 time"
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
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Imita",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      warning: "",
      selected: "",
      form: {
        allUserUsername: "",
        date: "",
        title: "",
        description: "",
      },
      form2: {
        allUserUsername: "",
        psychologist: "",
        date: "",
        time: "",
        city: "",
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
  methods: {
    ...mapActions(["loadAppointments", "loadNotes", "addNoteAPI", "getUserAPI", "addAppointmentAPI"]),

    addNewNote() {
      this.form.allUserUsername = this.getUserClick.child;
      this.addNoteAPI(this.form)
        .then(() => location.reload())
        .catch((err) => (this.warning = `${err}`));
      this.$bvModal.hide("modal-1");
    },
    addNewAppointment() {
      this.form2.allUserUsername = this.getUserClick.child;
      this.form2.psychologist = this.getUserInfo.username 
      this.form2.city = 'Rio Tinto';
      this.form2.avatar = this.getUserInfo.child_avatar;
      // Call the action to add appointment
      this.addAppointmentAPI(this.form2)
        .then(() => location.reload())
        .catch((err) => (this.warning = `${err}`));
      this.$bvModal.hide("modal-1");
    },
    openModalAddNewNote() {
      this.$bvModal.show("modal-1");
    },
    openModalAddNewAppointment() {
      this.$bvModal.show("modal-2");
    },
    setSelected(text) {
      this.selected = text;
    },

    closeModal() {
      this.$bvModal.hide("modal-1");
    },
    closeModal2() {
      this.$bvModal.hide("modal-2");
    },
    setNewSchedule(schedule) {
      this.form2.time = schedule;
    },
    checkSchedule(schedule) {
      if (this.form2.time === schedule) {
        return true;
      }
    },
  },
  computed: {
    ...mapGetters([
      "getUserClick",
      "getAppointments",
      "getNotes",
      "getUserType",
      "getUserInfo",
    ]),
  },
  created() {
    this.getUserAPI()
      .then(() => console.log("Deu certo!"))
      .catch((err) => (this.warning = `${err}`));
    this.loadAppointments(this.getUserClick.child);
    this.loadNotes(this.getUserClick.child);

  },
};
</script>

<style scoped>
.notes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
}

.cardNotes {
  border: 6px solid var(--blue);
  border-radius: 10px;
  color: var(--darkBlue);
  background: white;
  width: 400px;
  height: 250px;
  margin: 10px;
}

.selectedBtn {
  background: var(--orange);
  color: var(--black);
}

.landing {
  height: 100vh;
}

.arrow {
  background-color: #0f8b8d;
  color: white;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
}

.profileBox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 6px 6px 0px var(--orange);
  background: white;
  width: 350px;
}
.profileBox2 {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 6px 6px 0px var(--orange);
  background: white;
  width: 1000px;
  height: 500px;
}

.imgs {
  border-radius: 30px;
}

.btnsPlay {
  border: none;
  border-radius: 8px;
  width: 220px;
  height: 34px;
  font-size: 20px;
  color: white;
}

form input {
  height: 40px;
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  margin-left: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
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

.schedules {
  font-size: 20px;
  border: 3px solid #ec9a29;
  border-radius: 11px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
}
.time {
  border: 3px solid var(--blue);
  text-align: center;
  background: white;
  margin-top: 12px;
  margin-bottom: 10px;
}
</style>
