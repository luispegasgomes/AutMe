<template>
  <div class="landing bgGrey d-flex flex-column justify-content-between">
    <Navbar />
    <main>
      <div class="d-flex align-items-center justify-content-center">
        <section class="d-flex flex-column mx-5">
          <p style="position: relative; top: 80px; left: 17px; font-size: 18px">
            Altera aqui as tuas informações <br />
            pessoais!
          </p>
          <img src="../assets/balao_mensagem.svg" width="300px" />
          <img src="../assets/gato_feliz.svg" width="220px" />
        </section>

        <div class="d-flex align-items-center">
          <!--PROFILE INFORMATIONS-->
          <div class="profileBox2 d-flex flex-column mx-5 mb-3">
            <div class="d-flex flex-column align-items-center">
              <img
                :src="getLoggedUserInformations.avatar"
                :alt="getLoggedUserInformations.avatar"
                height="100"
                class="my-3"
                style="border-radius: 50%"
              />
              <h2 class="fontAsap" style="font-size: 35px">
                {{ getLoggedUserInformations.name }}
              </h2>
            </div>

            <div
              class="d-flex flex-column mx-3 mt-3 mb-3 fontNunito"
              style="font-size: 20px"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div class="colorBlue">Nome de utilizador:</div>
                <div>{{ getLoggedUserInformations.username }}</div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mt-3"
              >
                <div class="colorBlue">E-mail:</div>
                <div>{{ getEmail }}</div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mt-3"
              >
                <div class="colorBlue">Tipo de utilizador:</div>
                <div>{{ userType }}</div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mt-3"
              >
                <div class="colorBlue">Género:</div>
                <div>{{ userGender }}</div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mt-3"
              >
                <div class="colorBlue">Data de nacimento:</div>
                <div>{{ getLoggedUserInformations.birth }}</div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mt-3"
                v-if="getUserType != 'child'"
              >
                <div class="colorBlue">Contacto:</div>
                <div>{{ getLoggedUserInformations.contact }}</div>
              </div>
            </div>

            <div class="d-flex flex-column align-items-center my-4">
              <button class="fontNunito bgOrange btnsPlay my-2">
                Atualizar foto de perfil
              </button>
              <button
                v-if="getUserType != 'child'"
                class="fontNunito bgBlue btnsPlay my-2"
                v-on:click="changeContact()"
              >
                Alterar contacto
              </button>
            </div>
          </div>
          <!--PROFILE INFORMATIONS-->

          <!--2 columns-->
          <section class="mx-5">
            <!--CHANGE PASSWORD-->
            <div class="profileBox d-flex flex-column align-items-center mb-3">
              <div class="d-flex flex-column align-items-center">
                <div class="d-flex flex-column align-items-center mt-2">
                  <h2 class="fontAsap" style="font-size: 30px">
                    Atualizar password
                  </h2>
                </div>
                <div class="my-3">
                  <form
                    @submit.prevent="changePassword"
                    class="d-flex flex-column align-items-center"
                  >
                    <input
                      class="my-2 col-9"
                      type="password"
                      v-model="form.currentPassword"
                      placeholder="Atual"
                    />
                    <input
                      class="my-2 col-9"
                      v-model="form.newPassword"
                      type="password"
                      placeholder="Nova"
                    />
                    <input
                      class="my-2 col-9"
                      v-model="form.confirmPassword"
                      type="password"
                      placeholder="Confirmar"
                    />
                    <input
                      type="submit"
                      class="fontNunito bgOrange btnsPlay mt-4 mb-2"
                      value="Atualizar password"
                    />
                  </form>
                </div>
              </div>
            </div>

            <!--LINK ACCOUNT-->
            <div
              class="
                profileBox
                d-flex
                col-7
                flex-column
                align-items-center
                my-3
                mt-5
              "
            >
              <div class="d-flex flex-column align-items-center">
                <div class="d-flex flex-column align-items-center">
                  <h2 class="fontAsap mt-2" style="font-size: 30px">
                    Vincular Conta
                  </h2>
                </div>
                <div class="my-3">
                  <form class="d-flex flex-column align-items-center">
                    <input
                      class="my-2 col-9"
                      type="password"
                      placeholder="Código"
                    />
                    <input
                      type="submit"
                      class="fontNunito bgOrange btnsPlay mt-4 mb-2"
                      value="Vincular"
                    />
                  </form>
                </div>
              </div>
            </div>
            <!--LINK ACCOUNT-->
          </section>
        </div>
      </div>
    </main>
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
            Ateração de password
          </div>
          <button v-on:click="closeModal()" class="fontNunito closebtn mt-2">
            <img src="../assets/btn_close.png" width="40" />
          </button>
        </div>
        <div class="d-flex flex-column align-items-center mt-3">
          <img src="../assets/like.svg" width="100" />
          <div class="fonNunito mt-3" style="font-size: 20px">
            A tua password foi alterada com sucesso!
          </div>

          <router-link :to="{ name: 'Landing' }"
            ><button class="btnsPlay mt-4 bgBlue">
              Voltar à página inicial
            </button></router-link
          >
        </div>
      </div>
    </b-modal>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Landing",
  data() {
    return {
      name: "Profile",
      userGender: "",
      userType: "",
      contact: "",
      form: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    changePassword() {
      this.$store.commit("SET_NEW_PASSWORD", this.form.newPassword);
      this.$bvModal.show("modal-1");
      /*if (
        this.getLoggedUserInformations.password == this.form.currentPassword
      ) {
        console.log("muito bem");
        this.$store.commit("SET_NEW_PASSWORD", this.form.newPassword);
        alert("Password alterada!");
        this.$bvModal.show("modal-1")
      } else {
        alert("As passwords não coicidem!");
      }*/
    },
    closeModal() {
      this.$bvModal.hide("modal-1");
    },

    changeContact () {
      this.contact = prompt('Insira novo contacto')
      //this.$store.commit("SET_NEW_CONTACT", this.contact);
    },

    ...mapMutations(["SET_NEW_PASSWORD"]),
  },
  created() {
    if (this.getLoggedUserInformations.gender == 'M') {
      this.userGender = 'Masculino'
    } else {
      this.userGender = 'Feminino'
    }

    if (this.getUserType == "child") {
      this.userType = "Criança"
    } else if (this.getUserType == "tutor") {
      this.userType = "Tutor"
    } else if (this.getUserType == "psychologist") {
      this.userType = "Psicólogo"
    }
    
  },
  computed: {
    ...mapGetters([
      "getUsername",
      "getLoggedUserInformations",
      "getUserType",
      "getEmail",
    ]),
  },
};
</script>

<style scoped>
.landing {
  height: 100vh;
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
  width: 500px;
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

form input {
  height: 40px;
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  margin-left: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
}
</style>
