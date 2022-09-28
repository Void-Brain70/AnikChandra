import Vue from 'vue'
import VueRouter from 'vue-router'
import DivisionView from '../views/DivisionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'division',
    component: DivisionView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
