import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: ""
  },
  getters: {
    info: state=> state.userInfo
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
