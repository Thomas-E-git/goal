<template>
  <div>
    <div id="canvas" class="canvas">
      <User v-bind:posX="posX" v-bind:posY="posY" />
      <Bulle />
      <Transition />
      <div id="tableau">
        <button id="close" v-on:click="close">Fermer le tableau</button>
      </div>
      <div id="open" class="text-center">
        <p>Veux-tu voir le tableau ?</p>
        <button class="mr-3" v-on:click="open"> oui </button> <button> non </button>
      </div>
      <div id="code">
        <label for="code">Entrez le code d'accès : </label>
        <input type="text" id="codeinput" class="ml-3 text-center" name="code" v-model="code" onfocus="if(this.value !== '1910')this.value = '';">
        <input type="submit" value="Valider" @click="togglePC();">
        <p id="error" class="text-danger h6 text-left"></p>
      </div>
      <div id="codeporte">
        <label for="codePorte">Entrez le code d'accès : </label>
        <input type="text" id="codeinput1" class="ml-3 text-center" name="codePorte" v-model="codePorte" onfocus="if(this.value !== 'reservia')this.value = '';">
        <input type="submit" value="Valider" @click="next">
        <p id="errorPorte" class="text-danger h6 text-left"></p>
      </div>
      <PC1 v-bind:revelePC="revelePC" v-bind:togglePC="togglePC" v-bind:img="img" v-bind:link="link" v-bind:text="text"/>
    </div>
    <Buttons button1="Menu principal" button2="Recommencer le jeu" link1="/" link2="Aventure"/>
  </div>
</template>

<script>

import PC1 from '../components/PC1.vue'
import Buttons from '../components/Buttons.vue'
import Bulle from '../components/Bulle.vue'
import User from '../components/User.vue'
import Transition from '../components/Transition.vue'


