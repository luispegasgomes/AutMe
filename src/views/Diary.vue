<template>
  <div class="landing bgGrey d-flex flex-column justify-content-between">
    <Navbar/>
    <main>
      <div class="d-flex align-items-center justify-content-center">
        <section class="d-flex flex-column mx-5">
          <p style="position: relative; top:80px; left:17px; font-size:18px;">Altera aqui as tuas informações <br> pessoais!</p>
          <img src="../assets/balao_mensagem.svg" width="300px"/>
          <img src="../assets/gato_feliz.svg" width="220px"/>
        </section>

        <div class="d-flex align-items-center">
          <!--PROFILE INFORMATIONS-->
          <div class="profileBox2 d-flex flex-column align-items-center mx-5 mb-3">
            <img
              src="../assets/temp_profile_img.png"
              height="100"
              class="my-3"
            />

            <div class="d-flex flex-column align-items-center">
              <div class="d-flex flex-column align-items-center">
                <h2 class="fontAsap" style="font-size: 35px">Pedro Silva</h2>
                <p class="fontNunito my-1" style="font-size: 18px">
                  pedrorique2002
                </p>
              </div>
              <div class="my-5">
                <p class="fontNunito my-1" style="font-size: 18px">
                  pedrorique2002@gmail.com
                </p>
                <p class="fontNunito my-1" style="font-size: 18px">
                  01/01/2002
                </p>
                <p class="fontNunito my-1" style="font-size: 18px">912222656</p>
                <p class="fontNunito my-1" style="font-size: 18px">
                  Moreira da Maia, Porto
                </p>
              </div>
            </div>

            <div class="d-flex flex-column align-items-center my-4">
              <button class="fontNunito bgOrange btnsPlay my-2">
                Atualizar foto de perfil
              </button>
              <button class="fontNunito bgOrange btnsPlay my-2">
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
                  <form class="d-flex flex-column align-items-center">
                    <input
                      class="my-2 col-9"
                      type="password"
                      id="password"
                      placeholder="Atual"
                    />
                    <input
                      class="my-2 col-9"
                      type="password"
                      id="password"
                      placeholder="Nova"
                    />
                    <input
                      class="my-2 col-9"
                      type="password"
                      id="password"
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
                      id="password"
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

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Landing",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.landing {
  height: 100vh;
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
