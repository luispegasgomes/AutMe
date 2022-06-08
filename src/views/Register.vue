<template>
  <div class="register">
    <div
      v-if="step === 0"
      class="content p-5 d-flex flex-column align-items-center"
    >
      <img
        src="../assets/tester.png"
        alt="AutMe logo"
        width="20%"
        class="mb-5"
      />

      <form class="bgWhite py-3 px-5 my-4">
        <h1 class="fontAsap weightBold">
          Vamos começar a criar a tua conta... <br />
        </h1>

        <p>O que tu és?</p>

        <div class="m-4">
          <label for="sltUserType">
            <b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <select id="sltUserType" v-model="form.role" required>
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
            v-model="name"
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
            placeholder="Fotografia"
            v-model="form.child_avatar"
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
            v-model="form.birthDate"
            required
          />
        </div>
        <div class="m-4">
          <label for="sltGender">
            <b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <select id="sltGender" v-model="form.child_gender" required>
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
            v-model="form.email"
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
            v-model="form.password"
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
            v-model="confirmPassword"
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
            v-model="userPhone"
            required
          />
        </div>
        <div v-if="form.role === 'psychologist'">
          <div class="m-4">
            <label for="txtRegisterLocation"
              ><b-icon-geo-alt-fill scale="2.2"></b-icon-geo-alt-fill
            ></label>
            <input
              type="text"
              id="txtRegisterLocation"
              placeholder="Localização"
              v-model="userLocation"
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
              v-model="userPostalCode"
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
              v-model="userCity"
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
import { mapGetters, mapActions } from "vuex";

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
      warning: "",
      step: 0,
      whiteFieldsError: false,
      existsAuthError: false,
      differentPasswordError: false,
      form: {
        username: "",
        email: "",
        password: "",
        role: "",
        child_gender: "",
        child_avatar: "",
        birthDate: "",
      },
      name: "",
      surname: "",
      confirmPassword: "",
      userPhone: "",
      userLocation: "",
      userPostalCode: "",
      userCity: "",
    };
  },
  computed: {
    ...mapGetters(["isUnvailable"]),
  },
  methods: {
    ...mapActions(["registerAPI"]),
    checkStep0() {
      if (this.form.role) {
        this.whiteFieldsError = false;
        this.nextStep();
      } else {
        this.whiteFieldsError = true;
      }
    },
    checkStep1() {
      if (this.form.birthDate && this.form.child_gender) {
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
        this.form.email &&
        this.form.password &&
        this.confirmPassword
      ) {
        this.whiteFieldsError = false;
        if (this.isUnvailable(this.form.username, this.form.email)) {
          this.existsAuthError = true;
        } else if (this.form.password !== this.confirmPassword) {
          this.differentPasswordError = true;
        } else {
          if (this.form.role == "child") {
            
            this.registerAPI(this.form)
              .then(() => this.$router.push({ name: "Login" }))
              .catch((err) => (this.warning = `${err}`));

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
      if (!this.userPhone) {
        this.whiteFieldsError = true;
      } else if (
        this.form.role === "psychologist" &&
        !(this.userLocation || this.userPostalCode || this.userCity)
      ) {
        this.whiteFieldsError = true;
      } else {
        //this.CREATE_ACCOUNT(this.form);
        if (this.form.child_gender == "Masculino") {
          this.form.child_gender = "M";
        } else if (this.form.child_gender == "Feminino") {
          this.form.child_gender = "F";
        }
        this.registerAPI(this.form)
          .then(() => this.$router.push({ name: "Login" }))
          .catch((err) => (this.warning = `${err}`));
        this.$router.push({ name: "Login" });
      }
    },
    nextStep() {
      this.step += 1;
    },
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