export default {
  name: 'lvl1',
  components: {
    PC1,
    Buttons,
    Bulle,
    User,
    Transition
  },
  data : function() {
    return {
      posX : 300,
      posY : 15,
      code : null,
      revelePC: false,
      codePorte : null,
      img: `url(${require('../assets/img/PC.png')})`,
      link: "https://thomas-e-git.github.io/Projet2_ThomasEstupina_02112020/",
      text: "Vous allez être redirigé (dans une nouvelle fenêtre) vers la page Github de mon premier projet en tant que Développeur web, il s'agit une intégration web"
    }
  },

  created: function() {
    document.addEventListener("keydown", this.keyDownHandler);
  },
  destroyed: function() {
    document.removeEventListener("keydown", this.keyDownHandler);
  },

  methods: {
    
    keyDownHandler: function(e) {
      let bulle = document.getElementById("bulle");
      let bulleText = document.getElementById("bulle-text");
      let open = document.getElementById("open");
      let code = document.getElementById("code");
      let codePorte = document.getElementById("codeporte");
      let user = document.getElementById("user");
      if(e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 40 || e.keyCode == 38) {
        e.preventDefault()
      }
      if((e.keyCode == 39) && ((this.posY >= 0 && this.posY <= 65 && this.posX <= 400)
      || (this.posY >= 65 && this.posY <= 485 && this.posX <= 690)
      )) {
        this.posX += 10;
        user.style.setProperty('--posX', `${ this.posX }px`);
      }

      else if((e.keyCode == 37) && ((this.posY >= 0 && this.posY <= 265 && this.posX >= 220)
      || (this.posY <= 485 && this.posY >= 265 && this.posX >= 510)
      )) {
        this.posX -= 10;
        user.style.setProperty('--posX', `${ this.posX }px`);
      }

      else if((e.keyCode == 40) && ((this.posX >= 210 && this.posX <= 410 && this.posY >= 15)
      || (this.posX <= 700 && this.posX >= 210 && this.posY >= 75)
      )) {
        this.posY -= 10;
        user.style.setProperty('--posY', `${ this.posY }px`);
      }

      else if((e.keyCode == 38) && ((this.posX >= 210 && this.posX <= 510 && this.posY <= 255)
      || (this.posX <= 700 && this.posX >= 500 && this.posY <= 475)
      )) {
          this.posY += 10;
          user.style.setProperty('--posY', `${ this.posY }px`);
      }
      if (this.posX <= 250 && this.posY >= 235) {
        bulle.style.setProperty('visibility','visible');
        bulleText.innerHTML = "Il semblerait que l'ordinateur soit vérouillé ! C'est un code à 4 chiffres, J'ai laissé un indice : 'tableau jaune E-sport'";
        code.style.setProperty('visibility','visible');
      } else if (this.posX <= 440 && this.posX >= 390 && this.posY == 265) {
        bulle.style.setProperty('visibility','visible');
        bulleText.innerHTML = `
        Quel joli tableau ! Je suis un adepte d'E-sport, J'aime jouer aux jeux et regarder les compétitions en ligne qui rassemblent des dixaines de milliers de spéctateurs et viewers, J'ai déjà participé à plusieurs évenements majeurs et j'espère pouvoir le refaire !`;
        open.style.setProperty('visibility','visible')
      } else if ((this.posX <= 630 && this.posX >= 560 && this.posY >= 465)) {
        bulle.style.setProperty('visibility','visible');
        bulleText.innerHTML = `
        Pour passer à l'étape suivante, tu vas devoir trouver le code secret, il est composé de 8 lettres, c'est le nom du premier site de réservation en ligne que j'ai réalisé en tant que tout nouveau développeur`;
        codePorte.style.setProperty('display','block');
      } else {
        bulle.style.setProperty('visibility','hidden');
        open.style.setProperty('visibility','hidden');
        code.style.setProperty('visibility','hidden');
        codePorte.style.setProperty('display','none');
      }
      
      
      console.log(this.posX, this.posY)
      console.log("test")
    },

    open : function (){
      document.getElementById("tableau").style.setProperty("visibility", "visible")
    },
    close : function () {
      document.getElementById("tableau").style.setProperty("visibility", "hidden")
    },
    togglePC : function() {
      let error = document.getElementById("error");
      console.log("testpc")
      
      if(this.code == 1910) {
        this.revelePC = !this.revelePC
        error.innerHTML = ""
      } else {
        error.innerHTML = "Code incorrect, regardes bien le tableau juste à côté"
      }
    },
    next() {
      let errorPorte = document.getElementById("errorPorte");
      if (this.codePorte == "reservia") {
        this.$router.push("lvl2")
        errorPorte.innerHTML = ""
      } else {
        errorPorte.innerHTML = "Code incorrect, as-tu allumé l'ordinateur ?"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  
  #canvas {
    background-image: url("../assets/img/lvl1.png");
  }
  #tableau {
    position: absolute;
    top: 0%;
    left: 0%;
    bottom: 0%;
    right: 0%;
    background-image: url("../assets/img/esport_tab.jpg");
    background-size: 100%;
    visibility: hidden;
    z-index: 1002;
  }
  #open {
    position: absolute;
    margin: auto;
    top: 22%;
    left: 30%;
    color: black;
    background-color: white;
    border: black solid;
    border-radius: 5px;
    visibility: hidden;
    padding: 5px;
    z-index: 1001;
  }
  #close {
    position: absolute;
    right: 1%;
    top: 2%;
    padding: 5px;
  }
  #code {
    position: absolute;
    top: 15%;
    left: 10%;
    border: black solid;
    visibility: hidden;
    padding: 5px;
    border-radius: 5px;
    color: black;
    background-color: white;
    z-index: 1001;
  }
  #codeporte{
    position: absolute;
    top: 22%;
    left: 10%;
    border: black solid;
    display: none;
    padding: 5px;
    border-radius: 5px;
    color: black;
    background-color: white;
    z-index: 1001;
  }
  .transition {
    bottom: 5px;
    left: 290px;
  }
</style>