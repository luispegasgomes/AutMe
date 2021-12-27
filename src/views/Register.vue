<template>
  <div class="register">
    <div
      v-if="step === 0"
      class="content p-5 d-flex flex-column align-items-center"
    >
      <img src="../assets/logo.svg" alt="AutMe logo" width="25%'" />

      <form class="py-3 bgWhite">
        <h1 class="fontAsap weightBold">
          Vamos começar a criar a tua conta... <br />
        </h1>

        <p>O que tu és?</p>

        <div class="m-4">
          <label for="sltUserType">
            <b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <select id="sltUserType">
            <option value="" selected>Selecione um tipo de utilizador</option>
            <option value="child">Criança</option>
            <option value="father">Tutor</option>
            <option value="psychologist">Psicólogo</option>
          </select>
        </div>

        <button
          type="button"
          class="my-4 px-5 btn btn-primary"
          v-on:click.prevent="nextStep"
        >
          Continuar
        </button>
      </form>
    </div>
    <div
      v-else-if="step === 1"
      class="content p-5 d-flex flex-column align-items-center"
    >
      <img src="../assets/logo.svg" alt="AutMe logo" width="25%'" />

      <form class="py-3 bgWhite">
        <h1 class="fontAsap weightBold">
          Vamos começar a criar a tua conta... <br />
        </h1>

        <p>Quem és tu?</p>

        <div class="m-4">
          <label for="txtRegisterName"
            ><b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <input type="text" id="txtRegisterName" placeholder="Nome " />
        </div>
        <div class="m-4">
          <label for="txtRegisterSurname"
            ><b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <input type="text" id="txtRegisterSurname" placeholder="Apelido" />
        </div>
        <div class="mx-4">
          <label for="txtRegisterBirthdate"
            ><b-icon-calendar-date scale="2.2"></b-icon-calendar-date>
          </label>
          <input type="date" id="txtRegisterBirthdate" />
        </div>
        <div class="m-4">
          <label for="sltGender">
            <b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <select id="sltGender">
            <option value="" selected>Selecione o seu género</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
        </div>

        <button
          type="button "
          class="my-4 px-5 btn btn-primary"
          v-on:click.prevent="nextStep"
        >
          Continuar
        </button>
      </form>
    </div>
    <div
      v-else-if="step === 2"
      class="content p-5 d-flex flex-column align-items-center"
    >
      <img src="../assets/logo.svg" alt="AutMe logo" width="25%'" />

      <form class="py-3 bgWhite">
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
            placeholder="Nome de utilizador "
          />
        </div>
        <div class="m-4">
          <label for="txtRegisterEmail"
            ><b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <input type="email" id="txtRegisterEmail" placeholder="Email" />
        </div>
        <div class="m-4">
          <label for="txtRegisterPassword"
            ><b-icon-lock-fill scale="2.2"></b-icon-lock-fill
          ></label>
          <input
            type="password"
            id="txtRegisterPassword"
            placeholder="Password "
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
          />
        </div>

        <button
          type="button "
          class="my-4 px-5 btn btn-primary"
          v-on:click.prevent="nextStep"
        >
          Continuar
        </button>
      </form>
    </div>
    <div
      v-else-if="step === 3"
      class="content p-5 d-flex flex-column align-items-center"
    >
      <img src="../assets/logo.svg" alt="AutMe logo" width="25%'" />

      <form class="py-3 bgWhite">
        <h1 class="fontAsap weightBold">
          Vamos começar a criar a tua conta... <br />
        </h1>

        <p>Precisamos do teu contacto!</p>

        <div class="m-4">
          <label for="txtRegisterContact"
            ><b-icon-telephone-fill scale="2.2"></b-icon-telephone-fill
          ></label>
          <input type="text" id="txtRegisterContact" placeholder="Contacto " />
        </div>
        <div class="m-4">
          <label for="txtRegisterLocation"
            ><b-icon-geo-alt-fill scale="2.2"></b-icon-geo-alt-fill
          ></label>
          <input
            type="text"
            id="txtRegisterLocation"
            placeholder="Localização"
          />
        </div>
        <!-- <button type="button " class="my-4 px-5 btn btn-primary"> -->
        <router-link :to="{ name: 'Login' }">
          <button type="button " class="my-4 px-5 btn btn-primary">
            Criar Conta
          </button>
        </router-link>
        <!-- </button> -->
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
} from "bootstrap-vue";
export default {
  name: "Register",
  components: {
    BIconPersonFill,
    BIconCalendarDate,
    BIconLockFill,
    BIconTelephoneFill,
    BIconGeoAltFill,
  },
  data() {
    return {
      step: 0,
    };
  },

  methods: {
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
  height: 40rem;
  border: 4px solid var(--orange);
  border-radius: 11px;
  box-shadow: 8px 8px var(--orange);
  width: 50rem;
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