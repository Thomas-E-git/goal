<template>
    <div id="codeporte">
        <label for="codePorte">Entrez le code d'accès : </label>
        <input type="text" id="codePorte" class="ml-3 text-center" name="codePorte" v-model="codePorte" >
        <input type="submit" value="Valider" @click="next">
        <p id="errorPorte" class="text-danger h6 text-left"></p>
    </div>
</template>

<script>

export default {
    name: "Codeporte",
    props: ['codeExact', 'errorMessage', 'nextLevel'],
    data : function() {
        return {
            codePorte : null,
        }
    },
    methods: {
        next() {
            let errorPorte = document.getElementById("errorPorte");
            if (this.codePorte == this.codeExact) {
                this.$router.push(this.nextLevel)
                errorPorte.innerHTML = ""
            } else {
                errorPorte.innerHTML = this.errorMessage
            }
        }
    },
}
</script>

<style lang="scss" scoped>

    #codeporte{
        position: absolute;
        top: 30%;
        left: 10%;
        border: black solid;
        display: none;
        padding: 5px;
        border-radius: 5px;
        color: black;
        background-color: white;
        z-index: 1001;
    }

</style>

