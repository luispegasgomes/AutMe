<template>
  <div class="children bgGrey d-flex flex-column justify-content-between">
    <Navbar />

    <main>
      <!-- <div class="d-flex align-items-center justify-content-center">
        <h1 class="title fontAsap">As minhas crianças</h1>
      </div> -->
      <button type="button" class="mb-5 mx-5">Ordenar por nome</button>

      <div class="d-flex justify-content-center">
        <section class="col-5 d-flex flex-column align-items-center">
          <div class="listbox row row-cols-4 justify-content-center">
            <div
              class="card my-5 mx-4 col-4 d-flex flex-column align-items-center"
            >
              <img
                class="card-img pt-3"
                src="../assets/facebook.png"
                alt="Avatar"
                style="width: 50%"
              />
              <div class="container pt-5" style="width: 100%">
                <h4><b>John Doe</b></h4>
              </div>
            </div>
            <div
              class="card my-5 mx-4 col-4 d-flex flex-column align-items-center"
            >
              <img
                class="card-img pt-3"
                src="../assets/facebook.png"
                alt="Avatar"
                style="width: 50%"
              />
              <div class="container pt-5" style="width: 100%">
                <h4><b>John Doe</b></h4>
              </div>
            </div>
            <div
              class="card my-5 mx-4 col-4 d-flex flex-column align-items-center"
            >
              <img
                class="card-img pt-3"
                src="../assets/facebook.png"
                alt="Avatar"
                style="width: 50%"
              />
              <div class="container pt-5" style="width: 100%">
                <h4><b>John Doe</b></h4>
              </div>
            </div>
            <div
              class="card my-5 mx-4 col-4 d-flex flex-column align-items-center"
            >
              <img
                class="card-img pt-3"
                src="../assets/facebook.png"
                alt="Avatar"
                style="width: 50%"
              />
              <div class="container pt-5" style="width: 100%">
                <h4><b>John Doe</b></h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

/* import { mapGetters } from "vuex"; */
export default {
  name: "Children",
  components: {
    Navbar,
    Footer,
  },
  /* data() {
    return {
      name: "Landing",
    };
  },
  computed: {
    ...mapGetters(["getUsername"]),
  }, */
};
</script>

<style scoped>
.children {
  height: 100vh;
}

.listbox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  box-shadow: 12px 12px 0px var(--orange);
  width: 170%;
}

.title {
  font-size: 300%;
}

.card {
  width: 15%;
  height: 70%;
  text-align: center;
  font-size: 50%;
}

button {
  background: white;
  border-color: var(--blue);
  border-width: 3px;
  border-radius: 10px;
}
button:hover {
  background: var(--blue);
}
</style>