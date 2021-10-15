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
    path: '/lvl2',
    name: 'lvl2',
    component: () => import('../views/lvl2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
