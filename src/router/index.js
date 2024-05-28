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
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/allweapon',
    name: 'allweapon',
    component: () => import('../views/AllWeapon.vue')
  },
  {
    path: '/odin',
    name: 'Odin',
    component: () => import('../views/Odin.vue')
  },
  {
    path: '/vandal',
    name: 'Vandal',
    component: () => import('../views/Vandal.vue')
  },
  {
    path: '/phantom',
    name: 'Phantom',
    component: () => import('../views/Phantom.vue')
  },
  {
    path: '/spectre',
    name: 'Spectre',
    component: () => import('../views/Spectre.vue')
  },
  {
    path: '/operator',
    name: 'Operator',
    component: () => import('../views/Operator.vue')
  },
  {
    path: '/features',
    name: 'features',
    component: () => import('../views/Features.vue')
  },
  {
    path: '/bundle',
    name: 'bundle',
    component: () => import('../views/Bundle.vue')
  },
  {
    path: '/allBundle',
    name: 'allBundle',
    component: () => import('../views/AllBundle.vue')
  },
  {
    path: '/bundleDetail/:displayName',
    name: 'BundleDetail',
    component: () => import('../views/BundleDetail.vue')
  },
  {
    path: '/weapon/:displayName',
    name: 'weaponDetail',
    component: () => import('../views/WeaponDetail.vue'),
    props: true,
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
