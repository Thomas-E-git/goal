<template>
  <div id="tutorial" class="text-secondary tutorial">
    <div class="modale" id="modale">
      <div class="audioset d-flex flex-column justify-content-center text-primary">
        <h2 class="my-3 mx-3">Voulez-vous activer le son du jeu ?</h2>
        <p>Vous avez la possibilité d'activer ou désactiver le son à tout moment à l'aide du panel de commandes en haut à droite, vous pouvez également régler le volume initialement réglé à 10%</p>
        <div class="my-3"><button class="h4 mx-3 text-primary btn-secondary" v-on:click="activateAudio">Oui</button> <button class="h4 mx-3 text-primary btn-secondary" @click="declineAudio">Non</button></div>
      </div>
    </div>
    <div class="avatar jump"><img src="../assets/img/tuto.png" alt="avatar du tutorial me représentant" class="w-100"></div>
    <div class="instructions ">
      <div id="text" class="text h5 mb-5 text-primary bg-white">
        <p> Bienvenue aventurier ! <br><br> J'ai besoin de votre aide car j'ai fait une terrible erreur en créant ce jeu, une faute d'organisation, j'ai créé chaque pièce de mon propre monde virtuel, mais je n'ai pas pensé à sauvegarder les codes d'accès au fur et à mesure !</p>
      </div>
      <div class="my-3"><button class="h4 text-primary" @click="nextTuto" id="next">suivant</button><button class="h4 text-primary" id="closetuto" @click="closeTuto">J'ai compris, c'est parti </button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tutorial',
  props: ['activateAudio', 'declineAudio'],
  data : function() {
    return {
      i : -1
    }
  },
  methods: {
    async nextTuto() {
      let next = document.getElementById("next");
      let text = document.getElementById("text");
      let closeTuto = document.getElementById("closetuto");
      let instructions = [`<p> Heureusement, j'ai prévu une solution de secours qui permet de sortir d'ici mais il faut être 2 pour activer le mécanisme. <br> Il faut alors que vous traversiez les différentes pièces de ce monde pour me rejoigne afin que l'on puisse sortir d'ici ensemble !</p>`,`<p>Dans chaque pièces, il y'a des éléments du décors avec lesquels vous pouvez interagir, vous découvrirez alors qui je suis, mais surtout, vous trouverez le moyen de passer à la pièce suivante, alors ne négligez aucun élément, il peut être utile.
      </p>`,`<p>Aussi, dans chaque pièce se trouve un objet éléctronique ou informatique, ils vous permettront d'accéder à mes projets professionnels réalisés au fur et à mesure de mon parcours, et ils peuvent cacher des indices.
      </p>`, `<p>Pour intéragir avec les éléments, vous devez vous placer devant et vous laisser guider. <br> Pour déplacer votre joueur, utilisez les flèches de votre clavier <br> Bonne chance !</p>`];
      const response = await (this.i += 1)
      text.innerHTML = instructions[response];
      if (response == 3) {
        next.innerHTML = "J'ai compris, c'est parti"
        next.style.setProperty('display', 'none')
        closeTuto.style.setProperty('display', 'inline-block')
      }    
    },
    closeTuto() {
      let tutorial = document.getElementById("tutorial");
      tutorial.classList.add("disapear");
      setTimeout(()=>{this.$router.push('lvl1')}, 1500);
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
    overflow: hidden;
    transition: opacity 1.5s;
  }
  .disapear {
    opacity: 0;
  }
  .text {
    border-radius: 50px;
    padding: 5px;
    padding-top: 20px;
  }
  .text::after {
    content: '';
    border-left:20px solid transparent;
    border-right:20px solid transparent;
    border-top: 20px solid #ffffff;
    position: absolute;
    top: 25%;
    right: -5%;
    transform: rotate(270deg);
  }
  .avatar {
    position: absolute;
    bottom: -5%;
    right: -20%;
    width: 60%;
  }
  .instructions {
    position: absolute;
    left: 8%;
    top: 30%;
    width: 60%;
    letter-spacing: 0.1em;
  }
  .audioset {
    position: absolute;
    top:50%; 
    left:50%; 
    transform:translate(-50%, -50%);
    width: 65%;
    background-color: white;
    z-index: 2000;
    border: solid #d13cd0;
  }
  #closetuto {
    display: none;
  }
  .modale {
    position: absolute;
    top: 0%;
    right: 0%;
    left: 0%;
    bottom: 0%;
    background-color: rgb(0, 0, 0, 0.9);
    z-index: 2000;
    
  }
  .jump {
    animation: jump 2000ms infinite ease-in-out forwards;
  }
  @keyframes jump {
    0%{
      transform: translateX(0px) translateY(0px);
      
    }
    50%{
      transform: translateX(-12px) translateY(8px);
      
    }
    100%{
      transform: translateX(0px) translateY(0px);
    }
  }
</style>