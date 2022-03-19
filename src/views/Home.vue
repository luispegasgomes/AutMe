<template>
  <div class="home">
    <div class="content px-5 py-3 d-flex flex-column justify-content-between">
      <img src="../assets/tester.png" alt="AutMe logo" width="17%" class="mt-2"/>

      <div class="d-flex flex-column align-items-end px-5">
        <p class="fontAsap colorDarkBlue weightBold py-5 w-75" id="title">
          O website mais divertido <br />
          para crianças <br />
          como tu!
        </p>

        <div id="btns" class="fontNunito">
          <router-link :to="{ name: 'Login' }">
            <button class="bgDarkBlue colorWhite mx-5 my-2">Entrar</button>
          </router-link>
          <router-link :to="{ name: 'Register' }">
            <button class="bgOrange colorDarkBlue my-2">Registar</button>
          </router-link>
        </div>
      </div>

      <p class="align-self-end px-5 fontNunito" id="info">
        És pai e queres mais informações sobre o transtorno do <br />
        teu filho?
        <router-link :to="{ name: 'InfoAutism' }" class="colorBlue weightBold"
          >Tens aqui informações sobre o autismo!</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}

.home:before {
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

#title {
  font-size: 60px;
  line-height: 72px;
  text-align: right;
  letter-spacing: 0.05em;
}

#btns button {
  width: 224px;
  height: 50px;
  box-shadow: 6px 6px var(--white);
  border: none;
  border-radius: 10px;
  outline: none;
  width: 10rem;
  font-size: 28px;
}

#info {
  font-size: 24px;
  line-height: 34px;
  text-align: right;
}

#info a:hover {
  color: var(--darkBlue);
}
</style>
