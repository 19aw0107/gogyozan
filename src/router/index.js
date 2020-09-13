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
    path: '/beginner',
    name: 'beginner',
    component: () => import('../views/beginner.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/article.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/upload.vue')
  },
  {
    path: '/travel',
    name: 'travel',
    component: () => import('../views/travel.vue')
  },
  {
    path: '/ad',
    name: 'ad',
    component: () => import('../views/ad.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/faq.vue')
  },
  {
    path: '/uploadform',
    name: 'uploadform',
    component: () => import('../views/UploadForm.vue')
  },
  {
    path: '/AdForm',
    name: 'AdForm',
    component: () => import('../views/AdForm.vue')
  },
  {
    path: '/1a',
    name: '1a',
    component: () => import('../views/1a.vue')
  },
  {
    path: '/2a',
    name: '2a',
    component: () => import('../views/2a.vue')
  },
  {
    path: '/3a',
    name: '3a',
    component: () => import('../views/3a.vue')
  },
  {
    path: '/4a',
    name: '4a',
    component: () => import('../views/4a.vue')
  },
  {
    path: '/5a',
    name: '5a',
    component: () => import('../views/5a.vue')
  },
  {
    path: '/1t',
    name: '1t',
    component: () => import('../views/1t.vue')
  },
  {
    path: '/2t',
    name: '2t',
    component: () => import('../views/2t.vue')
  },
  {
    path: '/3t',
    name: '3t',
    component: () => import('../views/3t.vue')
  },
  {
    path: '/4t',
    name: '4t',
    component: () => import('../views/4t.vue')
  },
  {
    path: '/5t',
    name: '5t',
    component: () => import('../views/5t.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
