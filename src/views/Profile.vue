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
                :src="getUserInfo.child_avatar"
                :alt="getUserInfo.child_avatar"
                height="100"
                class="my-3"
                style="border-radius: 50%"
              />
              <h2 class="fontAsap" style="font-size: 35px">
                {{ getUserInfo.name }}
              </h2>
            </div>

            <div
              class="d-flex flex-column mx-3 mt-3 mb-3 fontNunito"
              style="font-size: 20px"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div class="colorBlue">Nome de utilizador:</div>
                <div>{{ getUserInfo.username }}</div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mt-3"
              >
                <div class="colorBlue">E-mail:</div>
                <div>{{ getUserInfo.email }}</div>
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
                <div>{{ getUserInfo.birthDate }}</div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mt-3"
                v-if="getUserType == 'psychologist'"
              >
                <div class="colorBlue">Contacto:</div>
                <div>{{ getLoggedPsychologist[0].contact }}</div>
              </div>
            </div>

            <div class="d-flex flex-column align-items-center my-4">
              <button
                class="fontNunito bgOrange btnsPlay my-2 changeProfileImg"
                v-on:click="changeProfileImg()"
              >
                Atualizar foto de perfil
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
                  <img src="../assets/password.png" width="70px" />
                  <h2 class="fontAsap mt-2" style="font-size: 30px">
                    Atualizar password
                  </h2>
                </div>
                <div class="my-3">
                  <form
                    @submit.prevent="changePassword"
                    class="d-flex flex-column align-items-center"
                  >
                    <input
                      class="my-2 col-9 newPassword"
                      v-model="form.newPassword"
                      type="password"
                      placeholder="Nova"
                    />
                    <input
                      class="my-2 col-9 confirmPassword"
                      v-model="form.confirmPassword"
                      type="password"
                      placeholder="Confirmar"
                    />
                    <input
                      type="submit"
                      class="
                        fontNunito
                        bgOrange
                        btnsPlay
                        mt-4
                        mb-2
                        changePassword
                      "
                      value="Atualizar password"
                    />
                  </form>
                </div>
              </div>
            </div>

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
              v-if="getUserInfo.role != 'child'"
            >
            <img src="../assets/link.png" width="70px"  class="mt-3"/>
              <h2 class="fontAsap mt-2" style="font-size: 30px">
                Vincular Conta
              </h2>

              <form
                class="d-flex flex-column align-items-center"
                @submit.prevent="vincular"
              >
                <input
                  class="my-2 col-10 txtConnect"
                  type="text"
                  placeholder="Username da Criança"
                  v-model="childCode"
                />
                <input
                  type="submit"
                  class="fontNunito bgOrange btnsPlay mt-4 mb-2 connect"
                  value="Vincular"
                />
              </form>
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
            Alteração de password
          </div>
          <button v-on:click="closeModal()" class="fontNunito closebtn mt-2">
            <img src="../assets/btn_close.png" width="40" />
          </button>
        </div>
        <div
          class="d-flex flex-column align-items-center mt-3"
          v-if="errorpw === false"
        >
          <img src="../assets/like.svg" width="100" />
          <div class="fontNunito mt-3" style="font-size: 20px">
            A tua password foi alterada com sucesso!
          </div>

          <router-link :to="{ name: 'Landing' }"
            ><button class="btnsPlay mt-4 bgBlue">
              Voltar à página inicial
            </button></router-link
          >
        </div>
        <div
          class="d-flex flex-column align-items-center mt-3"
          v-if="errorpw === true"
        >
          <img src="../assets/error.png" width="100" />
          <div class="fontNunito mt-3" style="font-size: 20px">
            As passwords não coincidem... Tenta novamente!
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

import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Landing",
  data() {
    return {
      warning: "",
      name: "Profile",
      userGender: "",
      userType: "",
      contact: "",
      profileImage: "",
      form: {
        newPassword: "",
        confirmPassword: "",
      },
      setImg: {
        userType: "",
        newImg: "",
      },
        childCode: "",

      errorpw: false,
    };
  },
  components: {
    Navbar,
    Footer,
  },

  methods: {
    changePassword() {
      if (this.form.newPassword != this.form.confirmPassword) {
        this.errorpw = true;
        this.$bvModal.show("modal-1");
      } else {
        this.updatePasswordAPI({ password: this.form.newPassword })
          .then(() => {
            this.errorpw = false;
            this.$bvModal.show("modal-1");
          })
          .catch((err) => (this.warning = `${err}`));
      }
    },
    closeModal() {
      this.$bvModal.hide("modal-1");
    },

    changeProfileImg() {
      this.setImg.newImg = prompt("Insira nova imagem de perfil");
      this.updateAvatarAPI({ child_avatar:this.setImg.newImg })
      .then(() => location.reload())
      .catch((err) => (this.warning = `${err}`));
    },

    changeContact() {
      this.contact = prompt("Insira novo contacto");
      this.$store.commit("SET_NEW_CONTACT", this.contact);
    },

    vincular() {
      let childUsername = this.childCode;
      if (confirm(`Quer vincular a conta com a criança ${childUsername}?`)) {
        if (childUsername == 'ola') {
          alert("A sua conta já está vinculada à criança desejada.");
        } else {
          this.addBindingAPI(childUsername)
            .then(() => {
              console.log('tudo ok')
          })
          .catch((err) => (this.warning = `${err}`));
        }
      }
    },

    ...mapMutations(["SET_NEW_PROFILE_IMG", "SET_NEW_CONNECTION"]),
    ...mapActions(["getUserAPI", "updatePasswordAPI", "updateAvatarAPI", "addBindingAPI"]),
  },
  created() {
    this.getUserAPI()
      .then(() => console.log("Deu certo!"))
      .catch((err) => (this.warning = `${err}`));
    //console.log(this.getUserInfo);
    if (this.getUserInfo.child_gender == "M") {
      this.userGender = "Masculino";
    } else {
      this.userGender = "Feminino";
    }

    if (this.getUserInfo.role == "child") {
      this.userType = "Criança";
    } else if (this.getUserInfo.role == "tutor") {
      this.userType = "Tutor";
    } else if (this.getUserInfo.role == "psychologist") {
      this.userType = "Psicólogo";
    }
  },
  computed: {
    ...mapGetters([
      "getUsername",
      "getLoggedUserInformations",
      "getUserType",
      "getEmail",
      "getLoggedPsychologist",
      "getLoggedChild",
      "getLoggedTutor",
      "getLoggedChildCode",
      "getUsernameFromCode",
      "checkSameConnection",
      "getUserInfo",
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
