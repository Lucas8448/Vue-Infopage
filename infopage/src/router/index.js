import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Prevent from '../views/Prevent.vue'
import Sources from '../views/Sources.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/prevent',
      name: 'prevent',
      component: Prevent
    },
    {
      path: '/sources',
      name: 'sources',
      component: Sources
    }
  ]
})

export default router