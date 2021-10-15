<template>
  <div>
    <div id="canvas" class="canvas">
      <div id="tutorial" class="text-secondary tutorial" v-if="revele1">
        <h1 class="h2">Bienvenue dans mon monde !</h1>
        <p class="text-white">
          J'ai besoin de ton aide car j'ai fait une erreur en créant ce jeu, une faute d'organisation, j'ai crée chaque pièce de mon propre monde virtuel, mais je n'ai pas pensé à sauvegarder les codes d'accès au fur et à mesure !
          <br> Heureusement, j'ai prévu une solution de secours qui permet de sortir d'ici mais il faut être 2 pour activer le mécanisme.
          <br><br> Il faut alors que tu traverses les différentes pièces de ce monde et que tu me rejoigne afin que l'on puisse sortir d'ici ensemble !
          <br> Dans chaque pièces, il y'a des éléments du décors avec lesquels tu peux intéragir, tu découvrira alors qui je suis, mais surtout, tu trouvera le moyen de passer à la pièce suivante, alors ne néglige aucun élément, il peut être utile.
          <br><br> Pour intéragir avec les éléments, tu dois te placer devant et te laissé guider.
          <br> Aussi, dans chaque pièce se trouve un objet éléctronique ou informatique, ils te permettront d'accéder à mes projets professionnels réalisés au fur et à mesure de mon parcours, et ils peuvent cacher des indices.
          <br><br> Pour déplacer ton joueur, utilise les flèches de ton clavier, ou les touches Z,Q,S,D, Veille bien à cliquer sur la fenêtre de jeu, sinon tu pourras cliquer sur toutes les touches que tu veux, rien ne se passera ! Bonne chance
        </p>
        <div>
          <img src="../assets/img/user.png" class="col-1 jump" alt="">
          <button class="start" v-on:click="toggle1">démarrer le jeu</button>
        </div>
      </div>
      <img src="../assets/img/user.png" id="user" alt="user logo">
      <div id="bulle" class="text-center"></div>
      <div id="tableau">
        <button id="close" v-on:click="close">Fermer le tableau</button>
      </div>
      <div id="open" class="text-center">
        <p>Veux-tu voir le tableau ?</p>
        <button class="mr-3" v-on:click="open"> oui </button> <button> non </button>
      </div>
      <div id="code">
        <label for="code">Entrez le code d'accès : </label>
        <input type="text" id="codeinput" class="ml-3 text-center" name="code" v-model="code" onfocus="if(this.value == '1910')this.value = '';">
        <input type="submit" value="Valider" @click="toggle();launchLoader();">
        <p id="error" class="text-danger h6 text-left"></p>
      </div>
      <div id="codeporte">
        <label for="codePorte">Entrez le code d'accès : </label>
        <input type="text" id="codeinput1" class="ml-3 text-center" name="codePorte" v-model="codePorte" onfocus="if(this.value == 'reservia')this.value = '';">
        <input type="submit" value="Valider" @click="next">
        <p id="errorPorte" class="text-danger h6 text-left"></p>
      </div>
      <div id="loader" class="tableau loader d-flex flex-column justify-content-center">
        <p class="h3 text-white">Bienvenue sur le PC de Thomas</p>
        <div class="lds-roller mx-auto mt-3"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
      <PC1 v-bind:revele="revele" v-bind:toggle="toggle"/>
    </div>
    <Buttons button1="Menu principal" button2="Recommencer le jeu" link1="/" link2="Aventure"/>
  </div>
</template>

<script>

import PC1 from '../components/PC1.vue'
import Buttons from '../components/Buttons.vue'

