<template>
    <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li style="float:right"><a class="active1" href="/signup">Sign Up</a></li>
            <li style="float:right"><a class="active2" href="/login">Login</a></li>
            <li style="float:right"><a  v-on:click="logout" class="active3">Logout</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"NavBar",
    methods:{
      logout(){
        let logout = localStorage.clear();
        if(logout){
          alert("You already Logout")
          
        }
        this.$router.push({name:'login'})
      }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
      }
      
      li {
        float: left;
      }
      
      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      li a:hover:not(.active) {
        background-color: skyblue;
      }
      
      .active{
        gap:2px;
        background-color: #04AA6D;
      }
</style>