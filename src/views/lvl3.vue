<template>
  <div>
    <Canvas 
    v-bind:posX="posX" 
    v-bind:posY="posY" 
    v-bind:bg="bg" 
    v-bind:link="link" 
    v-bind:text="text" 
    v-bind:codeExact="codeExact" 
    v-bind:errorMessage="errorMessage" 
    v-bind:nextLevel="nextLevel" 
    v-bind:transiBot="transiBot" 
    v-bind:transiLeft="transiLeft" 
    v-bind:usbDisplay="usbDisplay" 
    v-bind:openText="openText"
    v-bind:reveleTv="reveleTv"
    v-bind:togglePC="togglePC"
    v-bind:link1="link1"
    v-bind:text1="text1"
    />
  </div>
</template>

<script>

import Canvas from '../components/Canvas.vue'
import lvl3Song from '../assets/songs/lvl3.mp3'



export default {
  name : 'lvl3',
  components: {
    Canvas,
  },

  data() {
    return  {
      posX: 200,
      posY: 85,
      link: "https://thomas-e-git.github.io/Projet4_Base-avant-optimisation/",
      text: "Vous allez être redirigé (dans une nouvelle fenêtre) vers le site avant optimisation de la Chouette agence",
      link1: "https://thomas-e-git.github.io/Projet4_ThomasEstupina_29012021/",
      text1: "Vous allez être redirigé (dans une nouvelle fenêtre) vers le site optimisé de la Chouette agence",
      errorMessage: "Mauvais code ! avez-vous récupéré la clé USB et regardé la télé ?",
      codeExact: "zyra",
      nextLevel: "lvl4",
      bg: `url(${require('../assets/img/lvl3.png')})`,
      transiBot: "75px",
      transiLeft: "190px",
      usbDisplay: true,
      openText: "Voulez-vous allumer la télé ?",
      reveleTv: false
    }
  },
  created: function() {
    document.addEventListener("keydown", this.keyDownHandler);
    let audio = document.getElementById("audio");
    audio.setAttribute('src',lvl3Song);
    if (audio.getAttribute('muted') == "muted") {
      console.log("le son est désactivé");
      audio.volume = 0.1
    } else {
      audio.play()
      audio.volume = 0.1
    }
  },
  destroyed: function() {
    document.removeEventListener("keydown", this.keyDownHandler);
  },
  methods: {
    keyDownHandler: function(e) {

      let bulle = document.getElementById("bulle");
      let bulleText = document.getElementById("bulle-text");
      let codePorte = document.getElementById("codeporte");
      let user = document.getElementById("user");
      let openPC = document.getElementById("openPC");

      if(e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 40 || e.keyCode == 38) {
        e.preventDefault()
      }

      if((e.keyCode == 39) && ((this.posY >= 0 && this.posY <= 135 && this.posX <= 550)
      || (this.posY >= 145 && this.posY <= 285 && this.posX <= 410)
      || (this.posY >= 285 && this.posY <= 485 && this.posX <= 700)
      )) {
        this.posX += 10;
        user.style.setProperty('--posX', `${ this.posX }px`);
      }

      else if((e.keyCode == 37) && ((this.posY >= 375 && this.posX >= 460)
      || (this.posY <= 375 && this.posX >= 200)
      )) {
        this.posX -= 10;
        user.style.setProperty('--posX', `${ this.posX }px`);
      }

      else if((e.keyCode == 40) && ((this.posX >= 430 && this.posY >= 295)
      || ( this.posX <= 420 && this.posY >= 10)
      || ( this.posY <= 155 && this.posY >= 10)
      )) {
        this.posY -= 10;
        user.style.setProperty('--posY', `${ this.posY }px`);
      }

      else if((e.keyCode == 38) && ((this.posX <=420 && this.posY <= 365)
      || ( this.posX >= 440 && this.posY >= 285 && this.posY <= 475)
      || ( this.posX >= 430 && this.posY <= 125)
      )) {
          this.posY += 10;
          user.style.setProperty('--posY', `${ this.posY }px`);
      }
      if (this.posX >= 350 && this.posX <= 370 && this.posY == 375 && this.usbDisplay) {
        bulle.style.setProperty('visibility','visible');
        bulleText.innerHTML = "Vous avez trouvé une clé usb";
        document.removeEventListener("keydown", this.keyDownHandler);
        document.addEventListener("keydown", function(event) {
          event.preventDefault()
        });
        setTimeout(this.toggleUsb, 2000)

      } else if (this.posX >= 550 && this.posX <= 560 && this.posY >= 65 && this.posY <= 105) {
          openPC.style.setProperty('display', 'block')

      } else if (this.posX >= 630 && this.posX <= 690  && this.posY >= 465 && this.posY <= 485) {
        bulle.style.setProperty('visibility','visible');
        bulleText.innerHTML = `
        le code secret est le nom de ma clé USB`;
        codePorte.style.setProperty('display','block');
      } else {
        bulle.style.setProperty('visibility','hidden');
        codePorte.style.setProperty('display','none');
        openPC.style.setProperty('display', 'none');
      }
    },
    toggleUsb: function() {
      let bulle = document.getElementById("bulle");
      document.addEventListener("keydown", this.keyDownHandler);
      document.removeEventListener("keydown", function(event) {
          event.preventDefault()
        });
      this.usbDisplay = false;
      bulle.style.setProperty('visibility','hidden');
    },
    togglePC : function() { 
      this.reveleTv = !this.reveleTv
    },
  }
}
</script>