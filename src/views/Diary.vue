<template>
  <div class="landing bgGrey d-flex flex-column justify-content-between">
    <Navbar />
    <main>
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="d-flex align-items-center">
          <img src="../assets/diary.png" height="70" />
          <p class="fontAsap mx-2 colorDarkBlue" style="font-size: 30px">
            O meu diário
          </p>
        </div>

        <div
          class="
            profileBox2
            d-flex
            flex-column
            align-items-center
            justify-content-center
            mt-5
          "
        >
          <div class="d-flex">
            <div class="mt-3" style="position: relative; top: -50px">
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
            <p class="d-flex flex-column align-items-end mx-1">
              {{ info.date }}
            </p>
          </div>
          <!--DIARY INFORMATIONS-->
        </div>
      </div>
          <div>
      <b-modal id="modal-1" title="Conta-nos o teu dia!">
        <form @sumbit.prevent="addDiary">
          <input type="submit">
        </form>
      </b-modal>
    </div>
    </main>
    <Footer />
    <!--ADD NEW DIARY-->

    <!--ADD NEW DIARY-->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "Landing",
  components: {
    Navbar,
    Footer,
  },
  methods: {
    addDiary() {
      console.log('da');
      alert('ok')
    },
  },
  computed: {
    ...mapGetters(["getLoggedUserInformations", "getUsernameDiary"]),
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

.landing {
  height: 100vh;
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
  margin-left: 20px;
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
