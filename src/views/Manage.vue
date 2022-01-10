<!-- pedir ajuda com a parte das cores da tab -->
<template>
  <div class="manage bgGrey d-flex flex-column justify-content-between">
    <Navbar activeTab="Gestão" />
    <main class="h-75 mx-5">
      <BTabs v-model="tabIndex">
        <BTab
          title="Gerir Utilizadores"
          :title-item-class="'h3 fontBarlow bgGrey colorBlack'"
          :title-link-class="'h3 fontBarlow bgGrey colorBlack'"
        >
          <div class="d-flex justify-content-around my-3">
            <section class="col-4 py-3">
              <h2 class="fontBarlow weightLight text-center">
                Novo administrador
              </h2>

              <form
                class="d-flex flex-column align-items-center my-4"
                @submit.prevent="addAdmin"
              >
                <input
                  type="text"
                  placeholder="Nome"
                  class="mb-3"
                  v-model="newAdmin.userName"
                  required
                />
                <input
                  type="text"
                  placeholder="Apelido"
                  class="mb-3"
                  v-model="newAdmin.userSurname"
                  required
                />
                <input
                  type="text"
                  placeholder="Nome de utilizador"
                  class="mb-3"
                  v-model="newAdmin.username"
                  required
                />
                <input
                  type="text"
                  placeholder="Email"
                  class="mb-3"
                  v-model="newAdmin.userEmail"
                  required
                />
                <input
                  type="password"
                  placeholder="Palavra-passe"
                  class="mb-3"
                  v-model="newAdmin.userPassword"
                  required
                />

                <BAlert :show="addError" variant="danger" class="mx-5"
                  >O nome de utilizador ou email já existem!</BAlert
                >
                <BAlert :show="addSuccess" variant="success" class="mx-5"
                  >O utilizador foi adicionado!</BAlert
                >
                <button class="col-4 btn btn-primary">Confirmar</button>
              </form>
            </section>

            <section class="col-4 py-3">
              <h2 class="fontBarlow weightLight text-center">
                Tornar administrador
              </h2>

              <form
                class="d-flex flex-column align-items-center my-5"
                @submit.prevent="changeToAdmin"
              >
                <input
                  type="text"
                  placeholder="Nome de utilizador"
                  class="mb-5"
                  v-model="turnAdmin.username"
                  required
                />
                <BAlert :show="turnError" variant="danger" class="mx-5"
                  >O nome de utilizador não existe!</BAlert
                >
                <BAlert :show="turnSucess" variant="success" class="mx-5"
                  >O utilizador foi adicionado!</BAlert
                >
                <button class="col-4 btn btn-primary">Confirmar</button>
              </form>
            </section>
          </div>
        </BTab>
        <BTab
          title="Gerir Emoções"
          :title-item-class="'h2 fontBarlow bgGrey colorBlack'"
          :title-link-class="'h2 fontBarlow bgGrey colorBlack'"
        >
          <button v-b-modal.modalAdd class="btn my-3" id="addEmotion">
            Adicionar Emoção
          </button>
          <section id="emotions" class="my-3 py-4 px-3">
            <article v-for="(emotion, index) in getEmotions" :key="index">
              <div
                class="d-flex align-items-center justify-content-between mb-3"
              >
                <div class="d-flex align-items-center">
                  <img :src="emotion.imgUrl" :alt="emotion.name" width="100" />
                  <div class="px-2">
                    <h2 class="fontNunito weightBold">{{ emotion.name }}</h2>
                    <span class="fontBarlow"
                      >Total de
                      {{ getImagesFromEmotion(emotion.name).length }}
                      imagens</span
                    >
                  </div>
                </div>

                <div class="btnsEmotions mx-2">
                  <button
                    v-b-modal.modalSeeImg
                    @click="emotionSelected = emotion.name"
                  >
                    Ver Imagens
                  </button>
                  <button
                    v-b-modal.modalAddImg
                    @click="emotionSelected = emotion.name"
                  >
                    Adicionar Imagem
                  </button>
                  <button
                    v-b-modal.modalRemImg
                    @click="emotionSelected = emotion.name"
                  >
                    Remover Imagem
                  </button>
                  <button @click="REMOVE_EMOTION(emotion.name)">
                    Remover Emoção
                  </button>
                </div>
              </div>
            </article>
          </section>
        </BTab>
      </BTabs>

      <!-- MODALS -->
      <b-modal
        id="modalAdd"
        title="Nova Emoção"
        ok-title="Adicionar"
        @ok="addEmotion"
      >
        <form class="d-flex flex-column">
          <p class="fontAsap weightBold" style="font-size: 1.5rem">Emoção:</p>
          <input
            type="text"
            id="txtTitle"
            v-model="addEmotionForm.name"
            placeholder="Nome da emoção"
          />
          <input
            type="url"
            id="txtDescription"
            v-model="addEmotionForm.emotionUrl"
            class="my-3"
            placeholder="Link da imagem"
          />

          <div v-if="addEmotionForm.emotionUrl">
            <p class="fontAsap weightBold" style="font-size: 1.5rem">
              Demonstração:
            </p>
            <img :src="addEmotionForm.emotionUrl" width="200px" />
          </div>

          <hr />

          <input
            type="url"
            id="txtDescription"
            v-model="addEmotionForm.imgUrl"
            class="my-3"
            placeholder="Foto"
          />

          <div v-if="addEmotionForm.imgUrl">
            <p class="fontAsap weightBold" style="font-size: 1.5rem">
              Demonstração:
            </p>
            <img :src="addEmotionForm.imgUrl" width="200px" />
          </div>
        </form>
      </b-modal>

      <b-modal id="modalSeeImg" title="Ver Imagens"> </b-modal>
      <b-modal id="modalAddImg" title="Adicionar Imagem"> </b-modal>
      <b-modal id="modalRemImg" title="Remover Imagem"> </b-modal>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { BTabs, BTab, BAlert } from "bootstrap-vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Manage",
  components: {
    Navbar,
    Footer,
    BTabs,
    BTab,
    BAlert,
  },
  data() {
    return {
      tabIndex: 0,
      addError: false,
      addSuccess: false,
      turnError: false,
      turnSucess: false,
      newAdmin: {
        userName: "",
        userSurname: "",
        username: "",
        userEmail: "",
        userPassword: "",
        userType: "admin",
      },
      turnAdmin: { username: "" },
      addEmotionForm: {
        name: "",
        emotionUrl: "",
        imgUrl: "",
      },
      emotionSelected: "",
    };
  },
  methods: {
    addAdmin() {
      this.addError = false;
      this.addSuccess = false;
      if (this.isUnvailable(this.newAdmin.userName, this.newAdmin.userEmail)) {
        this.addError = true;
      } else {
        this.CREATE_ACCOUNT(this.newAdmin);
        this.addSuccess = true;
        this.newAdmin = {
          userName: "",
          userSurname: "",
          username: "",
          userEmail: "",
          userPassword: "",
          userType: "admin",
        };
      }
    },
    changeToAdmin() {
      this.turnError = false;
      this.turnSucess = false;
      if (this.userExists(this.turnAdmin.username)) {
        this.UPDATE_ACCOUNT(this.turnAdmin.username);
        this.turnSucess = true;
      } else {
        this.turnError = true;
      }
    },
    addEmotion() {
      if (
        this.addEmotionForm.name &&
        this.addEmotionForm.imgUrl &&
        this.isEmotionUnavailable(this.addEmotionForm.name)
      ) {
        this.ADD_EMOTION({
          name: this.addEmotionForm.name,
          imgUrl: this.addEmotionForm.emotionUrl,
        });
        this.ADD_IMAGE({
          emotion: this.addEmotionForm.name,
          imgUrl: this.addEmotionForm.imgUrl,
        });
      }
    },
    ...mapMutations([
      "CREATE_ACCOUNT",
      "UPDATE_ACCOUNT",
      "ADD_EMOTION",
      "ADD_IMAGE",
      "REMOVE_EMOTION",
    ]),
  },
  computed: {
    ...mapGetters([
      "isUnvailable",
      "userExists",
      "isEmotionUnavailable",
      "getEmotions",
      "getImagesFromEmotion",
    ]),
  },
};
</script>

<style scoped>
.manage {
  height: 100vh;
}

section {
  border: 6px solid var(--orange);
  border-radius: 10px;
  box-shadow: 6px 6px 0px var(--orange);
  background: white;
  height: 30rem;
}

section#emotions {
  border: 6px solid var(--orange);
  border-radius: 10px;
  box-shadow: 6px 6px 0px var(--orange);
  background: white;
  height: 20rem;
  overflow-y: scroll;
}

form input {
  height: 36px;
  width: 15rem;
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  margin-left: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
}

form button,
form button:hover {
  background: var(--orange);
  color: var(--white);
  border: none;
}

button#addEmotion {
  background: var(--blue);
  color: var(--white);
}

.btnsEmotions button {
  background: var(--orange);
  color: var(--white);
  padding: 0 4px;
  margin: 0 4px;
  outline: none;
  border: none;
}
</style>
