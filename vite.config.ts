import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router'],
      eslintrc: { enabled: true, filepath: './eslintrc-auto-import.json', globalsPropValue: true },
      resolvers: [ArcoResolver()],
    }),
    Components({ dts: './src/components.d.ts', resolvers: [ArcoResolver({ sideEffect: true })] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
