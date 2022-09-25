<template>
<div>
  <h1>{{ isLoggedIn }}</h1>
  <div>{{user}}</div>
</div>
</template>

<script>
export default {
  name: "UserPage",
  computed: {
    user(){
      return this.$store.getters.user
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      if(!this.isLoggedIn) {
        this.$store.dispatch('GET_USER')
      }
    }
  }
}
</script>

<style scoped>

</style>