const MainRoutes = {
  path: '/',
  meta: {
    requiresAuth: true
  },
  component: () => import('@/layouts/FullLayout.vue'),
  children: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/views/main/Home.vue')
    }
  ]
}

export default MainRoutes
