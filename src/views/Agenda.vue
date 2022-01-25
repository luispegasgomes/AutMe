<template>
  <div>
    <div class="d-flex flex-column align-items-center mt-5">
      <img src="../assets/logo.svg" width="400" />
    </div>

    <div class="d-flex flex-column align-items-center mt-5">
      <img src="../assets/excavator.png" width="250" />
      <p
        class="mx-5 fontAsap colorBlue col-6 mt-5"
        style="font-size: 35px; text-align: center"
      >
        Esta página esta em desenvolvimento! Terás de aguardar por novas versões
        para estar disponível.
      </p>
      <router-link :to="{ name: 'Landing' }"
        ><button class="btnsPlay mt-4 mb-2 bgBlue px-2">
          Voltar à página inicial
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btnsPlay {
  border: none;
  border-radius: 8px;
  font-size: 20px;
  color: white;
}
</style>