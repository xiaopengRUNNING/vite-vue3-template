import { createRouter, createWebHistory } from 'vue-router';
import appRoutes from './modules-index';
import createRouterGuard from './guard';

const router = createRouter({
  history: createWebHistory(),
  routes: [...appRoutes],
  scrollBehavior() {
    return { top: 0 };
  },
});

createRouterGuard(router);

export default router;
