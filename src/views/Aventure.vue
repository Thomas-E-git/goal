<template>
  <div>
    <div id="canvas" class="canvas">
      <Tutorial v-bind:activateAudio="activateAudio" v-bind:declineAudio="declineAudio" />
    </div>
    <Buttons button1="Menu principal" button2="Recommencer le jeu" link1="/" link2="Aventure"/>
  </div>
</template>

<script>

import Buttons from '../components/Buttons.vue'
import Tutorial from '../components/Tutorial.vue'
import TutoSong from '../assets/songs/tuto.mp3'

export default {
  name: 'Aventure',
  components: {
    Buttons,
    Tutorial,
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    activateAudio : function() {
      let audio = document.getElementById("audio")
      document.getElementById("modale").style.setProperty('visibility', 'hidden');
      audio.setAttribute('src',TutoSong)
      audio.removeAttribute('muted');
      audio.play();
      audio.volume = 0.1;
    },
    declineAudio : function() {
      let audio = document.getElementById("audio")
      document.getElementById("modale").style.setProperty('visibility', 'hidden');
      audio.setAttribute('src',TutoSong);
      audio.pause();
      audio.setAttribute('muted','muted')
      audio.volume = 0.1;
    },
  }
}
</script>

<style lang="scss" scoped>
  .canvas {
    background-color: black;
  }


</style>