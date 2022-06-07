<template>
  <div class="login">
    <div class="content p-5 d-flex flex-column align-items-center">
      <img src="../assets/tester.png" alt="AutMe logo" width="19%" class="mb-3" />

      <form class="bgWhite py-3 px-5 my-4" @submit.prevent="login">
        <h1 class="fontAsap weightBold">
          Ainda bem que voltaste! <br />Já estavamos com saudades tuas! <br />
          <img src="../assets/smile.png" alt="sorriso" width="70" />
        </h1>

        <div class="m-4">
          <label for="username"
            ><b-icon-person-fill scale="2.2"></b-icon-person-fill
          ></label>
          <input
            type="text"
            id="username"
            placeholder="Nome de utilizador"
            v-model="user.username"
            required
          />
        </div>
        <div class="m-3">
          <label for="password"
            ><b-icon-lock-fill scale="2.2"></b-icon-lock-fill
          ></label>
          <input
            type="password"
            id="password"
            placeholder="Palavra-passe"
            v-model="user.password"
            required
          />
        </div>

        <BAlert :show="error" variant="danger" class="mx-5"
          >O nome de utilizador ou palavra-passe estão errados!</BAlert
        >

        <button class="my-4 px-5 btn btn-primary">Entrar</button>

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
import { BIconPersonFill, BIconLockFill, BAlert } from "bootstrap-vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  components: {
    BIconPersonFill,
    BIconLockFill,
    BAlert,
  },
  data() {
    return {
      warning:'',
      user:{
        username: "",
        password: "",
      },

      error: false,
      
    };
  },
  methods: {
    ...mapActions(["login_ap"]),
    login() {
      /*if (this.isUser(this.username, this.password)) {
        this.SET_LOGGED_USER(this.username);
        
      } else {
        this.error = true;
      }*/
      this.login_ap()
        .then(()=>this.$router.push({ name: "Landing" }))
        .catch((err)=>this.warning=`${err}`)


    },
  
  },
  computed: {
    ...mapGetters(["getUserType"]),
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
  border: 4px solid var(--orange);
  border-radius: 11px;
  box-shadow: 8px 8px var(--orange);
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
