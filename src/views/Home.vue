<template>
<div class="">
  <div class="home">
    <div class="canvas bg-secondary text-primary">
      <h1 class="h3 my-3">Bonjour Aventurier !</h1>
      <p>Je m'appelle Thomas, je suis moi-même un jeune aventurier, il y'a quelques mois je me suis lancé le périlleux défi de devenir développeur web
        <br> Quelle meilleure manière de me présenter qu'en le faisant sous forme de jeu ?
        <br> <br> Deux chemins se présentent à toi, tu peux apprendre à me connaître de manière ludique à travers un min jeu que j'ai crée, tu y verras alors différents aspects de ma personnalité, mes passions, mes habitudes mais aussi mes projets proffessionnels, en bref, tu sauras tout !! (ou presque)
        <br> Si tel est ton choix et ton envie, rejoins moi vite dans le mode Aventure en cliquant sur le bouton juste en dessous !
        <br><br> Tu as aussi la possibilité de visiter mon portfolio pour voir mes différents projets proffessionnels réalisés au cours de mon apprentissage et dès mon entrée dans le vaste monde du développement
        <br><br>
        Il ne me reste plus qu'à te souhaiter une bonne expèrience dans mon monde
        <br> Merci pour ta visite, à très vite !
        <br> Oh ! j'oubliais, tu peux me contacter directement par mail ou visiter mon profil proffessionnel en suivant ces liens:
      </p>
      <button><a href="https://www.linkedin.com/in/thomas-estupina-147790162/" target="_blank">linkedin</a></button> <button><a href="mailto:thomas.estupina@gmail.com">Me contacter par mail</a></button>
    </div>
    <Buttons button1="Aventure" button2="Portfolio" link1=Aventure link2=""/>
  </div>
</div>
  
</template>

<script>
import Buttons from "../components/Buttons.vue"
export default {
  name: 'Home',
  components: {
    Buttons
  }
}
</script>

<style lang="scss">
  .canvas {
    width: 960px;
    height: 540px;
    margin: auto;
    border: solid #5ecae4;
    position: relative;
    background-size: 100%;
    overflow: hidden;
  }
</style> >
  

