<template>
  <div class="landing bgGrey d-flex flex-column">
    <Navbar activeTab="Diário" />
    <main>
      <div class="d-flex flex-column align-items-center mb-5">
        <div class="d-flex align-items-center mt-5">
          <img src="../assets/diary.png" height="70" />
          <p class="fontAsap mx-2 colorDarkBlue" style="font-size: 30px">
            O meu diário
          </p>
        </div>

        <div
          class="profileBox2 d-flex flex-column align-items-center justify-content-center mt-5"
        >
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
            class="d-flex flex-column diaryBox col-11 mb-4"
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
            <div class="d-flex flex-column align-items-end  mx-1">
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
          @ok="addDiary"
        >
          <form class="d-flex flex-column align-items-center">
            <input
              type="text"
              id="txtTitle"
              v-model="form.title"
              placeholder="Título"
              class="col-10"
            />
            <input
              type="text"
              id="txtDescription"
              v-model="form.description"
              class="my-3 col-10"
              placeholder="Descrição do teu dia"
              style="height: 200px"
            />
            <input
              type="text"
              id="txtDate"
              v-model="form.date"
              placeholder="Data"
              class="col-10"
            />
          </form>
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
      this.SET_NEW_DIARY(this.form);
    },
    ...mapMutations(["SET_NEW_DIARY"]),
  },
  computed: {
    ...mapGetters(["getUsername", "getUsernameDiary"]),
  },
};
</script>

<style scoped>
.diaryBox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  border: 3px solid var(--blue);
  background: white;
  height: 170px;
}

.profileBox2 {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 6px 6px 0px var(--orange);
  background: white;
  width: 900px;
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
