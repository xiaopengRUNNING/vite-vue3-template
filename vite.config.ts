import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
      eslintrc: { enabled: true, filepath: './eslintrc-auto-import.json', globalsPropValue: true },
      resolvers: [ArcoResolver()],
    }),
    Components({
      dts: './src/components.d.ts',
      resolvers: [ArcoResolver({ sideEffect: true }), VueUseComponentsResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
