import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import InsiderPage from '@/views/InsiderPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "InsiderShibu | Beta"
    },
  },
  {
    path: '/info/:id',
    name: 'InsiderPage',
    component: InsiderPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
