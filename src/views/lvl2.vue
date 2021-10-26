<template>
  <div>
    <Canvas 
    v-bind:posX="posX" 
    v-bind:posY="posY" 
    v-bind:revelePC="revelePC"
    v-bind:togglePC="togglePC"
    v-bind:bg="bg" 
    v-bind:img="img" 
    v-bind:link="link" 
    v-bind:text="text" 
    v-bind:codeExact="codeExact" 
    v-bind:errorMessage="errorMessage" 
    v-bind:nextLevel="nextLevel" 
    v-bind:transiBot="transiBot" 
    v-bind:transiLeft="transiLeft" 
    v-bind:openText="openText" />
  </div>
</template>

<script>

import Canvas from '../components/Canvas.vue'
import lvl2Song from '../assets/songs/lvl2.mp3'


export default {
  name : 'lvl2',
  components: {
    Canvas,
  },

  data() {
    return  {
      posX: 240,
      posY: 15,
      revelePC: false,
      img: `url(${require('../assets/img/PC2.png')})`,
      link: "https://thomas-e-git.github.io/Projet3_ThomasEstupina_08122020/",
      text: "Vous allez être redirigé (dans une nouvelle fenêtre) vers la page Github de mon second projet en tant que Développeur web, créer un site web animé avec CSS, le site s'appelle OhMyFood",
      errorMessage: "Mauvais code ! avez-vous été voir dans l'armoir et sur l'ordinateur ?",
      codeExact: "judotiramisu",
      nextLevel: "lvl3",
      bg: `url(${require('../assets/img/lvl2.png')})`,
      transiBot: "5px",
      transiLeft: "230px",
      openText: "Voulez-vous ouvrir le PC de Thomas ?"
    }
  },
  created: function() {
    document.addEventListener("keydown", this.keyDownHandler);
    let audio = document.getElementById("audio");
    audio.setAttribute('src',lvl2Song);
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
      if((e.keyCode == 39) && ((this.posY >= 0 && this.posY <= 85 && this.posX <= 390)
      || (this.posY >= 85 && this.posY <= 355 && this.posX <= 700)
      )) {
        this.posX += 10;
        user.style.setProperty('--posX', `${ this.posX }px`);
      }

      else if((e.keyCode == 37) && ( this.posX >= 200)) {
        this.posX -= 10;
        user.style.setProperty('--posX', `${ this.posX }px`);
      }

      else if((e.keyCode == 40) && ((this.posX >= 190 && this.posX <= 400 && this.posY >= 15)
      || (this.posX <= 710 && this.posX >= 190 && this.posY >= 95)
      )) {
        this.posY -= 10;
        user.style.setProperty('--posY', `${ this.posY }px`);
      }

      else if((e.keyCode == 38) && ( this.posY <= 345)) {
          this.posY += 10;
          user.style.setProperty('--posY', `${ this.posY }px`);
      }
      if (this.posX >= 240 && this.posX <= 360 && this.posY == 355) {
        bulle.style.setProperty('visibility','visible');
        bulleText.innerHTML = "Le lit a l'air très confortable, je sais, mais malheureusement, ce n'est pas le moment de se reposer, sortons d'ici au plus vite !";
      } else if (this.posX >= 460 && this.posX <= 590 && this.posY >= 85 && this.posY <= 105) {
          openPC.style.setProperty('display', 'block')
      } else if (this.posX >= 600 && this.posX <= 660 && this.posY >= 345) {
        bulle.style.setProperty('visibility','visible');
        bulleText.innerHTML = `Le sport a toujours pris une place importante dans ma vie, j'ai commencé par le judo jusqu'au niveau départementale, c'est le sport dans lequel je me suis le plus illustré compétitivement, j'ai également pratiqué du football et du tennis de table en club. <br> Aujourd'hui, je pratique plusieurs sports sur mon temps libre tels que le tennis, le cyclisme et la boxe, ça me permet d'évacuer, de passer de bons moments avec mes amis et de garder une certaine forme !`;
      
      } else if (this.posX >= 690 && this.posY >= 205 && this.posY <= 245) {
        bulle.style.setProperty('visibility','visible');
        bulleText.innerHTML = `
        le code secret est composé de 12 lettres, la première partie du code est le sport que j'ai pratiqué à mon plus haut niveau et la seconde est le dessert le plus chère proposé par le restaurant "Le délice des sens"
        <br>Le tout est sans espace et sans majuscules, petit indice: N'allez pas chercher le restaurant sur internet mais sur l'ordinateur de la chambre`;
        codePorte.style.setProperty('display','block');
      } else {
        bulle.style.setProperty('visibility','hidden');
        codePorte.style.setProperty('display','none');
        openPC.style.setProperty('display', 'none');
      }
      console.log(this.posX,this.posY)
    },
    togglePC : function() { 
      this.revelePC = !this.revelePC
    },
  }
}
</script>

