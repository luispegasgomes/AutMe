<template>
  <div class="landing bgGrey d-flex flex-column justify-content-between">
    <Navbar />
    <main>
      <div class="d-flex align-items-center mt-2 mx-4">
        <img src="../assets/temp_profile_img.png" width="60px"/>
        <p class="mt-3 mx-3" style="font-size:30px">Pedro Silva</p>

      </div>
      <div class="d-flex flex-column align-items-center mb-3">
        <div class="d-flex">
          <button
            v-on:click="selected = 'Consultas'"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'Consultas',
            }"
            style="font-size:25px"
          >
            Consultas
          </button>
          <button
            v-on:click="selected = 'Progresso'"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'Progresso',
            }"
            style="font-size:25px"
          >
            Progresso
          </button>
          <button
            v-on:click="selected = 'Notas'"
            :class="{
              btn: true,
              fontAsap: true,
              'my-2': true,
              selectedBtn: selected == 'Notas',
            }"
            style="font-size:25px"
          >
            Notas
          </button>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="mx-5 mt-4 p-5">
          <img
            src="../assets/meninaimita.svg"
            width="200px"
            style="position: relative; top: 140px"
          />
        </div>

        <div v-if="selected === 'Consultas'" class="profileBox2">
          <div class="d-flex align-items-center justify-content-between mt-3">
            <p
              class="mx-3 fontNunito colorBlue"
              style="font-size: 25px; text-align: center"
            >
              10:30
            </p>
            <p class="fontAsap colorDarkBlue col-1" style="font-size: 25px">
              19/03/2022
            </p>
            <p class="mx-3 fontAsap colorDarkBlue" style="font-size: 25px">
              Filipa Castro
            </p>
          </div>
        </div>
        <div class="mx-5 mt-5 p-5">
          <img
            src="../assets/meninoimita.svg"
            width="200px"
            style="position: relative; top: 140px"
          />
        </div>
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
  name: "Imita",
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
    finishGame() {
      this.$bvModal.show("modal-1");
    },
    previousStep() {
      this.step -= 1;
      this.activeTip = false;
    },
    nextStep() {
      this.step += 1;
      this.activeTip = false;
    },

    setSelected(text) {
      this.selected = text;
    },

    showHint() {
      this.newTip = this.getEmotionsForImita[this.step].hint;
      this.activeTip = true;
    },
    startGameMethod() {
      this.startGame = true;
      this.getEmotionsForImita = this.getEmotionsForImita.sort(
        () => Math.random() - 0.5
      );
    },
    showDoubt() {
      this.doubt = true;
    },
    closeModal() {
      this.$bvModal.hide("modal-1");
    },
  },
  computed: {
    ...mapGetters(["getEmotionsForImita"]),
  },
};
</script>

<style scoped>
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
  height: 600px;
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

.hint {
  position: absolute;
  top: 300px;
  left: 230px;
}

.hintbtn {
  border: none;
  border-radius: 20px;
  font-size: 25px;
  color: white;
  text-align: center;
}
</style>
