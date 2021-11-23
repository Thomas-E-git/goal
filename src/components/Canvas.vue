<template>
  <div>
    <div id="canvas" class="canvas" :style="cssProps">
      <User />
      <div id="bg-transi" v-if="transi"></div>
      <div id="bg-transii" v-if="transii"></div>
      <div id="usb" v-if="usbDisplay">
        <img src="../assets/img/usb.png" alt="clé usb" class="w-100">
      </div>
      <div id="overlay" v-if="carDisplay">
        <div id="car" >
          <img src="../assets/img/car.png" alt="voiture" class="w-100">
        </div>
      </div>
      <div id="overlayy" v-if="carrDisplay">
        <div id="carr" >
          <img src="../assets/img/car.png" alt="voiture" class="w-100">
        </div>
      </div>
      <div id="key" v-if="keyDisplay">
        <img src="../assets/img/car-key.png" alt="clé de la voiture" class="w-100">
      </div>
      <Codeportail v-bind:codeExact="codeExact" @portailIsOpen="verifyOpen"/>
      <Carleave v-bind:carLeave="carLeave" v-bind:leave="leave"/>
      <Bulle />
      <Tele v-bind:reveleTv="reveleTv" v-bind:togglePC="togglePC" v-bind:usbDisplay="usbDisplay" v-bind:link="link" v-bind:text="text" v-bind:linkk="linkk" v-bind:textt="textt" />
      <Transition v-bind:transiBot="transiBot" v-bind:transiLeft="transiLeft" v-bind:transition="transition"/>
      <Codeporte v-bind:codeExact="codeExact" v-bind:errorMessage="errorMessage" v-bind:nextLevel="nextLevel" />
      <PC1 v-bind:revelePC="revelePC" v-bind:togglePC="togglePC" v-bind:img="img" v-bind:link="link" v-bind:text="text" />
      <PCP v-bind:revelePCP="revelePCP" v-bind:togglePC="togglePC" v-bind:img="img" v-bind:link="link" v-bind:text="text" />
      <Smartphone v-bind:reveleSmartphone="reveleSmartphone" v-bind:togglePC="togglePC"/>
      <div id="openPC">
          <div id="modale"></div>
          <div id="open" class="h5 p-3">
            <p>{{openText}}</p>
            <button @click="togglePC()" class="mr-2">Oui</button><button class="ml-2">Non</button>
          </div>
      </div>
      <GoEnd />
    </div>
    <Buttons button1="Menu principal" button2="Recommencer le jeu" link1="/" link2="Aventure"/>
  </div>
</template>

<script>

import PC1 from '../components/PC1.vue'
import PCP from '../components/PCP.vue'
import Buttons from '../components/Buttons.vue'
import Bulle from '../components/Bulle.vue'
import User from '../components/User.vue'
import Transition from '../components/Transition.vue'
import Codeporte from '../components/Codeporte.vue'
import Tele from '../components/Tele.vue'
import Codeportail from '../components/Codeportail.vue'
import Carleave from '../components/Carleave.vue'
import Smartphone from '../components/Smartphone.vue'
import GoEnd from '../components/GoEnd.vue'


export default {
  name: 'Canvas',
  components: {
    PC1,
    Buttons,
    Bulle,
    User,
    Transition,
    Codeporte,
    Tele,
    PCP,
    Codeportail,
    Carleave,
    Smartphone,
    GoEnd
  },
  data : function() {
    return {
      revele: false,
      portailIsOpen: 'false'
    }
  },
  props: [
  'posX', 
  'posY',
  'revelePC',
  'revelePCP',
  'togglePC',
  'reveleSmartphone',
  'toggleSmartphone',
  'img', 
  'link', 
  'text', 
  'codeExact', 
  'errorMessage', 
  'nextLevel', 
  'bg', 
  'transiBot', 
  'transiLeft',
  'usbDisplay', 
  'reveleTv',
  'openText',
  'linkk',
  'textt',
  'carDisplay',
  'carrDisplay',
  'keyDisplay',
  'portailDisplay',
  'carLeave',
  'leave',
  'transi',
  'transii',
  'transition',
  ],

  computed: {
    cssProps() {
      return {
        '--bg': this.bg
      }
    }
  },
  methods: {
    verifyOpen : function() {
        this.$emit('portailIsOpen', {value : true})
    },
  },

  mounted() {
    let posX = this.posX;
    let posY = this.posY;
    let user = document.getElementById("user");
    user.style.setProperty('--posX', `${ posX }px`);
    user.style.setProperty('--posY', `${ posY }px`);
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/app.scss';
  .canvas {
    background-image: var(--bg);
  }
  #bg-transi {
    background-color: black;
    @include full-screen;
    display: none;
    z-index: 3000;
    animation: revele 2.5s forwards;
  }
  @keyframes revele {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  #bg-transii {
    background-color: black;
    @include full-screen;
    z-index: 3000;
    animation: disapear 5s forwards;
  }
  @keyframes disapear {
    0% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }

  #openPC {
    position: absolute;
    top: 0%;
    bottom: 0%;
    right: 0%;
    left: 0%;
    display: none;
  }
  #open {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    border: black solid;
    padding: 5px;
    border-radius: 5px;
    color: black;
    background-color: white;
  }
  #modale {
    position: absolute;
    top: 0%;
    bottom: 0%;
    right: 0%;
    left: 0%;
    opacity: 0.4;
    background-color: black;
  }
  #usb {
    position: absolute;
    top: 11%;
    left: 39%;
    width: 2.5%;
  }
  #car {
    position: absolute;
    bottom: 6%;
    left: 35%;
    width: 46%;
  }
  .car-move {
    animation: move 7s forwards ease-in;
  }
  @keyframes move {
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(200%)
    }
  }
  #overlay {
    overflow: hidden;
    position: absolute;
    top: 0%;
    bottom: 0%;
    right: 9%;
    left: 0%;
    }
  #carr {
    position: absolute;
    bottom: -2.5%;
    left: -50%;
    width: 46%;
    animation: movee 4s forwards ease-out;
  }
  @keyframes movee {
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(110%)
    }
  }
  #overlayy {
    overflow: hidden;
    position: absolute;
    top: 0%;
    bottom: 0%;
    right: 0%;
    left: 5.5%;
  }
  #key {
    position: absolute;
    top: 8%;
    left: 80%;
    width: 3%;
  }
</style>