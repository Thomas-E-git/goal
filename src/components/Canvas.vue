<template>
  <div>
    <div id="canvas" class="canvas" :style="cssProps">
      <User />
      <div id="usb" v-if="usbDisplay">
        <img src="../assets/img/usb.png" alt="clé usb" class="w-100">
      </div>
      <Bulle />
      <Tele v-bind:reveleTv="reveleTv" v-bind:togglePC="togglePC" v-bind:usbDisplay="usbDisplay" v-bind:link="link" v-bind:text="text" v-bind:link1="link1" v-bind:text1="text1" />
      <Transition v-bind:transiBot="transiBot" v-bind:transiLeft="transiLeft"/>
      <Codeporte v-bind:codeExact="codeExact" v-bind:errorMessage="errorMessage" v-bind:nextLevel="nextLevel" />
      <PC1 v-bind:revelePC="revelePC" v-bind:togglePC="togglePC" v-bind:img="img" v-bind:link="link" v-bind:text="text" />
      <PCP v-bind:revelePCP="revelePCP" v-bind:togglePC="togglePC" v-bind:img="img" v-bind:link="link" v-bind:text="text" />
      <div id="openPC">
          <div id="modale"></div>
          <div id="open" class="h5 p-3">
            <p>{{openText}}</p>
            <button @click="togglePC()" class="mr-2">Oui</button><button class="ml-2">Non</button>
          </div>
      </div>
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
    PCP
  },
  data : function() {
    return {
      revele: false,
    }
  },
  props: [
  'posX', 
  'posY',
  'revelePC',
  'revelePCP',
  'togglePC',
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
  'link1',
  'text1'
  ],

  computed: {
    cssProps() {
      return {
        '--bg': this.bg
      }
    }
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
    .canvas {
      background-image: var(--bg);
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

</style>