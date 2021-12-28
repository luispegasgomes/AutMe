<template>
  <div class="register">
    <div
      v-if="step === 0"
      class="content p-5 d-flex flex-column align-items-center"
    >
      <img src="../assets/logo.svg" alt="AutMe logo" width="20%" class="mb-5" />

      <form class="bgWhite py-3 px-5 my-4">
        <h1 class="fontAsap weightBold">
          Vamos começar a criar a tua conta... <br />
        </h1>

        <p>O que tu és?</p>

        <div class="m-4">
          <label for="sltUserType">
            <b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <select id="sltUserType" v-model="form.userType" required>
            <option value="" disabled selected>
              Selecione um tipo de utilizador
            </option>
            <option value="child">Criança</option>
            <option value="tutor">Tutor</option>
            <option value="psychologist">Psicólogo</option>
          </select>
        </div>

        <BAlert :show="whiteFieldsError" variant="danger" class="mx-5"
          >Tem campos por preencher</BAlert
        >

        <button
          type="button"
          class="my-4 px-5 btn btn-primary"
          v-on:click.prevent="checkStep0"
        >
          Continuar
        </button>
      </form>
    </div>
    <div
      v-if="step === 1"
      class="content p-5 d-flex flex-column align-items-center"
    >
      <img src="../assets/logo.svg" alt="AutMe logo" width="20%" class="mb-5" />

      <form class="bgWhite py-3 px-5 my-4">
        <h1 class="fontAsap weightBold">
          Vamos começar a criar a tua conta... <br />
        </h1>

        <p>Quem és tu?</p>

        <div class="m-4">
          <label for="txtRegisterName"
            ><b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <input
            type="text"
            id="txtRegisterName"
            placeholder="Nome"
            v-model="form.userName"
            required
          />
        </div>
        <div class="m-4">
          <label for="txtRegisterSurname"
            ><b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <input
            type="text"
            id="txtRegisterSurname"
            placeholder="Apelido"
            v-model="form.userSurname"
            required
          />
        </div>
        <div class="mx-4">
          <label for="txtRegisterBirthdate"
            ><b-icon-calendar-date scale="2.2"></b-icon-calendar-date>
          </label>
          <input
            type="date"
            id="txtRegisterBirthdate"
            v-model="form.userDate"
            required
          />
        </div>
        <div class="m-4">
          <label for="sltGender">
            <b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <select id="sltGender" v-model="form.userGender" required>
            <option value="" selected disabled>Selecione o seu género</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>

        <BAlert :show="whiteFieldsError" variant="danger" class="mx-5"
          >Tem campos por preencher</BAlert
        >

        <button
          type="button"
          class="my-4 px-5 btn btn-primary"
          v-on:click.prevent="checkStep1"
        >
          Continuar
        </button>
      </form>
    </div>
    <div
      v-if="step === 2"
      class="content p-5 d-flex flex-column align-items-center"
    >
      <img src="../assets/logo.svg" alt="AutMe logo" width="20%" class="mb-5" />

      <form class="bgWhite py-3 px-5 my-4">
        <h1 class="fontAsap weightBold">
          Vamos começar a criar a tua conta... <br />
        </h1>

        <p>Quem és tu para nós?</p>

        <div class="m-4">
          <label for="txtRegisterUsername"
            ><b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <input
            type="text"
            id="txtRegisterUsername"
            placeholder="Nome de utilizador"
            v-model="form.username"
            required
          />
        </div>
        <div class="m-4">
          <label for="txtRegisterEmail"
            ><b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <input
            type="email"
            id="txtRegisterEmail"
            placeholder="Email"
            v-model="form.userEmail"
            required
          />
        </div>
        <div class="m-4">
          <label for="txtRegisterPassword"
            ><b-icon-lock-fill scale="2.2"></b-icon-lock-fill
          ></label>
          <input
            type="password"
            id="txtRegisterPassword"
            placeholder="Password"
            v-model="form.userPassword"
            required
          />
        </div>
        <div class="m-4">
          <label for="txtRegisterConfirmPassword"
            ><b-icon-lock-fill scale="2.2"></b-icon-lock-fill
          ></label>
          <input
            type="password"
            id="txtRegisterConfirmPassword"
            placeholder="Confirmar Password"
            v-model="form.confirmPassword"
            required
          />
        </div>

        <BAlert :show="whiteFieldsError" variant="danger" class="mx-5"
          >Tem campos por preencher</BAlert
        >

        <BAlert :show="existsAuthError" variant="danger" class="mx-5"
          >O nome de utilizador ou email já existem</BAlert
        >

        <BAlert :show="differentPasswordError" variant="danger" class="mx-5"
          >As passwords são diferentes</BAlert
        >

        <button
          type="button"
          class="my-4 px-5 btn btn-primary"
          v-on:click.prevent="checkStep2"
        >
          Continuar
        </button>
      </form>
    </div>
    <div
      v-if="step === 3"
      class="content p-5 d-flex flex-column align-items-center"
    >
      <img src="../assets/logo.svg" alt="AutMe logo" width="20%" class="mb-5" />

      <form class="bgWhite py-3 px-5 my-4">
        <h1 class="fontAsap weightBold">
          Vamos começar a criar a tua conta... <br />
        </h1>

        <p>Precisamos do teu contacto!</p>

        <div class="m-4">
          <label for="txtRegisterContact"
            ><b-icon-telephone-fill scale="2.2"></b-icon-telephone-fill
          ></label>
          <input
            type="text"
            id="txtRegisterContact"
            placeholder="Contacto"
            v-model="form.userPhone"
            required
          />
        </div>
        <div v-if="form.userType === 'psychologist'">
          <div class="m-4">
            <label for="txtRegisterLocation"
              ><b-icon-geo-alt-fill scale="2.2"></b-icon-geo-alt-fill
            ></label>
            <input
              type="text"
              id="txtRegisterLocation"
              placeholder="Localização"
              v-model="form.userLocation"
              required
            />
          </div>
          <div class="m-4">
            <label for="txtRegisterPostalCode"
              ><b-icon-geo-alt-fill scale="2.2"></b-icon-geo-alt-fill
            ></label>
            <input
              type="text"
              id="txtRegisterPostalCode"
              placeholder="Código Postal"
              v-model="form.userPostalCode"
              required
            />
          </div>
          <div class="m-4">
            <label for="txtRegisterCity"
              ><b-icon-geo-alt-fill scale="2.2"></b-icon-geo-alt-fill
            ></label>
            <input
              type="text"
              id="txtRegisterCity"
              placeholder="Cidade"
              v-model="form.userCity"
              required
            />
          </div>
        </div>

        <BAlert :show="whiteFieldsError" variant="danger" class="mx-5"
          >Tem campos por preencher</BAlert
        >

        <button
          type="button"
          class="my-4 px-5 btn btn-primary"
          v-on:click.prevent="checkStep3"
        >
          Criar Conta
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  BIconPersonFill,
  BIconCalendarDate,
  BIconLockFill,
  BIconTelephoneFill,
  BIconGeoAltFill,
  BAlert,
} from "bootstrap-vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  components: {
    BIconPersonFill,
    BIconCalendarDate,
    BIconLockFill,
    BIconTelephoneFill,
    BIconGeoAltFill,
    BAlert,
  },
  data() {
    return {
      step: 0,
      whiteFieldsError: false,
      existsAuthError: false,
      differentPasswordError: false,
      form: {
        userType: "",
        userName: "",
        userSurname: "",
        userDate: "",
        userGender: "",
        username: "",
        userEmail: "",
        userPassword: "",
        confirmPassword: "",
        userPhone: "",
        userLocation: "",
        userPostalCode: "",
        userCity: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isUnvailable"]),
  },
  methods: {
    checkStep0() {
      if (this.form.userType) {
        this.whiteFieldsError = false;
        this.nextStep();
      } else {
        this.whiteFieldsError = true;
      }
    },
    checkStep1() {
      if (
        this.form.userName &&
        this.form.userSurname &&
        this.form.userDate &&
        this.form.userGender
      ) {
        this.whiteFieldsError = false;
        this.nextStep();
      } else {
        this.whiteFieldsError = true;
      }
    },
    checkStep2() {
      this.whiteFieldsError = false;
      this.existsAuthError = false;
      this.differentPasswordError = false;
      if (
        this.form.username &&
        this.form.userEmail &&
        this.form.userPassword &&
        this.form.confirmPassword
      ) {
        this.whiteFieldsError = false;
        if (this.isUnvailable(this.form.username, this.form.userEmail)) {
          this.existsAuthError = true;
        } else if (this.form.userPassword !== this.form.confirmPassword) {
          this.differentPasswordError = true;
        } else {
          if (this.form.userType == "child") {
            this.CREATE_ACCOUNT(this.form);
          } else {
            this.nextStep();
          }
        }
      } else {
        this.whiteFieldsError = true;
      }
    },
    checkStep3() {
      this.whiteFieldsError = false;
      if (!this.form.userPhone) {
        this.whiteFieldsError = true;
      } else if (
        this.form.userType === "psychologist" &&
        !(
          this.form.userLocation ||
          this.form.userPostalCode ||
          this.form.userCity
        )
      ) {
        this.whiteFieldsError = true;
      } else {
        this.CREATE_ACCOUNT(this.form);
        this.$router.push({ name: "Login" });
      }
    },
    nextStep() {
      this.step += 1;
    },
    ...mapMutations(["CREATE_ACCOUNT"]),
  },
};
</script>

<style scoped>
.register {
  position: relative;
  height: 100vh;
}

.register:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background-image: url("../assets/child_background.jpg");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}

.content {
  position: relative;
  height: 100%;
}

form {
  border: 4px solid var(--orange);
  border-radius: 11px;
  box-shadow: 8px 8px var(--orange);
  text-align: center;
}

form h1 {
  font-size: 40px;
}

form p {
  font-size: 40px;
}

form select {
  height: 40px;
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  margin-left: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
}

form input {
  height: 40px;
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
  background: var(--blue);
}
</style>
