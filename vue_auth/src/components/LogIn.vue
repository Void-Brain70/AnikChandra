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
  name: "LogIn",
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
  methods: {
    login() {
        this.axios.post("api/login", {
            email: this.formData.email,
            password: this.formData.password,
          })
          .then((response) => {
            this.$store.commit("SET_USER", response.data.user);
            this.$store.commit("SET_IS_LOGGED_IN", true);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("auth", true);
            console.log(response);
          });
    },
  },
};
</script>

<style scoped>
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.login button {
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
