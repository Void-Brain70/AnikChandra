<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './pages/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  created(){
    let token = localStorage.getItem('token')
    if(token){
      return this.$store.dispatch("GET_USER")
    }
  },
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
</style>
