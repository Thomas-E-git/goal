<template>
    <div id="go-end">
            <div id="modale"></div>
            <div id="open" class="h5 p-3">
                <p>Je suis venu en vélo jusqu'ici avant de me rendre compte de mon erreur, celà fait de longues années, j'ai eu tout le temps de m'occuper du jardin et de mes plantes, j'espère que vous êtes allé voir mon vélo et les plantes à coté du potager ! <br><br> Voulez-vous que l'on parte d'ici ?</p>
                <button @click="endGame" class="mr-2">Oui</button><button class="ml-2">Non</button>
          </div>
      </div>
</template>

<script>

export default {
    name: "GoEnd",
    methods: {
        endGame() {
            this.$router.push('End')
        }
    }
}
</script>


<style lang="scss" scoped>

    #modale {
        position: absolute;
        top: 0%;
        bottom: 0%;
        right: 0%;
        left: 0%;
        opacity: 0.4;
        background-color: black;
    }
    #go-end {
        position: absolute;
        top: 0%;
        bottom: 0%;
        right: 0%;
        left: 0%;
        display: none;
        z-index: 3000;
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

</style>