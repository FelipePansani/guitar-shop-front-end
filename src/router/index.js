import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/guitars',
    name: 'Guitars',
    component: () => import('../views/Guitars.vue')
  },
  {
    path: '/amps',
    name: 'Amps',
    component: () => import('../views/Amps.vue')
  },
  {
    path: '/basses',
    name: 'Basses',
    component: () => import('../views/Basses.vue')
  },
  {
    path: '/acoustic',
    name: 'Acoustic',
    component: () => import('../views/Acoustic.vue')
  },
  {
    path: '/:category/:brand',
    name: 'ItemsBrand',
    component: () => import('../views/ItemsBrand.vue')
  },
  {
    path: '/:category/item/:id',
    name: 'Item',
    component: () => import('../views/Item.vue')
  },
  {
    path: '/atendimento',
    name: 'Atendimento',
    component: () => import('../views/Atendimento.vue')
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import('../views/Photos.vue')
  }, 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
