import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import login from '@/pages/login'
import NF404 from '@/pages/404'
import inputform from '@/pages/inputform'
import page from '@/pages/page'
import view from '@/pages/view'
import daice from '@/pages/daice'

import inou2 from '@/pages/trpgs/inou2'
import ga1 from '@/pages/trpgs/ga1'
import numa1 from '@/pages/trpgs/numa1'
import yoi1 from '@/pages/trpgs/yoi1'
import void1 from '@/pages/trpgs/void1'
import mafia1 from '@/pages/trpgs/mafia1'
import mafia2 from '@/pages/trpgs/mafia2'
import densi1 from '@/pages/trpgs/densi1'
import k from '@/pages/k'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: page
        },
        {
            path: "/view",
            name: "view",
            component: view
        },
        {
            path: "/k",
            name: "k",
            component: k
        },
        {
            path: "/login",
            name: "login",
            component: login,
            meta: {isPublic: true}
        },
        {
            path: "/daice",
            name: "daice",
            component: daice,
            meta: {isPublic: true}
        },
        {
            name: "NF404",
            path: "*",
            component: NF404
        },
        {
            name: "inputform",
            path: "/if",
            component: inputform
        },
        {
            path: "/inou2",
            name: "inou2",
            component: inou2
        },
        {
            path: "/ga1",
            name: "ga1",
            component: ga1
        },
        {
            path: "/numa1",
            name: "numa1",
            component: numa1
        },
        {
            path: "/yoi1",
            name: "yoi1",
            component: yoi1
        },
        {
            path: "/void1",
            name: "void1",
            component: void1
        },
        {
            path: "/mafia1",
            name: "mafia1",
            component: mafia1
        },
        {
            path: "/densi1",
            name: "densi1",
            component: densi1
        },
        {
            path: "/mafia2",
            name: "mafia2",
            component: mafia2
        }
    ],
    scrollBehavior() {
        return {x: 0,y: 0}
    }

    
})