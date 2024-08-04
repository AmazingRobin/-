import { getMicroApp } from 'vite-plugin-legacy-qiankun'
import { createRouter, createWebHistory } from 'vue-router'
import pkg from '../../package.json' // your micro app name (pkg.name)

const microApp = getMicroApp(pkg.name)
import Article from '../views/Article.vue'
console.log(microApp.__POWERED_BY_QIANKUN__ );
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(microApp.__POWERED_BY_QIANKUN__ ? pkg.name : '/'),
  routes: [
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/publish',
      name: 'publish',
      component: () => import('../views/Publish.vue')
    }
  ]
})

export default router
