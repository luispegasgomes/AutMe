<template>
  <div class="login">
    <div class="content p-5 d-flex flex-column align-items-center">
      <img src="../assets/logo.svg" alt="AutMe logo" width="25%'" />

      <form class="py-3 bgWhite">
        <h1 class="fontAsap weightBold">
          Ainda bem que voltaste! <br />Já estavamos com saudades tuas! <br />
          <img src="../assets/smile.png" alt="sorriso" width="70" />
        </h1>

        <div class="m-4">
          <label for="username"
            ><b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <input type="text" id="username" placeholder="Nome de utilizador" />
        </div>
        <div class="m-3">
          <label for="password"
            ><b-icon-lock-fill scale="2.2"></b-icon-lock-fill
          ></label>
          <input type="password" id="password" placeholder="Palavra-passe" />
        </div>

        <button class="my-4 px-5 btn btn-primary">Submit</button>

        <p>
          <router-link :to="{ name: 'Register' }" class="fontNunito my-4">
            Ainda não tens conta? Não percas tempo!
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { BIconPersonFill, BIconLockFill } from "bootstrap-vue";
export default {
  name: "Login",
  components: {
    BIconPersonFill,
    BIconLockFill,
  },
};
</script>

<style scoped>
.login {
  position: relative;
  height: 100vh;
}

.login:before {
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

form input {
  height: 40px;
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

a,
a:hover {
  font-size: 24px;
  color: var(--black);
}
</style>
