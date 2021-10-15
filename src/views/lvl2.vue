<template>
  <div>
    <div id="canvas" class="canvas">
      <h1 class="text-secondary">NIVEAU 2 A FAIRE</h1>
    </div>
    <Buttons button1="Menu principal" button2="Recommencer le jeu" link1="/" link2="Aventure"/>
  </div>
</template>
<script>

import Buttons from '../components/Buttons.vue'
export default {
    name : 'lvl2',
    components: {
      Buttons
  },
}
</script>

<style lang="scss" scoped>
  
</style>
