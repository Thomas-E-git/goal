<template>
    <div id="end">
        <div id="canvas" class="canvas">
            <div v-if="video" class="video">
                <button class="my-1 btn-secondary text-primary" v-on:click="toggleVideo">Fermer la vidéo</button>
                <video controls >
                    <source src="../assets/vid/capture3.mp4"
                        type="video/mp4">
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
            <div class="avatar"><img src="../assets/img/end.png" alt="avatar du tutorial me représentant" class="w-100"></div>
            <div class="instructions">
                <div id="text" class="text h5 mb-5 text-primary bg-white">
                    <p> Merci aventurier ! <br>
                    <br>Avant que j'oublie, j'ai un dernier projet à te montrer, il s'agit du projet le plus complet que j'ai pu réaliser, incluant du front, back et de la base de données MySQL. C'est un forum de partage / réseau social intra-entreprise pour Groupomania </p>
                    <div class="h5"><button @click="toggleVideo" class="btn-secondary mr-3 mb-1 text-primary">vidéo de présentation</button><button class="btn-secondary"> <a class="text-decoration-none" href="https://github.com/Thomas-E-git/Projet7_ThomasEstupina_28042021" target="blank">code source</a></button></div>
                </div>
                <div class="my-3"><button class="h4 text-primary" @click="nextTuto" id="next">suivant</button><button class="h4 text-primary" id="closetuto" @click="closeTuto">Retourner au menu principal</button></div>
            </div>
        </div>
        <Buttons button1="Menu principal" button2="Recommencer le jeu" link1="/" link2="Aventure"/>
    </div>
</template>

<script>

import Buttons from '../components/Buttons.vue'

export default {
    name: 'Tutorial',
    components: {Buttons},
    props: ['activateAudio', 'declineAudio'],
    data : function() {
        return {
            i : -1,
            video: false
        }
    },
    methods: {
        async nextTuto() {
            let next = document.getElementById("next");
            let text = document.getElementById("text");
            let closeTuto = document.getElementById("closetuto");
            let instructions = [`<p> Je tiens à vous remercier d'être venu jusqu'à moi, d'avoir pris le temps d'apprendre à me connaître et de découvrir mes projets et réalisations à travers ce petit jeu que j'ai créé ! Vous avez la possibilité de visiter mon Portfolio dans le menu principal pour plus de détails sur mes différents projets.
            </p>`,`<p>Celà faisait des années, comme vous pouvez le voir, que j'attendais qu'un aventurier comme vous aie le courage de venir me chercher dans ce labyrinthe de données. <br> J'espère que vous avez apprécié la partie autant que j'ai apprécié la créer !
            </p>`, `<p>C'est ici que nos chemins se séparent, j'espère vous revoir très vite ! maintenant que je suis libéré de ce monde virtuel, je vais pouvoir accomplir de nouveaux projets, avec des personnes qui me laisseront cette chance je l'espère ! <br> Peut être avec vous ?</p>`];
            const response = await (this.i += 1)
            text.innerHTML = instructions[response];
            if (response == 2) {
                next.style.setProperty('display', 'none')
                closeTuto.style.setProperty('display', 'inline-block')
            }    
        },
        closeTuto() {
            this.$router.push('/')
        },
        toggleVideo : function() {
            this.video = !this.video
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/app.scss';
    .canvas {
        background-color: black;
        z-index: 1001;
        overflow: hidden;
    
        &:before {
            content: "";
            @include full-screen;
            background-color: black;
            z-index: 3000;
            animation: close 3s forwards;
        }
    }
    @keyframes close {
        0% {
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
        top: 20%;
        left: -4.5%;
        transform: rotate(90deg);
    }
    .avatar {
        position: absolute;
        bottom: -7%;
        left: -10%;
        width: 52%;
    }
    .instructions {
        position: absolute;
        left: 30%;
        top: 13%;
        width: 60%;
        letter-spacing: 0.1em;
    }
    #closetuto {
        display: none;
    }
    .video {
        background-color: black;
        @include full-screen;
        z-index: 3001;
    }
    video {
      width: 95%;
      
    }
  
</style>