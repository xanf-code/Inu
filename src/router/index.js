import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import '../../node_modules/nprogress/nprogress.css';
import NProgress from 'nprogress';
import NotFoundPage from '@/views/404Page.vue'
import IntroView from '@/views/IntroView.vue'

const routes = [
  {
    path: '/',
    name: 'IntroView',
    component: IntroView,
    meta: {
      title: "InsiderShibu | Track InsiderStonks"
    },
  },
  {
    path: '/en',
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
    path: '/whalewatch',
    name: 'Whales',
    component: () => import('@/views/Whales.vue'),
    meta: {
      title: "🐳 Watch",
    }
  },
  {
    path: '/company',
    name: 'CompanyDetails',
    component: () => import('@/views/CompanyDetails.vue'),
  },
  {
    path: '/:NotFound(.*)*',
    component: NotFoundPage,
    name: "ErrorPage",
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
