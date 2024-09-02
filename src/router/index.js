import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutPage.vue'
import Mixin from '@/pages/MixinPage.vue'
import Share from '@/pages/SharePage.vue'
import Error from '@/pages/ErrorPage.vue'
import MyColorsPage from '@/pages/MyColorsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: Mixin
  },
  {
    path: '/color/:red?/:green?/:blue?',
    name: 'Share',
    component: Share
  },
  {
    path: '/color',
    name: 'Color',
    component: Home
  },
  {
    path: '/my-colors',
    name: 'MyColorsPage',
    component: MyColorsPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
