<template>
  <div>
    <Canvas 
    v-bind:posX="posX" 
    v-bind:posY="posY" 
    v-bind:bg="bg"
    v-bind:transii="transii"
    v-bind:carrDisplay="carrDisplay"
    />
  </div>
</template>

<script>

import Canvas from '../components/Canvas.vue'
import lvl6Song from '../assets/songs/lvl6.mp3'



export default {
    name : 'lvl6',
    components: {
        Canvas,
    },

    data() {
        return  {
            posX: 250,
            posY: 180,
            nextLevel: "lvl5",
            bg: `url(${require('../assets/img/lvl6.png')})`,
            transii: true,
            carrDisplay: true,
        }
    },
    created: function() {
        document.addEventListener("keydown", this.keyDownHandler);
        let audio = document.getElementById("audio");
        audio.setAttribute('src',lvl6Song);
        if (audio.getAttribute('muted') == "muted") {
        console.log("le son est désactivé")
        } else {
        audio.play()
        }
    },
    mounted() {
        let user = document.getElementById("user");
        user.style.setProperty('visibility','hidden')
        setTimeout(function(){user.style.setProperty('visibility','visible')}, 5000) 
    },
    destroyed: function() {
        document.removeEventListener("keydown", this.keyDownHandler);
    },
    methods: {
        keyDownHandler: function(e) {

        let bulle = document.getElementById("bulle");
        let bulleText = document.getElementById("bulle-text");
        let user = document.getElementById("user");
        let goEnd = document.getElementById("go-end")

        if(e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 40 || e.keyCode == 38) {
            e.preventDefault()
        }

        if((e.keyCode == 39) && ((this.posY >= 100 && this.posY <= 150 && this.posX <= 580)
        || (this.posY >= 160 && this.posY <= 310 && this.posX <= 830)
        || (this.posY >= 320 && this.posX <= 730)
        )) {
            this.posX += 10;
            user.style.setProperty('--posX', `${ this.posX }px`);
        }

        else if((e.keyCode == 37) && (this.posX >= 470)
        ){
            this.posX -= 10;
            user.style.setProperty('--posX', `${ this.posX }px`);
        }

        else if((e.keyCode == 40) && ((this.posX >= 460 && this.posX <= 590 && this.posY >= 110)
        || (this.posX >= 600 && this.posY >= 170)
        )) {
            this.posY -= 10;
            user.style.setProperty('--posY', `${ this.posY }px`);
        }

        else if((e.keyCode == 38) && ((this.posX >= 460 && this.posX <= 740 && this.posY <= 380)
        || (this.posX >= 750 && this.posY <= 300)
        )) {
            this.posY += 10;
            user.style.setProperty('--posY', `${ this.posY }px`);
        }

        if (this.posX >= 480 && this.posX <= 560  && this.posY == 390) {
            bulle.style.setProperty('visibility','visible');
            bulleText.innerHTML = `
            J'utilise très souvent le vélo pour me déplacer, que ce soit des courtes ou moyennes distances. C'est aussi un réel plaisir et la plus longue distance que j'ai effectué pour le moment est d'envion 300 kilomètres sur 4 jours lors d'un périple le long de l'océan Atlantique`;
        } else if (this.posX >= 460 && this.posX <= 590  && this.posY >= 100 && this.posY <= 110) {
            bulle.style.setProperty('visibility','visible');
            bulleText.innerHTML = `
            Vous avez dû remarquer qu'il y'avait des fleurs et des plantes dans chaque pièces, cette attention particulière envers le végétal me vient de mon alternance durant le Master 2 en Marketing, où j'ai cotoyé les végétaux quotidiennement pendant 6 ans et j'ai dû tout apprendre sur eux, ils ne m'ont jamais quitté depuis !`;
        } else if (this.posX == 740  && this.posY >= 360) {
            goEnd.style.setProperty('display','block');
        } else {
            bulle.style.setProperty('visibility','hidden');
            goEnd.style.setProperty('display','none');
        }
    },
  }
}
</script>
