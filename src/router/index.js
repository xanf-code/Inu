import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import InsiderPage from '@/views/InsiderPage.vue'
import DownloadPage from '@/views/Download.vue'
import '../../node_modules/nprogress/nprogress.css';
import NProgress from 'nprogress';

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
  },
  {
    path: '/download',
    name: 'DownloadPage',
    component: DownloadPage,
  },
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
