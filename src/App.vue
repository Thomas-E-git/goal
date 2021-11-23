<template>
  <div id="app">
    <audio id="audio" src="" controls loop muted="muted" v-if="this.window.width >= 960"></audio>
    <img src="./assets/logo.png" alt="logo du jeu Game Of A Life" class="col-3 mb-1">
    <div class="h6 text-primary prevent-size d-flex flex-column justify-content-center align-items-center" v-if="this.window.width < 960">
      <font-awesome-icon :icon="['fas', 'sad-tear']" size="4x" />
      <p class="w-75 my-3">La taille de votre écran n'est pas optimisée pour le mode aventure, il doit avoir au minimum une largeur de 960 pixels.<br> Toutes mes excuses pour la gêne occasionée, j'espère vous revoir très vite.</p>
    </div>
    <router-view v-if="this.window.width >= 960"/>
    <footer class="bg-white pt-3 mt-5 position-relative" v-if="this.window.width >= 960">
      <div class="box-me col-9 rounded d-flex justify-content-around align-items-center py-3 bg-secondary">
        <div class="me-pic"><img src="./assets/img/me.jpg" alt="Ma photo de profil" class="w-100"></div>
        <p class="h5 text-primary w-50">Je suis à l'écoute d'opportunités professionnelles dans le développement web, contactez-moi !</p>
        <div class="d-flex justify-content-around flex-wrap w-25">
          <a class="p-2 icon-div" target="blank" href="https://github.com/Thomas-E-git"><font-awesome-icon :icon="['fab', 'github']" size="2x" /></a>
          <a class="p-2 icon-div" target="blank" href="https://www.linkedin.com/in/thomas-estupina-147790162/"><font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x" /></a>
          <a class="p-2 icon-div" target="blank" href="mailto:thomas.estupina@gmail.com"><font-awesome-icon :icon="['fas', 'at']" size="2x" /></a>
        </div>
      </div>
      
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      window: {
      width: 0,
      height: 0
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
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

.icon-div {
  border: solid $primary;
  border-radius: 50%;
  color: $primary;
  &:hover {
    background-color: $primary;
    color: $secondary;
  }
}

.box-me {
  position: absolute;
  top: -50px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.me-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
}
.prevent-size {
  position: absolute;
  top: 0%;
  bottom: 0%;
  right: 0%;
  left: 0%;
  background-color: white;
  z-index: 1000;
}
</style>
