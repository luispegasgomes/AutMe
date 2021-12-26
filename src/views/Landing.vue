<template>
  <div class="landing">
    <!--NAVBAR-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!--LOGO-->
      <a class="navbar-brand mx-4" href="#">
        <img src="../assets/logo_AutMe.png" width="70%" />
      </a>
      <!--PAGES-->
      <div
        class="
          container-fluid
          flex-column
          justify-content-between
          align-items-center
        "
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">EMOÇÕES</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">DIÁRIO</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">CRIANÇAS</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">PEDIDOS</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">AGENDA</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">PSICÓLOGOS</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">GESTÃO</a>
          </li>
        </ul>
      </div>
      <!--PAGES-->

      <!--PROFILE IMG-->
      <div class="d-flex align-items-end justify-content-end mx-3">
        <img src="../assets/temp_profile_img.png" width="13%" />
      </div>
      <!--PROFILE IMG-->
    </nav>

    <div id="btns" class="fontNunito d-flex flex-column align-items-center my-3">
      <router-link :to="{ name: 'Register' }">
        <button class="bgOrange colorDarkBlue my-2">Mostrar notificações</button>
      </router-link>
    </div>
    <div class="row my-5">
        <div class="col-sm-3 col-md-6 d-flex flex-column align-items-center">
            <img src="../assets/balao_mensagem.svg" width="36%" />
            <img src="../assets/Menino_Landing.svg" width="20%" />
        </div>
        <div class="col-sm-3 col-md-6 d-flex flex-column align-items-center">
            <div class="gamebox">
                <p>JOGOS</p>
            </div>
        </div>
        
    </div>

  </div>
</template>

<script>
export default {
  name: "Landing",

};
</script>

<style scoped>

#btns * {
  border: none;
  border-radius: 8px;
  outline: none;
  width: 200px;
  font-size: 20px;
  color: #fff;
}
.gamebox{
    color: #143642;
    border: #EC9A29;
    border-radius: 8px;
}
</style>
