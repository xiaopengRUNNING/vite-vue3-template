<script setup lang="ts">
import {
  IconSunFill,
  IconMoonFill,
  IconGithub,
} from '@arco-design/web-vue/es/icon';
import vueSvg from '@/assets/vue.svg?component';

const theme = ref('light');

const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'theme',
  onChanged(dark: boolean) {
    if (dark) {
      theme.value = 'dark';
      document.body.setAttribute('arco-theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      theme.value = 'light';
      document.body.removeAttribute('arco-theme');
      document.documentElement.classList.remove('dark');
    }
  },
});
const toggleTheme = useToggle(isDark);

const featureList = [
  { name: 'Vue3', url: 'https://cn.vuejs.org/' },
  { name: 'Vite4', url: 'https://cn.vitejs.dev/' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Arco Design Vue', url: 'https://arco.design/' },
  { name: 'Icones', url: 'https://icones.js.org/' },
  { name: 'Pnpm', url: 'https://www.pnpm.cn/' },
  { name: 'VueUse', url: 'https://vueuse.org/' },
  { name: 'Vue router', url: 'https://router.vuejs.org/zh/' },
  { name: 'Pinia', url: 'https://pinia.web3doc.top/' },
  { name: 'Axios', url: 'https://www.axios-http.cn/' },
  { name: 'Less', url: 'https://less.devjs.cn/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { name: 'Eslint', url: 'http://eslint.cn/' },
  { name: 'Prettier', url: 'https://www.prettier.cn/' },
  { name: 'husky', url: 'https://www.npmjs.com/package/husky' },
  { name: 'lint-staged', url: 'https://www.npmjs.com/package/lint-staged' },
  { name: 'commitlint', url: 'https://commitlint.js.org/', end: true },
];
</script>

<template>
  <div class="w-1/2 text-center mx-auto pt-44">
    <vueSvg class="w-40 h-40 mx-auto"></vueSvg>
    <h1 class="font-bold dark:text-white">Hello, Welcome!</h1>
    <strong class="dark:text-white text-lg">
      更快创建功能完善的 Vue3 模板，持续更新~
    </strong>
    <p class="mt-12">
      <template v-for="item in featureList" :key="item.url">
        <a-link :href="item.url" target="_blank">{{ item.name }}</a-link>
        <a-divider direction="vertical" v-if="!item.end" />
      </template>
    </p>

    <ul class="mt-10 flex justify-center">
      <li class="px-2">
        <a-tooltip
          :content="`点击切换为${theme === 'light' ? '暗黑' : '亮色'}模式`"
        >
          <a-button type="outline" shape="circle" @click="toggleTheme()">
            <template #icon>
              <icon-sun-fill style="font-size: 16px" v-if="theme === 'dark'" />
              <icon-moon-fill style="font-size: 16px" v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>

      <li class="px-2">
        <a-tooltip content="Github">
          <a-button
            type="outline"
            shape="circle"
            target="_blank"
            href="https://github.com/xiaopengRUNNING/vite-vue3-template"
          >
            <template #icon>
              <icon-github />
            </template>
          </a-button>
        </a-tooltip>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
