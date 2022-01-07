<template>
  <div class="game bgGrey d-flex flex-column justify-content-between">
    <Navbar />
    <main></main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Adivinha",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.game {
  height: 100vh;
}
</style>
