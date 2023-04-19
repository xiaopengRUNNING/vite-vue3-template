import { RouteRecordRaw } from 'vue-router';

const modules = import.meta.glob('./modules/*.ts', {
  eager: true,
  import: 'default',
});

const appRoutes: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const defaultModule = modules[key] || {};

  if (!defaultModule) return;
  const moduleList = Array.isArray(defaultModule)
    ? [...defaultModule]
    : [defaultModule];

  appRoutes.push(...moduleList);
});

export default appRoutes;
