import Vue from 'vue'
import VueRouter from 'vue-router'

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
    path: '/weapondetail',
    name: 'weapondetail',
    component: () => import('../views/WeaponDetail.vue')
  },
  {
    path: '/api',
    name: 'api',
    component: () => import('../views/Api.vue')
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
