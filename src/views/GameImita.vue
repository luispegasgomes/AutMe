<template>
  <div class="landing bgGrey d-flex flex-column justify-content-between">
    <Navbar />
    <main class="">
      <div class="d-flex align-items-center mt-2 mx-4">
        <img src="../assets/imita.jpg" width="100" class="imgs" />
        <div class="mx-3 fontAsap" style="font-size: 30px; font-weight: bold">
          Imita-me!
        </div>
      </div>

      <div class="d-flex justify-content-between">
        <div class="mx-5 mt-4 p-5"><img src="../assets/meninaimita.svg" width="200px"></div>
        
        <!--GAME-->
        <div
          class="
            profileBox2
            d-flex
            flex-column
            justify-content-between
            mx-5
            mb-3
          "
        >
          <div class="d-flex mt-2 mx-3 justify-content-between">
            <img
              src="../assets/Dica.png"
              class="bgGrey"
              width="65"
              height="65"
              style="border-radius: 30px"
            />
            <div
              class="mt-2 d-flex flex-column align-items-center colorBlue"
              style="font-size: 40px"
            >
              Espantado
            </div>
            <img
              src="../assets/Dica.png"
              class="bgGrey"
              width="65"
              height="65"
              style="border-radius: 30px"
            />
          </div>

          <div class="d-flex align-items-center justify-content-between p-3">
            <button class="arrow">&lt;</button>
            <img src="../assets/espantado2.png" width="200" />
            <button class="arrow">></button>
          </div>
          <div class="d-flex flex-column align-items-center my-4">
            <button class="fontNunito bgOrange btnsPlay" style="height: 50px">
              <img src="../assets/Veriificar.png" width="30" />
              Registar emoção
            </button>
          </div>
        </div>
        <!--GAME-->
        <div class="mx-5 mt-5 p-5"><img src="../assets/meninoimita.svg" width="200px"></div>
      </div>
    </main>
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
      if (
        this.getLoggedUserInformations.password == this.form.currentPassword
      ) {
        console.log("muito bem");
        this.$store.commit("SET_NEW_PASSWORD", this.form.newPassword);
        alert("Password alterada!");
      } else {
        alert("As passwords não coicidem!");
      }
    },
    ...mapMutations(["SET_NEW_PASSWORD"]),
  },
  computed: {
    ...mapGetters(["getUsername", "getLoggedUserInformations"]),
  },
};
</script>

<style scoped>
.landing {
  height: 100vh;
}

.arrow {
  background-color: #0f8b8d;
  color: white;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
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
  height: 600px;
}

.imgs {
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
