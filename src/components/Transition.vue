<template>
    <div class="transition" id="transition" v-if="transition" :style="cssProps"></div>
</template>

<script>


export default {
    name: 'Transition',
    props: ['transiBot','transiLeft','transition'],
    computed: {
        cssProps() {
            return {
                '--bot': this.transiBot,
                '--left': this.transiLeft
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    .transition {
        position:absolute;
        bottom: var(--bot); //70
        left: var(--left); //230
        width: 70px;
        height: 70px;
        border-radius: 50%;
        box-shadow:0 0 0 1000px black, inset 0 0 0 black;
        animation: grow 2000ms ease-in forwards;
        animation-delay: 1.5s;
        transform: scale(1);
        
        @keyframes grow {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(30);
            }
        }
    }
</style>