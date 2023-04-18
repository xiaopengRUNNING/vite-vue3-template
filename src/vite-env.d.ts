/// <reference types="vite/client" />

declare module '*.svg?component' {
  import {DefineComponent} from 'vue';
  const component:DefineComponent<{}, {}, any>;
  export default component;
}
