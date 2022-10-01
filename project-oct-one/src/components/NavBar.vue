<template>
    <div>
        <ul>
            <router-link class="home" to="/" ><li>Home</li></router-link>
            <router-link class="course" to="/course" ><li class="active1">Course</li></router-link>
            <router-link class="login" to="/login" ><li style="float:right" class="active1" v-if="!userData" >Login</li></router-link>
            <router-link class="signup" to="/signup" ><li style="float:right" class="active1" v-if="!userData">SignUp</li></router-link>
            <router-link class="logout" to="/login"><li style="float:right" class="active1" v-if="userData" @click="logout" >Logout</li></router-link>
            <router-link class="user" to="/user" ><li style="float:right" class="active1" v-if="userData">User</li></router-link>

        </ul>
    </div>
</template>

<script>
export default {
    name:"NavBar",
    methods:{
      logout(){
          return this.$store.commit('REMOVE_USER', '');
      }
    },
    computed: {
    userData() {
      return this.$store.getters.isLoggedIn
    },
}
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #1E88E5;
      }
      
      li {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      li:hover:not(.active) {
        background-color: #EC407A;
      }
      
      .active{
        gap:2px;
        background-color: #04AA6D;
      }
</style>