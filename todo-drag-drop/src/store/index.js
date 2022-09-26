import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allName: [],
  },
  getters: {
    allItems : status => status.allName,
  },
  mutations: {
    ADD_ITEMS(state, data) {
      let getAllData = localStorage.getItem('setItem')
      if(getAllData) {
        state.allName = JSON.parse(getAllData)
      }
      state.allName.push(data)
      localStorage.setItem('setItem', JSON.stringify(state.allName))
    },

    GET_ITEMS(state, data) {
      state.allName = data;
    }
  },
  actions: {
  },
  modules: {
  }
})