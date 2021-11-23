<template>
    <div id="carleave" class="p-3" v-if="carLeave">
        <p>Voulez-vous partir en voiture ?</p>
        <button @click="leave()" class="mr-2">Oui</button><button class="ml-2">Non</button>
    </div>
</template>

<script>

export default {
    name: "Carleave",
    props: ['carLeave', 'leave'],
}
</script>

<style lang="scss" scoped>

    #carleave{
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        border: black solid;
        padding: 5px;
        border-radius: 5px;
        color: black;
        background-color: white;
        z-index: 1001;
    }
</style>

