<template>
  <div class="diary bgGrey d-flex flex-column justify-content-between">
    <Navbar activeTab="Diário" />
    <main>
      <div class="d-flex flex-column align-items-center mb-5">
        <div class="d-flex align-items-center mt-5">
          <img src="../assets/diary.png" height="70" />
          <p class="fontAsap mx-2 colorDarkBlue" style="font-size: 30px">
            O meu diário
          </p>
        </div>

        <div class="diaryBox d-flex flex-column align-items-center mt-5">
          <div class="d-flex">
            <div class="mt-1 mb-2">
              <img src="../assets/Menina_Diario.svg" height="150" />
              <button v-b-modal.modal-1 class="btnsPlay bgOrange mx-5">
                Conta-nos o teu dia!
              </button>
              <input type="date" />
            </div>
          </div>

          <!--DIARY INFORMATIONS-->
          <div
            class="d-flex flex-column adddiaryBox col-11 mb-4"
            v-for="(info, index) in getUsernameDiary"
            :key="index"
          >
            <div
              class="fontAsap colorDarkBlue mt-1 mx-1"
              style="font-size: 20px"
            >
              {{ info.title }}
            </div>
            <div class="text mx-1">
              {{ info.description }}
            </div>
            <div class="d-flex flex-column align-items-end mx-1">
              {{ info.date }}
            </div>
          </div>
          <!--DIARY INFORMATIONS-->
        </div>
      </div>
      <div>
        <!--ADD NEW DIARY-->
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
                Conta-nos o teu dia!
              </div>
              <button v-on:click="closeModal()" class="fontNunito closebtn mt-2"><img src="../assets/btn_close.png" width="40" /></button>
            </div>

            <form
              @submit.prevent="addDiary"
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
                placeholder="Descrição do teu dia"
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
        <!--ADD NEW DIARY-->
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Diary",
  data() {
    return {
      form: {
        username: "",
        title: "",
        description: "",
        date: "",
      },
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    addDiary() {
      this.form.username = this.getUsername;
      console.log(this.getUsernameDiary);
      this.SET_NEW_DIARY(this.form);
    },
    closeModal() {
      this.$bvModal.hide("modal-1")
    },
    ...mapMutations(["SET_NEW_DIARY"]),
  },
  computed: {
    ...mapGetters(["getUsername", "getUsernameDiary"]),
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
.closebtn {
  border: none;
  border-radius: 8px;
  font-size: 25px;
  color: white;
  text-align: center;
  height: 50px;
  width: 50px;
}
.diary {
  min-height: 100vh;
  position: relative;
}

.adddiaryBox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  border: 3px solid var(--blue);
  background: white;
  height: 170px;
}

.diaryBox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 6px 6px 0px var(--orange);
  background: white;
  width: 900px;
  min-height: 24rem;
}

.imgs {
  width: 180px;
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

input {
  height: 40px;
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  box-shadow: 0px 4px 4px 0px #00000040;
}
.text {
  padding: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
}
</style>
