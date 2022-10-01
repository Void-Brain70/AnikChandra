<template>
    <div>
        <h1>Sign Up</h1>
        <div class="sign">
            <input type="text" v-model="formData.name" placeholder="Enter Name">
            <input type="text" v-model="formData.email" placeholder="Enter Email">
            <input type="text" v-model="formData.phone" placeholder="Enter Phone Number">
            <input type="password" v-model="formData.password" placeholder="Enter Password">
            <input type="password" v-model="formData.password_confirmation" placeholder="Enter Confirm Password">
            <button  @click="signup()">Sign Up</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"SignupView",
    data(){
        return{
            formData:{
                email:"",
                phone:"",
                password: "",
                password_confirmation:"",
                name:""
            }
        }
    },
    mounted() {
    this.signup()
    },
    methods: {
    signup() {
      this.axios.post('https://summer-canyon-zh9zckabi5cf.vapor-farm-f1.com/api/signup', {
        email: this.formData.email,
        phone: this.formData.phone,
        password: this.formData.password,
        password_confirmation: this.formData.password_confirmation,
        name: this.formData.name,
      }).then(response => {
        this.$store.commit('SET_USER', response.data.user)
        this.$store.commit('SET_IS_LOGGED_IN', true)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem("auth", true);
        this.$router.push('/')
        console.log(response)
      })
    }
  },
}
</script>

<style scoped>
h1{
    text-align: center;
    margin-top: 10px;
    color:#EC407A;
}    
.sign input{
    margin-top: 10px;
    width: 300px;
    height: 40px;
    padding-left:20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #EC407A;
}
.sign button{
    width: 325px;
    height: 40px;
    border: 1px solid #EC407A;
    color: #fff;
    background-color: #EC407A;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size:18px;
}
</style>