import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from "@/views/MainView";
import LandingPage from "@/pages/LandingPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainView
    },

    {
        path: '/main',
        component: LandingPage
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
