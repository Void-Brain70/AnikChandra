// import { state } from 'fs'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    booklist:['book1','book2','book3']
  },
  getters: {
    totalBook(state){
      return state.booklist.length
    }
  },
  mutations: {
    ADD_BOOK(state,data){
      state.booklist.push(data) 
    },
    DELETE_BOOK(state,data){
      state.booklist.splice(data,1)
    },
    UPDATE_BOOK(state,data){
      state.booklist = state.booklist.map((i)=>{
        if(i.index == data.index ){
          return data;
        }
        return i;
      });
    },

  }, 
  actions: {
    addBook({commit},data){
      commit("ADD_BOOK",data)
    },
    deleteBook({commit},data){
      commit("DELETE_BOOK",data)
    },
    updateBook({commit},data){
      commit("UPDATE_BOOK",data)
    }
  },
  modules: {
  }
})
