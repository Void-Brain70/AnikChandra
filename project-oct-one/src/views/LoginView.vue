<template>
  <div>
    <div>
      <h1>Login</h1>
      <div class="login">
        <input type="text" v-model="formData.email" placeholder="Enter Email" />
        <input
          type="password"
          v-model="formData.password"
          placeholder="Enter Password"
        />
        <button v-on:click="login()">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  // mounted(){
  //   this.login()
  // },
  methods: {
    login() {
      this.axios
        .post("https://summer-canyon-zh9zckabi5cf.vapor-farm-f1.com/api/login", {
          phone: this.formData.email,
          password: this.formData.password,
        })
        .then((response) => {
          this.$store.commit("SET_USER", response.data.user);
          this.$store.commit("SET_IS_LOGGED_IN", true);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("auth", true);
          this.$router.push("/");
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 10px;
  color: #ec407a;
}
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border: 1px solid #ec407a;
}
.login button {
  width: 325px;
  height: 40px;
  border: 1px solid #ec407a;
  color: #fff;
  background-color: #ec407a;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-size: 18px;
}
</style>
