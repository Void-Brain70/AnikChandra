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
});

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

export default router;