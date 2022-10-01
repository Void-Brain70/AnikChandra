import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        isLoggedIn: false,
    },
    getters: {
        user(state) {
            return state.user
        },
        isLoggedIn(state) {
            return state.isLoggedIn
        },
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
        SET_IS_LOGGED_IN(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn
            console.log(isLoggedIn)
        },
        REMOVE_USER(state,data){
            localStorage.setItem('token', data)
            localStorage.setItem('auth',data)
            state.isLoggedIn=false
            console.log(data)
        },
    },
    actions: {
        async GET_USER(context) {
            await axios.get('/user')
                .then((res) => {
                    context.commit('SET_USER', res.data)
                    context.commit('SET_IS_LOGGED_IN', true)
                }).catch(() => {
                    // context.commit('LOADER_STATUS_CHANGE',false)
                })
        }
    },
});