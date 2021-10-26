<template>
  <div>
    <Canvas 
    v-bind:posX="posX" 
    v-bind:posY="posY" 
    v-bind:bg="bg" 
    v-bind:img="img" 
    v-bind:link="link" 
    v-bind:text="text" 
    v-bind:codeExact="codeExact" 
    v-bind:errorMessage="errorMessage" 
    v-bind:nextLevel="nextLevel" 
    v-bind:transiBot="transiBot" 
    v-bind:transiLeft="transiLeft" 
    v-bind:openText="openText"
    v-bind:revelePCP="revelePCP"
    v-bind:togglePC="togglePC"
    v-bind:link1="link1"
    v-bind:text1="text1"
    />
  </div>
</template>

<script>

import Canvas from '../components/Canvas.vue'
import lvl4Song from '../assets/songs/lvl4.mp3'



export default {
    name : 'lvl3',
    components: {
        Canvas,
    },

    data() {
        return  {
            posX: 280,
            posY: 10,
            revelePCP: false,
            img: `url(${require('../assets/img/PC3.png')})`,
            link: "https://thomas-e-git.github.io/Projet4_Base-avant-optimisation/",
            text: "Vous allez être redirigé (dans une nouvelle fenêtre) vers le site avant optimisation de la Chouette agence",
            link1: "https://thomas-e-git.github.io/Projet4_ThomasEstupina_29012021/",
            text1: "Vous allez être redirigé (dans une nouvelle fenêtre) vers le site optimisé de la Chouette agence",
            errorMessage: "Mauvais code ! avez-vous récupéré la clé USB et regardé la télé ?",
            codeExact: "zyra",
            nextLevel: "lvl4",
            bg: `url(${require('../assets/img/lvl4.png')})`,
            transiBot: "0px",
            transiLeft: "270px",
            openText: "Voulez-vous allumer l'ordinateur portable ?",
            
        }
    },
    created: function() {
        document.addEventListener("keydown", this.keyDownHandler);
        let audio = document.getElementById("audio");
        audio.setAttribute('src',lvl4Song);
        if (audio.getAttribute('muted') == "muted") {
        console.log("le son est désactivé")
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

        if((e.keyCode == 39) && ((this.posY >= 0 && this.posY <= 190 && this.posX <= 360)
        || (this.posY >= 200 && this.posX <= 700)
        || (this.posX >= 560 && this.posX <= 700)
        
        )) {
            this.posX += 10;
            user.style.setProperty('--posX', `${ this.posX }px`);
        }

        else if((e.keyCode == 37) && ((this.posY >= 0 && this.posY <= 190 && this.posX >= 590)
        || (this.posY >= 200 && this.posX >= 200)
        || (this.posX >= 200 && this.posX <= 370)
        )) {
            this.posX -= 10;
            user.style.setProperty('--posX', `${ this.posX }px`);
        }

        else if((e.keyCode == 40) && ((this.posX <= 370 && this.posY >= 10)
        || (this.posX > 370 && this.posX <= 560 && this.posY >= 210)
        || (this.posX > 560 && this.posY >= 10)
        )) {
            this.posY -= 10;
            user.style.setProperty('--posY', `${ this.posY }px`);
        }

        else if((e.keyCode == 38) && ((this.posY <=340)
        )) {
            this.posY += 10;
            user.style.setProperty('--posY', `${ this.posY }px`);
        }

        if (this.posX >= 650 && this.posX <= 690 && this.posY >= 340 && this.posY <= 350) {
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
        console.log(this.posX,this.posY)
    },
    togglePC : function() { 
      this.revelePCP = !this.revelePCP
    },
  }
}
</script>