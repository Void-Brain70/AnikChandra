import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseView from '../views/CourseView.vue'
import UserView from '../views/UserView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/course',
    name: 'course',
    component: CourseView
  },
  {
    path: '/user',
    name: 'user',
    component:UserView,
    meta:{ requiredAuth: true}
  },
  {
    path: '/login',
    component: LoginView,
    name: 'login',
  },
  {
    path: '/signup',
    component: SignupView,
    name: 'signup',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let isauth = localStorage.getItem('auth')
  if(to.matched.some((record)=> record.meta.requiredAuth)){
      console.log(isauth)
      if (isauth){
          next();
          return 
      }
      next("/login")
  }
  else
  {   if(isauth){
      if(to.path=='/login' || to.path =='/signup'){
          router.go(-1)
      }
  }
  next()
  }
})


export default router
