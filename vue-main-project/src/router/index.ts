
import { createRouter, createWebHistory } from 'vue-router'
import Editor from '../views/Editor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/watermark',
      name: 'watermark',
      component: () => import('../views/Watermark.vue')
    }
  ]
})

export default router
