import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import '../../node_modules/nprogress/nprogress.css';
import NProgress from 'nprogress';
import NotFoundPage from '@/views/404Page.vue'

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
    component: () => import('@/views/InsiderPage.vue'),
  },
  {
    path: '/download',
    name: 'DownloadPage',
    component: () => import('@/views/Download.vue'),
    meta: {
      title: "InsiderShibu | Downloads"
    },
  },
  {
    path: '/whalewatch',
    name: 'Whales',
    component: () => import('@/views/Whales.vue'),
  },
  {
    path: '/:NotFound(.*)*',
    component: NotFoundPage,
    name: "errorpage",
    meta: {
      title: "404 Page not found"
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
    NProgress.start()
  }
  next()
});


router.afterEach(() => {
  NProgress.done()
});

export default router
