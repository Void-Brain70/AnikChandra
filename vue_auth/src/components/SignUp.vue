<template>
    <div>
        <h1>Sign Up</h1>
        <div class="sign">
            <input type="text" v-model="name" placeholder="Enter Name">
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-on:click="signup">Sign Up</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data(){
        return {
            name:"",
            email:"",
            password:"",
        }
    },
    methods:{
        async signup(){
            // console.log(this.name,this.email,this.password)
            let result = await axios.post("http://localhost:3000/user",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.log(result)
            if(result.status==201){
                alert("Done")
            }
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name: 'login'})
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: 'login'})
        }
    }
}
</script>

<style scoped>
.sign input{
    width: 300px;
    height: 40px;
    padding-left:20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.sign button{
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