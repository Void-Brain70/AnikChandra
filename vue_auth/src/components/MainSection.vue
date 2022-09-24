<template>
    <div>
        <h1>Welcome to Authentication Part</h1>
        <h3 v-if="!show">Login</h3>
        <h3 v-if="show">Logout</h3>
    </div>
</template>

<script>
export default {
    name:"MainSection",
    computed:{
        show(){
            return this.$store.getters.info
        }
    }
}
</script>

<style lang="scss">
 h1{
    text-align: center;
 }
 h3{
    text-align: center;
    
 }   

</style>