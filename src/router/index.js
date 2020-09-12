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
    path: '/article/1',
    name: 'article/1',
    component: () => import('../views/article/1.vue')
  },
  {
    path: '/article/2',
    name: 'article/2',
    component: () => import('../views/article/2.vue')
  },
  {
    path: '/article/3',
    name: 'article/3',
    component: () => import('../views/article/3.vue')
  },
  {
    path: '/article/4',
    name: 'article/4',
    component: () => import('../views/article/4.vue')
  },
  {
    path: '/article/5',
    name: 'article/5',
    component: () => import('../views/article/5.vue')
  },
  {
    path: '/trip/1',
    name: 'trip/1',
    component: () => import('../views/trip/1.vue')
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
