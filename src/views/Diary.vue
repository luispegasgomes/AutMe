<template>
  <div class="diary bgGrey d-flex flex-column">
    <Navbar activeTab="Diário" />
    <main>
      <div class="d-flex flex-column align-items-center mb-5">
        <div class="d-flex align-items-center mt-1">
          <img src="../assets/diary.png" height="70" />
          <p class="fontAsap mx-2 colorDarkBlue" style="font-size: 30px">
            O meu diário
          </p>
        </div>

        <div class="diaryBox d-flex flex-column align-items-center mt-5 mb-5">
          <div class="d-flex">
            <div class="mt-1 mb-2">
              <img src="../assets/Menina_Diario.svg" height="150" />
              <button
                v-b-modal.modal-1
                class="btnsPlay bgOrange mx-5"
                id="btnDiary"
              >
                Conta-nos o teu dia!
              </button>
              <input type="date" />
            </div>
          </div>
          <!--DIARY WITHOUT INFORMATIONS-->
          <div
            class="
              d-flex
              flex-column
              justify-content-between
              col-11
              mb-4
            "
            v-if="getDiaries == 0"
          >
          
            <div
              class="text juntify-content-center fontAsap mt-2 colorBlue"
              style="text-align: center; font-size: 25px; font-weight: bold;"
            >
            <div class="d-flex flex-column align-items-center">
            <img src="../assets/hello.png" width="80px" class="text-align:center">
              <p class="mt-3 mb-3">Olá amiguinho!</p> 
            </div>

            </div>
            <div
              class="text mb-3 juntify-content-center fontAsap"
              style="text-align: center; font-size: 20px"
            >
              Como tu caíste aqui de paraquedas, ainda não escreveste nenhum
              diário!
            </div>
            <div
              class="text juntify-content-center fontAsap mb-2 colorOrange"
              style="text-align: center; font-size: 20px"
            >
              Clica em "Conta-nos o teu dia" para poderes fazer o registo do teu dia!
            </div>
          </div>
          <!--DIARY WITHOUT INFORMATIONS-->
          <!--DIARY INFORMATIONS-->
          <div
            class="
              d-flex
              flex-column
              justify-content-between
              adddiaryBox
              col-11
              mb-4
            "
            v-for="(info, index) in getDiaries[0]"
            :key="index"
          >
            <div
              class="fontAsap colorDarkBlue mt-1 mx-1 d-flex justify-content-between align-items-end"
              style="font-size: 20px"
            >
              {{ info.title }}
              <button v-on:click="deleteDiary(info.id)" class="deletebtn"><img src="../assets/delete.png" width="20px"></button>
      
            </div>
            <div class="text mx-1">
              {{ info.description }}
            </div>
            <div class="d-flex flex-column align-items-end mx-2 mb-1">
              
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
                Adicionar novo diário
              </div>
              <button
                v-on:click="closeModal()"
                class="fontNunito closebtn mt-2"
              >
                <img src="../assets/btn_close.png" width="40" />
              </button>
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
    <div class="fixed-bottom">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Diary",
  data() {
    return {
      warning:"",
      form: {
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
  computed: {
    ...mapGetters(["getUsername", "getDiaries", "getUserType"]),
  },
  methods: {
    ...mapActions(["loadDiaries", "addDiaryAPI", "removeDiaryAPI"]),
    addDiary() {
      this.addDiaryAPI(this.form)
          .then(() => location.reload())
          .catch((err) => (this.warning = `${err}`));
    },
    deleteDiary(id){
      // id: id do diário que pretendo apagar
      alert('Diário apagado com sucesso!')
      this.removeDiaryAPI(id)
         .then(()=>{location.reload()})
         .catch((err)=>alert(err))
    },

    closeModal() {
      this.$bvModal.hide("modal-1");
    },
  },

  created() {
    this.loadDiaries("");
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
.deletebtn {
  border: none;
  border-radius: 8px;
  font-size: 25px;
  color: white;
  width: 30px;
  text-align: center;
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
