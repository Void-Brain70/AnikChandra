import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.withCredentials = true;
const token = localStorage.getItem('token');
if(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
}


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
