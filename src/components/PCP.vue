<template>
  <div class="PCP" id="PCP" v-if="revelePCP" :style="cssProps">
    <div id="loader" class="tableau loader d-flex flex-column justify-content-center">
        <p class="h3 text-white">Bienvenue sur le PC de Thomas</p>
        <div class="lds-roller mx-auto mt-3"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <button class="mt-3" v-on:click="togglePC">Eteindre l'ordinateur</button>
    <div id="projet" class="projet btn" @click="toggleVideo"></div>
    <a href="https://github.com/Thomas-E-git/Projet5_ThomasEstupina_26022021" target="blank" class="git-link">Lien Github projet Oricamera</a>
    <div class="open-recette btn" @click="toggleRecette"></div>
    <div id="recette" class="recette bg-white position-relative p-3" v-if="recette">
      <button @click="toggleRecette" class="close-recette">X</button>
      <p class="h3">Recette du Boeuf Bourguignon pour 6 personnes</p>
      <p class="h5 text-left">INGRÉDIENTS :</p> 
        <div class="d-flex justify-content-between h6">
          <ul class="list-style-type-none text-left">
            <li>Boeuf pour Bourguignon - 1.5kg</li>
            <li>Beurre - 60g</li>
            <li>Carotte - 2</li>
          </ul>
          <ul class="list-style-type-none text-left">
            <li>Bouillon de boeuf - 50cl</li>
            <li>Bouquet garni - 1</li>
            <li>Lardons - 200g</li>
          </ul>
          <ul class="list-style-type-none text-left">
            <li>Poivre</li>
            <li>Petits oignons - 10</li>
            <li>Ail - 2 gousse</li>
          </ul>
          <ul class="list-style-type-none text-left">
            <li>Vin rouge Bourgogne - 50cl</li>
            <li>Champignons - 250g</li>
            <li>Sel</li>
          </ul>
        </div>
        <p class="h5 text-left">PRÉPARATION :</p>
        <div class="h6 text-left">
          <p>Tailler le bœuf en petits morceaux. Peler l'ail et les oignons entiers. Éplucher et couper les carottes en rondelles > 2mm.</p>
          <p>Dans une grande cocotte, faire fondre le beurre. Ajouter les oignons entiers et les lardons. Faire revenir en remuant constamment. Lorsqu'ils sont dorés, les retirer avec un écumoire, et réserver.</p>
          <p>Dans la même cocotte, faire revenir les morceaux de viande à feu vif. Ajouter les carottes, et faire revenir encore 5 mn.</p>
          <p>Lorsque la viande est bien dorée, saupoudrer de farine (60g) et laisser roussir en remuant</p>
          <p>Verser le bouillon. Bien gratter les sucs. Remettre les lardons et les oignons dans la cocotte. Verser le vin rouge. Saler, poivrer et ajouter le bouquet garni et les gousses d'ail écrasées. Porter à ébullition. Couvrir et laisser mijoter doucement pendant 3 heures.</p>
          <p>Au bout de ce temps, ajouter les champignons émincés, et mettre à cuire encore une demi-heure. Retirer le bouquet garni et verser dans un plat. Servir avec des pâtes ou des pommes de terre.</p>
        </div>
    </div>
    <div v-if="video" class="video">
      <button class="my-1" v-on:click="toggleVideo">Fermer la vidéo</button>
      <video controls >
        <source src="../assets/vid/capture.mp4"
              type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  </div>
</template>

<script>


export default {
  name: 'PCP',
  data() {
    return {
      video: false,
      recette: false
    }
  },
  props: ['revelePCP', 'togglePC', 'img', 'link', 'text'],
  methods : {
    toggleVideo : function() {
      this.video = !this.video
    },
    toggleRecette : function() {
      this.recette = !this.recette
    }
  },
  computed: {
    cssProps() {
      return {
        '--img': this.img
      }
    }
  }
}
</script>


<style scoped lang="scss">
@import '../assets/app.scss';
    .PCP {
      position: absolute;
      top: 0%;
      left: 0%;
      right: 0%;
      bottom: 0%;
      z-index: 1000;
      background-size: 100%;
      background-image: var(--img);
      z-index: 2000;
    }
    .video {
      background-color: black;
      @include full-screen;
    }
    video {
      width: 95%;
    }
    .projet {
      position: absolute;
      top: 125px;
      left: 5px;
      width: 110px;
      height: 100px;
    }
    .git-link {
      position: absolute;
      top: 34.5%;
      right: 0.9%;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.85rem;
      font-weight: bold;
    }
    .open-recette {
      position: absolute;
      top: 235px;
      left: 120px;
      width: 100px;
      height: 90px;
    }
    .close-recette {
      position: absolute;
      top: 3%;
      right: 1%;
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
      animation: close 3s forwards ; 
  }
  @keyframes close {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      80% {
        opacity: 1;
        transform: scale(1);
      }
      90% {
        opacity: 0;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(0);
      }
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