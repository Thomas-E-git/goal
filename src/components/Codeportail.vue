<template>
    <div>
        <div id="door-open" v-if="portailOpen"></div>
        <div id="codeportail">
            <label for="codePortail">Entrez le code du portail : </label>
            <input type="text" id="codePortail" class="ml-3 text-center" name="codePortail" v-model="codePortail" >
            <input type="submit" value="Valider" @click="open">
            <p id="errorPortail" class="text-danger h6 text-left"></p>
        </div>
    </div>
    
</template>

<script>

export default {
    name: "Codeportail",
    props: ['codeExact'],
    data : function() {
        return {
            codePortail : null,
            portailOpen: false,
        }
    },
    methods: {
        open() {
            let errorPortail = document.getElementById("errorPortail");
            if (this.codePortail == this.codeExact) {
                this.portailOpen = true
                this.$emit('portailIsOpen', {value: true})
                errorPortail.innerHTML = ""
            } else {
                errorPortail.innerHTML = "Mauvais code, avez-vous allumé le smartphone sur la table ?"
            }
        }
    },
}
</script>

<style lang="scss" scoped>

    #codeportail{
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
    #door-open {
        position: absolute;
        right: 8.12%;
        bottom: 0%;
        height: 53%;
        width: 18px;
        background-color: green;
    }

</style>