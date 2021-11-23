import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/Aventure',
    name: 'Aventure',
    component: () => import('../views/Aventure.vue')
  },
  {
    path: '/PC1',
    name: 'PC1',
    component: () => import('../components/PC1.vue')
  },
  {
    path: '/lvl1',
    name: 'lvl1',
    component: () => import('../views/lvl1.vue')
  },
  {
    path: '/lvl2',
    name: 'lvl2',
    component: () => import('../views/lvl2.vue')
  },
  {
    path: '/lvl3',
    name: 'lvl3',
    component: () => import('../views/lvl3.vue')
  },
  {
    path: '/lvl4',
    name: 'lvl4',
    component: () => import('../views/lvl4.vue')
  },
  {
    path: '/lvl5',
    name: 'lvl5',
    component: () => import('../views/lvl5.vue')
  },
 {
    path: '/lvl6',
    name: 'lvl6',
    component: () => import('../views/lvl6.vue')
  },
  {
    path: '/End',
    name: 'End',
    component: () => import('../views/End.vue')
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
