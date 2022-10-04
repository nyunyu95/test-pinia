import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewA from '../views/ViewA.vue'
import ViewB from '../views/ViewB.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'view-a',
    component: ViewA
  },
  {
    path: '/viewb',
    name: 'view-b',
    component: ViewB
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
