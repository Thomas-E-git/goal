<template>
  <div>
    <Canvas 
    v-bind:posX="posX" 
    v-bind:posY="posY" 
    v-bind:bg="bg" 
    v-bind:img="img" 
    v-bind:codeExact="codeExact" 
    v-bind:errorMessage="errorMessage" 
    v-bind:nextLevel="nextLevel" 
    v-bind:transiBot="transiBot" 
    v-bind:transiLeft="transiLeft" 
    v-bind:openText="openText"
    v-bind:revelePCP="revelePCP"
    v-bind:togglePC="togglePC"
    v-bind:transition="transition"
    />
  </div>
</template>

<script>

import Canvas from '../components/Canvas.vue'
import lvl4Song from '../assets/songs/lvl4.mp3'



export default {
    name : 'lvl4',
    components: {
        Canvas,
    },

    data() {
        return  {
            posX: 280,
            posY: 10,
            revelePCP: false,
            img: `url(${require('../assets/img/PC3.png')})`,
            errorMessage: "Mauvais code ! Avez vous regardé la recette sur l'ordinateur ?",
            codeExact: 2500,
            nextLevel: "lvl5",
            bg: `url(${require('../assets/img/lvl4.png')})`,
            transiBot: "0px",
            transiLeft: "270px",
            openText: "Voulez-vous allumer l'ordinateur portable ?",
            transition: true
        }
    },
    created: function() {
        document.addEventListener("keydown", this.keyDownHandler);
        let audio = document.getElementById("audio");
        audio.setAttribute('src',lvl4Song);
        if (audio.getAttribute('muted') == "muted") {
        console.log("le son est désactivé")
        } else {
        audio.play()
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

        } else if (this.posX >= 690 && this.posX <= 710  && this.posY >= 60 && this.posY <= 120) {
            bulle.style.setProperty('visibility','visible');
            bulleText.innerHTML = `
            le code secret est la multiplication du nombres de petits oignons et du nombre de grammes de champignons dans la recette du Boeuf Bourguignon pour 6 personnes`;
            codePorte.style.setProperty('display','block');
        } else if (this.posX >= 190 && this.posX <= 240  && this.posY >= 330 && this.posY <= 350) {
            bulle.style.setProperty('visibility','visible');
            bulleText.innerHTML = `
            Je me souviens que j'étais en train de préparer un délicieux Boeuf Bourguignon, je suivais une recette sur l'ordinateur. j'aime prendre du temps pour cuisiner, découvrir et faire découvrir de nouveaux plats, la cuisine est pour moi un plaisir à partager`;
        } else {
            bulle.style.setProperty('visibility','hidden');
            codePorte.style.setProperty('display','none');
            openPC.style.setProperty('display', 'none');
        }
    },
    togglePC : function() { 
      this.revelePCP = !this.revelePCP
    },
  }
}
</script>