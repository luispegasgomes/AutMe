<template>
  <div class="login">
    <img src="../assets/logo.svg" alt="AutMe logo" width="35%" />
    <form>
      <h1>Ainda bem que voltaste! <br />Já estavamos com saudades tuas</h1>
      <!-- <br />
      <h1>Já estavamos com saudades tuas</h1> -->
      <div id="form">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="txtLoginUsername"
            placeholder="Nome de utilizador"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="txtLoginPassword"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <br />
        <a href="Register.vue">Ainda não tens conta? Não percas tempo!</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
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

form {
  height: 40rem;
  background-color: white;
  box-shadow: 6px 6px #ffa500;
  width: 50rem;
  text-align: center;
  position: absolute;
  left: 30%;
  top: 22%;
}

input {
  color: white;
  width: 25rem;
  position: relative;
  left: 21%;
  margin: 25px;
  border: solid 2px;
  border-radius: 10px;
  border-color: #0f8b8d;
}

button {
  background-color: #0f8b8d;
  border-radius: 10px;
  width: 10rem;
}
h1 {
  position: relative;
  top: 2rem;
}

#form {
  position: relative;
  top: 10rem;
  line-height: 100px;
}

img {
  position: absolute;
  left: 42%;
  top: 7%;
}
</style>
