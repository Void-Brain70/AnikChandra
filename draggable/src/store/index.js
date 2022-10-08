import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemdata: [],
  },
  getters: {
    getItem(state){
      return state.itemdata
    }
  },
  mutations: {
    ADD_ITEMS(state, data) {
      state.itemdata.push(data);
    },
  },
  actions: {
    addItems({ commit }, data) {
      commit("ADD_ITEMS", data);
    },
  },
  modules: {},
});
