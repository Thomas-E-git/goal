<template>
    <img src="../assets/img/user.png" id="user" alt="user logo" :style="cssProps">
</template>

<script>
export default {
    name: "User",
    props: ['posX','posY'],
    computed: {
        cssProps() {
            return{
                '--posX':  this.posX + "px",
                '--posY':  this.posY + "px",
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#user {
    width: 50px;
    position: absolute;
    bottom: var(--posY);
    left: var(--posX);
    z-index: 999;
  }
</style>