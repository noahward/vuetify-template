import { createRouter, createWebHistory } from 'vue-router'
import MainRoutes from './MainRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/auth/Error.vue')
    },
    MainRoutes
  ]
})

export default router
