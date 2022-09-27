import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryView from '../views/CategoryView.vue'
import FilterView from '../views/FilterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CategoryView',
    component: CategoryView
  },
  {
    path: '/course',
    name: 'FilterView',
    component: FilterView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
