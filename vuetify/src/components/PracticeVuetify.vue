<template>
    <div class="practice">
        <h2>Practice Vuetify</h2>
        <v-btn class="pink white--text mx-2">Click</v-btn>
        <v-btn depressed color="primary" class="mx-2">Primary</v-btn>
        <v-btn class="mx-2" fab dark small color="pink">
            <v-icon dark>mdi-heart</v-icon>
        </v-btn>
        <v-btn depressed class="pink white--text">
            <v-icon left>mdi-thumb-up</v-icon>
            <span>Like</span>
        </v-btn>
        <v-btn depressed class="success white--text mx-2">
            <span>Like</span>
            <v-icon right small>mdi-thumb-up</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'PracticeVuetify'
}
</script>

<style lang="scss">
h2{
    margin-top: 10px;
    text-align: center;
    color: #D81B60;
}    

</style>