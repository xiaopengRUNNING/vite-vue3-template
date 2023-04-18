export default {
  path: '/example',
  name: 'example',
  component: () => import('@/views/example/index.vue'),
  meta: {
    // router other information
  },
  children: [],
};
