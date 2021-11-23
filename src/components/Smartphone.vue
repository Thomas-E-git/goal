<template>
    <div id="smartphone-table" class="container smartphone-table" v-if="reveleSmartphone">
        <div class="note">
            <p class="h6">Le projet 5 est une API sécurisée pour une application d'avis gastronomiques sur des sauces. <br> Il inclut la gestion de l'authentification, de création et gestion d'items (sauces) et un système de like avec MongoDB et Node. <br> Lien du projet : <a href="https://github.com/Thomas-E-git/Projet6_ThomasEstupina_31032021" target="blank">Code source du projet "Piquante"</a></p> 
        </div>
        <button @click="togglePC" class="toggle">Reposer le Smartphone</button>
        <div>
            <img src="../assets/img/smartphone.png" alt="smartphone" class="smartphone">
        </div>
        <div class="smartphone-screen d-flex flex-column justify-content-center">
            <img src="../assets/img/play.png" alt="bouton play" class="play mx-auto" @click="toggleVideo">
            <p class="h5 text-white">Vidéo projet Piquante</p>
        </div>
        <div v-if="video" class="video">
            <button class="my-1" v-on:click="toggleVideo">Fermer la vidéo</button>
            <video controls autoplay>
                <source src="../assets/vid/capture2.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
    </div>
</template>

<script>

export default {
    name: "Smartphone",
    data: function () {
        return {
            video: false
        }
    },
    props: ['reveleSmartphone', 'togglePC'],
    methods : {
        toggleVideo : function() {
            this.video = !this.video
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/app.scss';
    .smartphone-table {
        background-color: rgb(187, 187, 187);
        @include full-screen;
        z-index: 2000;
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
    .toggle {
        position: absolute;
        top: 2%;
        right: 2%;
    }
    .smartphone {
        width: 58%;
    }
    .smartphone-screen {
        position: absolute;
        top: 15%;
        bottom: 15.2%;
        left: 37.6%;
        width: 239px;
        background-color: rgb(75, 75, 75);
        cursor: grab;
    }
    .note {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        position: absolute;
        left: -1%;
        width: 30%;
        top: 30%;
        transform: rotate(-12deg);
        background-color: rgb(202, 202, 5);
        z-index: 1;
        padding: 15px;
    }
    .play {
        width: 50px;
    }
    .video {
      background-color: black;
      @include full-screen;
      z-index: 4000;
    }
    video {
      width: 95%;
    }
</style>
