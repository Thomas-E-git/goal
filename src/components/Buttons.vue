<template>
    <div class="d-flex justify-content-center mx-auto mt-5 pb-5 buttons">
        <button @click="goTo1" class="button btn-secondary h1 mr-5">{{button1}}</button>
        <button @click="goTo2" class="button btn-secondary h1 ml-5">{{button2}}</button>
    </div>
</template>

<script>
export default{
    name: "Buttons",
    props: ['button1', 'button2', 'link1', 'link2'],
    methods: {
        goTo1() {
            this.$router.push(this.link1)
        },
        goTo2() {
            this.$router.push(this.link2).catch(error=>{
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            })
        }
    }
}
</script>
<style lang="scss">
    .button {
        border: solid #d13cd0;
        &:hover {
            color: #d13cd0;
        }
    }
    .buttons {
        margin-bottom: 150px;
    }
</style>