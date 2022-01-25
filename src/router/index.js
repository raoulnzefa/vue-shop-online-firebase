import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
// import VisaoGeral from "../views/VisaoGeral.vue"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    routes: [


        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            children: [
                {
                    path: 'visaogeral',
                    name: 'visaogeral',
                    component: 'VisaoGeral'
                }
            ]
        }
    ]
})

export default router