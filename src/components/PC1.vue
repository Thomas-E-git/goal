<template>
  <div class="PC1" v-if="revele">
    <button class="mt-3" v-on:click="toggle">Eteindre l'ordinateur</button>
    <div id="projet" class="projet btn" @click="openProject" >router</div>
    <div id="openprojet"></div>
  </div>
</template>

<script>


export default {
  name: 'PC1',
  props: ['revele', 'toggle', 'reveleLoader'],
  methods : {
    openProject : function() {
      if (window.confirm("Vous allez être redirigé (dans une nouvelle fenêtre) vers la page Github de mon premier projet en tant que Développeur web, il s'agit une intégration web")) {
        window.open("https://thomas-e-git.github.io/Projet2_ThomasEstupina_02112020/");
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
      background-image: url('../assets/img/PC.png');
      background-size: 100%;
    }
    .projet {
      position: absolute;
      top: 125px;
      left: 5px;
      width: 110px;
      height: 100px;
    }
</style>