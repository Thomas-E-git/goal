<template>
    <div id="Tv" class="container tv" v-if="reveleTv">
      <button class="mt-3" v-on:click="togglePC">Eteindre la télé</button>
      <div class="h2 text-left text-white ml-3 mb-1">USB Mode</div>
      <div class="text-center d-flex flex-column justify-content-center tv-content text-white h3" v-if="usbDisplay">Aucune entrée USB n'est détéctée</div>
      <div class="tv-content text-white row" v-if="!usbDisplay">
        <div class="text-left h5"><span class="h4">Périphérique détécté</span> : USB de Thomas ( zyra )</div>
        <div class="d-flex mt-5" v-if="!projectOpened"> 
          <div class="w-25 mr-5" @click="projectView">
            <img src="../assets/img/folder.png" alt="" class="w-100">
            <p>Projet 3</p>
          </div>
          <div class="w-25 ml-3">
            <img src="../assets/img/folder.png" alt="" class="w-100">
            <p>Config.files</p>
          </div>
        </div>
        <div v-if="projectOpened" class="row mt-1">
          <button class="text-left btn btn-secondary" @click="projectView">Retour</button>
          <div class="d-flex mt-3">
            <div class="w-25 mr-5" @click="openProject">
              <img src="../assets/img/web-link.png" alt="" class="w-100">
              <p>Site avant Optimisation</p>
            </div>
            <div class="w-25" @click="openProject1">
              <img src="../assets/img/web-link.png" alt="" class="w-100">
              <p>Site Optimisé</p>
            </div>
            <div class="note p-3 ml-5">
              <p class="h3 text-secondary">Notes :</p>
              <p>Mon projet numéro 3 est une optimisation de site web grâce aux actions portées sur le SEO et l'accessibilité du site, comme le contraste, la structure HTML ou encore le balisage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    name: "Tele",
    data: function () {
      return {
        projectOpened: false
      }
    },
    props: ['reveleTv', 'togglePC', 'link', 'text', 'usbDisplay', 'linkk', 'textt'],
    methods : {
    openProject : function() {
      if (window.confirm(this.text)) {
        window.open(this.link);
      }
    },
    openProject1 : function() {
      if (window.confirm(this.textt)) {
        window.open(this.linkk);
      }
    },
    projectView : function() {
      let tele = document.getElementById("Tv");
      tele.style.removeProperty("animation");
      this.projectOpened = !this.projectOpened;
      
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/app.scss';
    .tv {
        background-color: rgb(43, 43, 43);
        @include full-screen;
        z-index: 2000;
        cursor: grab;
        & ::before {
          content: "";
          @include full-screen;
          background-color: black;
          opacity: 1;
          animation: disapear 2s forwards;
          }
        }
        @keyframes disapear {
          0% {
            opacity: 1;
          }
          98% {
            z-index: 2001;
          }
          100% {
            opacity: 0;
            z-index: -1;
           
          }
        }
      .tv-content {
        width: 80%;
        height: 70%;
        margin: auto;
      }
      .note {
        width: 38%;
        text-align: justify;
      }

</style>
