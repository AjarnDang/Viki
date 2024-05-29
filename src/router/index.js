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
    component: () => import('../views/weapons/Odin.vue')
  },
  {
    path: '/vandal',
    name: 'Vandal',
    component: () => import('../views/weapons/Vandal.vue')
  },
  {
    path: '/phantom',
    name: 'Phantom',
    component: () => import('../views/weapons/Phantom.vue')
  },
  {
    path: '/spectre',
    name: 'Spectre',
    component: () => import('../views/weapons/Spectre.vue')
  },
  {
    path: '/operator',
    name: 'Operator',
    component: () => import('../views/weapons/Operator.vue')
  },
  {
    path: '/classic',
    name: 'Classic',
    component: () => import('../views/weapons/Classic.vue')
  },
  {
    path: '/shorty',
    name: 'Shorty',
    component: () => import('../views/weapons/Shorty.vue')
  },
  {
    path: '/ghost',
    name: 'Ghost',
    component: () => import('../views/weapons/Ghost.vue')
  },
  {
    path: '/frenzy',
    name: 'Frenzy',
    component: () => import('../views/weapons/Frenzy.vue')
  },
  {
    path: '/sheriff',
    name: 'Sheriff',
    component: () => import('../views/weapons/Sheriff.vue')
  },
  {
    path: '/bucky',
    name: 'Bucky',
    component: () => import('../views/weapons/Bucky.vue')
  },
  {
    path: '/judge',
    name: 'Judge',
    component: () => import('../views/weapons/Judge.vue')
  },
  {
    path: '/stinger',
    name: 'Stinger',
    component: () => import('../views/weapons/Stinger.vue')
  },
  {
    path: '/bulldog',
    name: 'Bulldog',
    component: () => import('../views/weapons/Bulldog.vue')
  },
  {
    path: '/guardian',
    name: 'Guardian',
    component: () => import('../views/weapons/Guardian.vue')
  },
  {
    path: '/ares',
    name: 'Ares',
    component: () => import('../views/weapons/Ares.vue')
  },
  {
    path: '/melee',
    name: 'Melee',
    component: () => import('../views/weapons/Melee.vue')
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
