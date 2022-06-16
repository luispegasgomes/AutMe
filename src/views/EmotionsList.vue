<template>
  <div class="emotions bgGrey d-flex flex-column">
    <Navbar activeTab="Emoções" />
    <main class="d-flex flex-column mx-5 mb-5">
      <h1 class="fontAsap colorDarkBlue text-center">
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/achievement.png" width="100" />
          <p class="mx-5">"O AutMe é um campeão!"</p>
        </div>
      </h1>
      <div class="d-flex flex-column align-items-center mt-4">
        <div class="d-flex mb-3">
          <button
          id="achievements"
            v-on:click="selected = false"
            :class="{
              btnsPlay: true,
              bgBlue: true,
              'col-6': true,
              'mx-3': true,
              fontAsap: true,
              selectedBtn: selected == false,
            }"
            style="width:180px"
          >
            O que conquistei?
          </button>
          <button
            v-on:click="selected = true"
            :class="{
              btnsPlay: true,
              bgBlue: true,
              'col-6': true,
              'mx-3': true,
              fontAsap: true,
              selectedBtn: selected == true,
            }"
            style="width:180px"
          >
            Ver todas as conquistas!
          </button>
        </div>

        <div class="gamebox col-8 mt-2 mb-5">
          <p v-if="selected == false" class="d-flex flex-column align-items-center mt-2 fontAsap" style="font-size:30px">As minhas conquistas</p>
          <p v-if="selected == true" class="d-flex flex-column align-items-center mt-2 fontAsap" style="font-size:30px">Todas as conquistas do AutMe</p>
          <div class="notes mt-3" v-if="selected == false">
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-between
                mt-1
                mb-5
                mx-5
                cardNotes
              "
              v-for="(info, index) in getAchievements"
              :key="index"
            >
            
              <img
                :src="info.imgUrl"
                :alt="info.imgUrl"
                width="150px"
                class="mt-3"
              />
              <p
                class="text-center mx-2 mt-3 fontAsap colorOrange"
                style="font-size: 25px; font-weight: bold"
              >
                {{ info.name }}
              </p>
              <div class="d-flex mb-2">
                <button
                  class="fontNunito bgBlue colorDarkBlue btnsPlay mx-2"
                  style="width: 100px"
                  v-on:click="showMore(info.description)"
                >
                  Ver mais
                </button>
                <button
                  class="fontNunito bgOrange colorDarkBlue btnsPlay mx-2"
                  style="width: 150px"
                  v-on:click="changeAvatar(info.imgUrl)"
                >
                  Usar Avatar
                </button>
              </div>
            </div>
          </div>
          <div class="notes mt-3" v-if="selected == true">
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-between
                mt-1
                mb-5
                mx-5
                cardNotes
              "
              v-for="(info, index) in getAllAchievements"
              :key="index"
            >
              <img
                :src="info.imgUrl"
                :alt="info.imgUrl"
                width="150px"
                class="mt-3"
              />
              <p
                class="text-center mx-2 mt-3 fontAsap colorOrange"
                style="font-size: 25px; font-weight: bold"
              >
                {{ info.name }}
              </p>
              <div class="d-flex mb-2">
                <button
                  class="fontNunito bgBlue colorDarkBlue btnsPlay mx-2"
                  style="width: 100px"
                  v-on:click="showMore(info.description)"
                >
                  Ver mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="fixed-bottom">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EmotionsList",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      emotionsName: "all",
      selected: false,
    };
  },
  created() {
    this.getUserAPI()
      .then(() => console.log("Deu certo!"))
      .catch((err) => (this.warning = `${err}`));
    this.getAllAchievementsAPI()
      .then(() => console.log("Deu certo!"))
      .catch((err) => (this.warning = `${err}`));
  },
  methods: {
    ...mapActions(["getUserAPI", "getAllAchievementsAPI", "updateAvatarAPI"]),
    showMore(value) {
      alert(value);
    },
    changeAvatar(value) {
      alert("O novo avatar vai ser " + value);
      this.updateAvatarAPI({ child_avatar:value })
      .then(() => location.reload())
      .catch((err) => (this.warning = `${err}`));
    },
  },
  computed: {
    ...mapGetters([
      "getEmotions",
      "getUserType",
      "getUsername",
      "getConnections",
      "getImagesFromEmotion",
      "getUsernameRecognizedEmotion",
      "getUsernameDiary",
      "getAchievements",
      "getAllAchievements",
    ]),
    showEmotions() {
      return this.emotionsName === "all" ? this.getEmotions : this.getEmotions;
    },
  },
};
</script>

<style scoped>
.cardNotes {
  border: 6px solid var(--blue);
  border-radius: 10px;
  color: var(--darkBlue);
  background: white;
  width: 300px;

  margin: 10px;
}
.notes {
  display: flex;
  flex-wrap: wrap;
}
.emotions {
  min-height: 100vh;
  position: relative;
}

.gamebox {
  border: 6px solid var(--orange);
  border-radius: 10px;
  color: var(--darkBlue);
  background: var(--white);
  box-shadow: 12px 12px 0px var(--orange);
}

select {
  height: 36px;
  width: 20rem;
  font-size: 20px;
  border: 3px solid var(--blue);
  border-radius: 11px;
  padding: 0 5px;
  margin-left: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
}
.selectedBtn {
  background: var(--orange);
  color: white;
}

section {
  border: 4px solid var(--orange);
  border-radius: 11px;
  box-shadow: 8px 8px var(--orange);
  text-align: center;
  height: 30rem;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}

.emotion p {
  font-size: 28px;
}
</style>
