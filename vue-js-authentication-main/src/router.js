import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import HomePage from "./pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import UserPage from "@/pages/UserPage";
import SignupPage from "@/pages/SignupPage";

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            component:HomePage
        },
        {
            path: '/user',
            name: 'user',
            component:UserPage,
            meta:{ requiredAuth: true}
        },
        {
            path: '/login',
            component: LoginPage,
            name: 'login',
        },
        {
            path: '/signup',
            component: SignupPage,
            name: 'signup',
        },
    ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some((record)=> record.meta.requiredAuth)){
        let auth = localStorage.getItem('auth')
        console.log(auth)
        if (auth){
            next();
            return;
        }
        next("/login")
    }
    else next()
  })


export default router