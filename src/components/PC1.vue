<template>
  <div class="PC1" id="PC1" v-if="revelePC" :style="cssProps">
    <div id="loader" class="tableau loader d-flex flex-column justify-content-center">
        <p class="h3 text-white">Bienvenue sur le PC de Thomas</p>
        <div class="lds-roller mx-auto mt-3"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <button class="mt-3" v-on:click="togglePC">Eteindre l'ordinateur</button>
    <div id="projet" class="projet btn" @click="openProject"></div>
    <div id="openprojet"></div>
  </div>
</template>

<script>


export default {
  name: 'PC1',
  props: ['revelePC', 'togglePC', 'img', 'link', 'text'],
  methods : {
    openProject : function() {
      if (window.confirm(this.text)) {
        window.open(this.link);
      }
    },
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


<style scoped>
    .PC1 {
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
    .projet {
      position: absolute;
      top: 125px;
      left: 5px;
      width: 110px;
      height: 100px;
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