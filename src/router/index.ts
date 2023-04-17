import { createRouter, createWebHistory } from 'vue-router';
import appRoutes from './modules-index';

const router = createRouter({
  history: createWebHistory(),
  routes: [...appRoutes],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
