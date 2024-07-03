import { createRouter, createWebHistory } from 'vue-router'

import DemoPage from '../pages/DemoPage.vue'
import IndexPage from '../pages/IndexPage.vue'

export const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TS',
    },
  },
  {
    path: '/demo/',
    component: DemoPage,
    meta: {
      title: 'Demo Page',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
