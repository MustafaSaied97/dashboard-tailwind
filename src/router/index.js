import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/Home.vue"
import Dashboard from "../pages/Dashboard.vue"
import Profile from "../pages/Profile.vue"

const routes=[
    {
        name:'dashboard',
        path:'/',
        component: Dashboard
    },
    {
        name:'home',
        path:'/home',
        component: Home
    },
    {
        name:'profile',
        path:'/profile',
        component: Profile
    },

]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router




