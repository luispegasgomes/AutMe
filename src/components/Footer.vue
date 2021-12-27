<template>
  <footer
    class="bgDarkBlue fontNunito text-center colorWhite d-flex justify-content-between align-items-center p-2"
  >
    <p class="text-uppercase">Mapa do Site</p>

    <!-- Section: Social media -->
    <section class="d-flex justify-content-between">
      <img src="../assets/facebook.png" width="40" class="mx-2" />
      <img src="../assets/instagram.png" width="40" class="mx-2" />
      <img src="../assets/twitter.png" width="40" class="mx-2" />
    </section>
    <!-- Section: Social media -->

    <section>
      <p>T. +351 252 291 700</p>
      <p>E. geral@esmad.ipp.pt</p>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>
