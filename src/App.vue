<template>
  <div id="app">
    <audio id="audio" src="" controls loop muted="muted"></audio>
    <img src="./assets/logo.png" alt="logo du jeu Game Of A Life" class="col-3 mb-1">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
}
</script>


<style lang="scss" >
@import './assets/app.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(3, 25, 122);
  background-position: 100%;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}
audio {
  position: fixed;
  top: 2%;
  right: 1%;
  z-index: 2000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