export default {
  name: 'Aventure',
  components: {
    PC1,
    Buttons
  },
  data : function() {
    return {
      code : null,
      revele: false,
      revele1: true,
      codePorte : null,
    }
  },

  mounted() {
    let posX = 300;
    let posY = 15;
    let user = document.getElementById("user");
    let bulle = document.getElementById("bulle");
    let open = document.getElementById("open");
    let code = document.getElementById("code");
    let codePorte = document.getElementById("codeporte");
    user.style.setProperty('--posX', `${ posX }px`);
    user.style.setProperty('--posY', `${ posY }px`);
    document.addEventListener("keydown", keyDownHandler, false);
    function keyDownHandler(e) {
       
      if((e.keyCode == 39 || e.keyCode == 68) && ((posY >= 0 && posY <= 65 && posX <= 400)
      || (posY >= 65 && posY <= 485 && posX <= 690)
      )) {
        posX += 10;
        user.style.setProperty('--posX', `${ posX }px`);
      }

      else if((e.keyCode == 37 || e.keyCode == 81) && ((posY >= 0 && posY <= 265 && posX >= 220)
      || (posY <= 485 && posY >= 265 && posX >= 510)
      )) {
        posX -= 10;
        user.style.setProperty('--posX', `${ posX }px`);
      }

      else if((e.keyCode == 40 || e.keyCode == 83) && ((posX >= 210 && posX <= 410 && posY >= 15)
      || (posX <= 700 && posX >= 210 && posY >= 75)
      )) {
        posY -= 10;
        user.style.setProperty('--posY', `${ posY }px`);
      }

      else if((e.keyCode == 38 || e.keyCode == 90) && ((posX >= 210 && posX <= 510 && posY <= 255)
      || (posX <= 700 && posX >= 500 && posY <= 475)
      )) {
          posY += 10;
          user.style.setProperty('--posY', `${ posY }px`);
      }
      console.log(posX, posY)
      if (posX <= 250 && posY >= 235) {
        bulle.style.setProperty('visibility','visible');
        bulle.innerHTML = "Il semblerait que l'ordinateur soit vérouillé ! C'est un code à 4 chiffres, J'ai laissé un indice : 'tableau jaune E-sport'";
        code.style.setProperty('visibility','visible');
      } else if (posX <= 440 && posX >= 390 && posY == 265) {
        bulle.style.setProperty('visibility','visible');
        bulle.innerHTML = `
        Quel joli tableau ! Je suis un adepte d'E-sport, J'aime jouer aux jeux et regarder les compétitions en ligne qui rassemblent des dixaines de milliers de spéctateurs et viewers, J'ai déjà participé à plusieurs évenements majeurs et j'espère pouvoir le refaire !`;
        open.style.setProperty('visibility','visible')
      } else if ((posX <= 630 && posX >= 560 && posY >= 465)) {
        bulle.style.setProperty('visibility','visible');
        bulle.innerHTML = `
        Pour passer à l'étape suivante, tu vas devoir trouver le code secret, il est composé de 8 lettres, c'est le nom du premier site de réservation en ligne que j'ai réalisé en tant que tout nouveau développeur`;
        codePorte.style.setProperty('visibility','visible');
      } else {
        bulle.style.setProperty('visibility','hidden');
        open.style.setProperty('visibility','hidden');
        code.style.setProperty('visibility','hidden');
        codePorte.style.setProperty('visibility','hidden');
      }
    }
  },
  methods: {
    open : function (){
      document.getElementById("tableau").style.setProperty("visibility", "visible")
    },
    close : function () {
      document.getElementById("tableau").style.setProperty("visibility", "hidden")
    },
    toggle : function() {
      let error = document.getElementById("error");
      
      if(this.code == 1910) {
        this.revele = !this.revele
        error.innerHTML = ""
      } else {
        error.innerHTML = "Code incorrect, regardes bien le tableau juste à côté"
      }
    },
    launchLoader : function() {
      let loader = document.getElementById("loader");
      if(this.code == 1910) {
        loader.style.setProperty('visibility', 'visible')
        setTimeout(function(){loader.style.setProperty('visibility', 'hidden')}, 3000)
      }
    },
    toggle1 : function() {
      this.revele1 = !this.revele1
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
  .tutorial {
    opacity: 1;
    position: absolute;
    top: 0%;
    left: 0%;
    bottom: 0%;
    right: 0%;
    background-color: black;
    z-index: 1001;
  }
  #canvas {
    background-image: url("../assets/img/lvl1.png");
    background-size: 100%;
    position: relative;
  }
  #user {
    width: 50px;
    position: absolute;
    bottom: var(--posY);
    left: var(--posX);
    z-index: 999;
  }
  #bulle {
    position: absolute;
    top: 0%;
    width: 100%;
    color: black;
    background-color: white;
    border: black solid;
    border-radius: 5px;
    visibility: hidden;
    padding: 3px;
    z-index: 1000;
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
    top: 13%;
    left: 30%;
    color: black;
    background-color: white;
    border: black solid;
    border-radius: 5px;
    visibility: hidden;
    padding: 5px;
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
  }
  #codeporte{
    position: absolute;
    top: 15%;
    left: 10%;
    border: black solid;
    visibility: hidden;
    padding: 5px;
    border-radius: 5px;
    color: black;
    background-color: white;
  }

  .jump {
    animation: jump 1000ms infinite ease-in-out;
    animation-play-state: running;
  }
  @keyframes jump {
    0%{
      transform: translateY(15px);
    }
    100%{
      transform: translateY(-15px);
    }
  }
   .loader {
    background-image: none;
    background-size: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    right: 0%;
    left: 0%;
    background-color: rgb(20, 132, 223);
    z-index: 1005;
    visibility: hidden;
  }
      .lds-roller {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-roller div {
      animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 40px 40px;
    }
    .lds-roller div:after {
      content: " ";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #fff;
      margin: -4px 0 0 -4px;
    }
    .lds-roller div:nth-child(1) {
      animation-delay: -0.036s;
    }
    .lds-roller div:nth-child(1):after {
      top: 63px;
      left: 63px;
    }
    .lds-roller div:nth-child(2) {
      animation-delay: -0.072s;
    }
    .lds-roller div:nth-child(2):after {
      top: 68px;
      left: 56px;
    }
    .lds-roller div:nth-child(3) {
      animation-delay: -0.108s;
    }
    .lds-roller div:nth-child(3):after {
      top: 71px;
      left: 48px;
    }
    .lds-roller div:nth-child(4) {
      animation-delay: -0.144s;
    }
    .lds-roller div:nth-child(4):after {
      top: 72px;
      left: 40px;
    }
    .lds-roller div:nth-child(5) {
      animation-delay: -0.18s;
    }
    .lds-roller div:nth-child(5):after {
      top: 71px;
      left: 32px;
    }
    .lds-roller div:nth-child(6) {
      animation-delay: -0.216s;
    }
    .lds-roller div:nth-child(6):after {
      top: 68px;
      left: 24px;
    }
    .lds-roller div:nth-child(7) {
      animation-delay: -0.252s;
    }
    .lds-roller div:nth-child(7):after {
      top: 63px;
      left: 17px;
    }
    .lds-roller div:nth-child(8) {
      animation-delay: -0.288s;
    }
    .lds-roller div:nth-child(8):after {
      top: 56px;
      left: 12px;
    }
    @keyframes lds-roller {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  
</style>