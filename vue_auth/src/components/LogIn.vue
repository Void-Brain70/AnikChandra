<template>
    <div>
        <div>
        <h1>Login</h1>
        <div class="login">
            <input type="text"  v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password"  placeholder="Enter Password">
            <button  v-on:click="login" >Login</button>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'    
export default {
    name:"LogIn",
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        async login()
        {
            let formData = new FormData()
            formData.append('email', 'admin@example.com')
            formData.append('password', 'secret')
            await axios.post('http://localhost:8000/api/login', formData).then((res) => {
                console.log(res)
            });
           
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'home'})
        }
    }
}
</script>

<style scoped>
.login input{
    width: 300px;
    height: 40px;
    padding-left:20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.login button{
    width: 305px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    display: block;
    
}
</style>