import type { Router } from 'vue-router';
import { setRouteEmitter } from '@/utils/router-listener';

function setupPageGuard(router: Router) {
  router.beforeEach(async (to) => {
    setRouteEmitter(to);
  });
}

export default function createRouterGuard(router: Router) {
  setupPageGuard(router);
}
