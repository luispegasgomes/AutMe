<!-- pedir ajuda com a parte das cores da tab -->
<template>
  <div class="manage bgGrey d-flex flex-column justify-content-between">
    <Navbar />
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
          Tab
        </BTab>
      </BTabs>
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
    ...mapMutations(["CREATE_ACCOUNT", "UPDATE_ACCOUNT"]),
  },
  computed: {
    ...mapGetters(["isUnvailable", "userExists"]),
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
</style>
