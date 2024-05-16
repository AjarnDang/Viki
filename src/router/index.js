import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/allproduct',
    name: 'allproduct',
    component: () => import('../views/AllProduct.vue')
  },
  {
    path: '/odin',
    name: 'odin',
    component: () => import('../views/Odin.vue')
  },
  {
    path: '/vandal',
    name: 'vandal',
    component: () => import('../views/Vandal.vue')
  },
  {
    path: '/phantom',
    name: 'phantom',
    component: () => import('../views/Phantom.vue')
  },
  {
    path: '/spectre',
    name: 'spectre',
    component: () => import('../views/Spectre.vue')
  },
  {
    path: '/operator',
    name: 'operator',
    component: () => import('../views/Operator.vue')
  },
  {
    path: '/bundle',
    name: 'bundle',
    component: () => import('../views/Bundle.vue')
  },
  {
    path: '/bundleDetail/:displayName',
    name: 'BundleDetail',
    component: () => import('../views/BundleDetail.vue')
  },
  {
    path: '/simple',
    name: 'simple',
    component: () => import('../views/Simple.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
})

export default router
