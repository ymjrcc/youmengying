import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/author',
      name: 'author',
      component: () => import('../views/Author.vue')
    },
    {
      path: '/original',
      name: 'original',
      component: () => import('../views/Original.vue')
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('../views/Comments.vue')
    },
    {
      path: '/visualization',
      name: 'visualization',
      component: () => import('../views/Visualization.vue')
    },
  ]
})

export default router
