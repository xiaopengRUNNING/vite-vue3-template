import { createRouter, createWebHistory } from 'vue-router';
import appRoutes from './modules-index';
import createRouterGuard from './guard';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        // router other information
      },
    },
    ...appRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'noFound',
      component: () => import('@/views/exception/404.vue'),
      meta: {
        title: '404',
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

createRouterGuard(router);

export default router;
