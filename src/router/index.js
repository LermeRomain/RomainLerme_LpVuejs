import Vue from 'vue'
import VueRouter from 'vue-router'

import UsersRoutes from '@/router'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        // component: Home
        components: {
            default: () => import(/* webpackChunkName: "home" */ '../Legale.vue'),
        },
        props :route => ({saucisse: `plop ${route.params.saucisse}`})
    },
    // spread/apply
    ...UsersRoutes,


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
