<template>
    <div id="bulle" class="text-center">
        <div id="modale"></div>
        <div id="bulle-text"></div>
    </div>
</template>

<script>


export default {
    name: "Bulle",
}
</script>

<style lang="scss" scoped>
    #bulle {
        position: absolute;
        top: 0%;
        bottom: 0%;
        right: 0%;
        left: 0%;
        visibility: hidden;
        z-index: 1000;
    }

    #bulle-text {
        background-color: white;
        position: absolute;
        top: 2%;
        right: 2%;
        left: 2%;
        padding: 7px;
        color: black;
        border: black solid;
        border-radius: 5px;
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

</style>