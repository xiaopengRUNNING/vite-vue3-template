import type { Router } from 'vue-router';
import Nprogress from 'nprogress';
import { setRouteEmitter } from '@/utils/router-listener';
import 'nprogress/nprogress.css';

Nprogress.configure({ showSpinner: false });

function setupPageGuard(router: Router) {
  router.beforeEach(async (to) => {
    document.title =
      (to.meta.title as string) || import.meta.env.VITE_APP_TITLE;

    setRouteEmitter(to);
    if (!Nprogress.isStarted()) {
      Nprogress.start();
    }
  });

  router.afterEach(() => {
    Nprogress.done();
  });
}

export default function createRouterGuard(router: Router) {
  setupPageGuard(router);
}
