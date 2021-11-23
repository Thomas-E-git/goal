<template>
  <div>
    <Canvas 
    v-bind:posX="posX" 
    v-bind:posY="posY" 
    v-bind:bg="bg" 
    v-bind:img="img"
    v-bind:codeExact="codeExact" 
    v-bind:transiBot="transiBot" 
    v-bind:transiLeft="transiLeft" 
    v-bind:openText="openText"
    v-bind:reveleSmartphone="reveleSmartphone"
    v-bind:togglePC="togglePC"
    v-bind:carDisplay="carDisplay"
    v-bind:keyDisplay="keyDisplay"
    @portailIsOpen="verifyOpen"
    v-bind:carLeave="carLeave"
    v-bind:leave="leave"
    v-bind:transi="transi"
    v-bind:transition="transition"
    />
  </div>
</template>

<script>

import Canvas from '../components/Canvas.vue'
import lvl5Song from '../assets/songs/lvl5.mp3'



export default {
    name : 'lvl5',
    components: {
        Canvas,
    },

    data() {
        return  {
            posX: 90,
            posY: 70,
            reveleSmartphone: false,
            img: `url(${require('../assets/img/PC3.png')})`,
            codeExact: 'ketchup',
            bg: `url(${require('../assets/img/lvl5.png')})`,
            transiBot: "60px",
            transiLeft: "80px",
            openText: "Voulez-vous allumer le smartphone ?",
            carDisplay: true,
            keyDisplay: true,
            portailIsOpen: false,
            carLeave: false,
            transi: true,
            transition: true
        }
    },
    created: function() {
        document.addEventListener("keydown", this.keyDownHandler);
        let audio = document.getElementById("audio");
        audio.setAttribute('src',lvl5Song);
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
        let codePortail = document.getElementById("codeportail");
        let user = document.getElementById("user");
        let openPC = document.getElementById("openPC");

        if(e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 40 || e.keyCode == 38) {
            e.preventDefault()
        }

        if((e.keyCode == 39) && ((this.posY >= 0 && this.posY <= 220 && this.posX <= 250)
        || (this.posY >= 230 && this.posX <= 810)
        || (this.posX >= 680 && this.posX <= 810)
        
        )) {
            this.posX += 10;
            user.style.setProperty('--posX', `${ this.posX }px`);
        }

        else if((e.keyCode == 37) && ((this.posY >= 0 && this.posY <= 220 && this.posX >= 690)
        || (this.posY >= 230 && this.posX >= 90)
        || (this.posX >= 100 && this.posX <= 560)
        )) {
            this.posX -= 10;
            user.style.setProperty('--posX', `${ this.posX }px`);
        }

        else if((e.keyCode == 40) && ((this.posX <= 260 && this.posY >= 10)
        || (this.posX > 260 && this.posX <= 680 && this.posY >= 240)
        || (this.posX > 670 && this.posY >= 10)
        )) {
            this.posY -= 10;
            user.style.setProperty('--posY', `${ this.posY }px`);
        }

        else if((e.keyCode == 38) && ((this.posY <= 380)
        )) {
            this.posY += 10;
            user.style.setProperty('--posY', `${ this.posY }px`);
        }

        if (this.posX >= 240 && this.posX <= 270 && this.posY == 390) {
          openPC.style.setProperty('display', 'block')
        } else if (this.posX >= 740 && this.posX <= 760  && this.posY == 390 && this.keyDisplay ) {
            bulle.style.setProperty('visibility','visible');
            bulleText.innerHTML = "Vous avez trouvé les clés de la voiture";
            document.removeEventListener("keydown", this.keyDownHandler);
            document.addEventListener("keydown", this.blockKeyboard);
            setTimeout(this.toggleKey, 2000)
        } else if (this.posX >= 810 && this.posX <= 820  && this.posY >= 30 && this.posY <= 60 && !this.portailIsOpen) {
            bulle.style.setProperty('visibility','visible');
            bulleText.innerHTML = `
            le code du portail est le nom de la sauce que j'ajoute dans la vidéo de présentation du projet "Piquante" Vous devez quitter cette pièce en voiture`;
            codePortail.style.setProperty('display','block');
        } else if (this.posX >= 810 && this.posX <= 820  && this.posY >= 30 && this.posY <= 60 && this.portailIsOpen) { 
            bulle.style.setProperty('visibility','visible');
            bulleText.innerHTML = `
            Le portail est ouvert, prenez la voiture et soyez prudent !`;
            codePortail.style.setProperty('display','none');
        } else if (this.posX >= 470 && this.posX <= 560  && this.posY == 230 && this.keyDisplay && this.portailIsOpen) {
            bulle.style.setProperty('visibility','visible');
            bulleText.innerHTML = `
            La voiture est fermée, j'ai du laisser les clés quelque part dans la pièce`;
        } else if (this.posX >= 470 && this.posX <= 560  && this.posY == 230 && this.keyDisplay && !this.portailIsOpen) {
            bulle.style.setProperty('visibility','visible');
            bulleText.innerHTML = `
            La voiture est fermée, j'ai du laisser les clés quelque part dans la pièce, pensez également à ouvrir le portail`;
        } else if (this.posX >= 470 && this.posX <= 560  && this.posY == 230 && !this.keyDisplay && !this.portailIsOpen) {
            bulle.style.setProperty('visibility','visible');
            bulleText.innerHTML = `
            Vous avez les clés, il faut maintenant ouvrir le portail`;
        } else if (this.posX >= 470 && this.posX <= 560  && this.posY == 230 && !this.keyDisplay && this.portailIsOpen) {
            this.carLeave = true
        } else {
            bulle.style.setProperty('visibility','hidden');
            codePortail.style.setProperty('display','none');
            openPC.style.setProperty('display', 'none');
            this.carLeave = false
        }
    },
    togglePC : function() { 
      this.reveleSmartphone = !this.reveleSmartphone
    },
    toggleKey: function() {
      let bulle = document.getElementById("bulle");
      document.addEventListener("keydown", this.keyDownHandler);
      document.removeEventListener("keydown", this.blockKeyboard);
      this.keyDisplay = false;
      bulle.style.setProperty('visibility','hidden');
    },
    blockKeyboard : function(event) {
      event.preventDefault()
      console.log("keyboard blocked")
    },
    verifyOpen : function(value) {
        this.portailIsOpen = value.value
    },
    leave: function() {
        let user = document.getElementById("user");
        let car = document.getElementById("car")
        let transi = document.getElementById("bg-transi")
        user.style.setProperty('display', 'none')
        this.carLeave = false
        setTimeout(function(){car.classList.add('car-move')}, 1000)
        setTimeout(()=>{transi.style.setProperty('display','block')}, 3500)
        setTimeout(()=>{this.$router.push('lvl6')}, 5500)
    }
  }
}
</script>

<style scoped>

</style>