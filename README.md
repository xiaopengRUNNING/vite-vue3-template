# Vite4 + Vue3 + Typescript

## 介绍
基于 Vue3、Vite4 和 Typescript 搭建的项目模板，帮你更快更好的创建功能完善的模板，其中使用到的库和依赖皆为最新版本，并在之后持续更新！！！
[在线预览](https://vite-vue3-typescript.netlify.app/)
## 开箱即用功能

- [Vue3](https://cn.vuejs.org/) - 更好的性能和开发体验，提供更多新的特性和改进的API
- [Vite4](https://cn.vitejs.dev/) - 快速的Web开发构建工具，它基于ESM原生模块系统，支持快速的冷启动和热模块替换
- [Vue Router](https://router.vuejs.org/zh/) - 可配置的、方便的路由管理
- [Pinia](https://pinia.web3doc.top/) - 新一代的全局状态管理
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 超集，提供类型检查、更好的 IDE 支持和其他强大的特性
- [VueUse](https://vueuse.org/) - 提供了许多实用的、经过优化的自定义 Hooks 函数，简化应用程序开发
- [Pnpm](https://www.pnpm.cn/) - 快速、高效、可靠且易于使用的包管理器
- [Icones](https://icones.js.org/) - 大量、精美的免费图标库
- [Arco Design Vue](https://arco.design/vue/docs/start) - 完善、灵活的基于 Vue3 的 UI组件库
- [Axios](https://www.axios-http.cn/) - 基于 Promise 的 HTTP 请求库
- [Tailwind CSS](https://tailwindcss.com/) - 高度可定制、实用的 CSS 框架
- [Less](https://less.devjs.cn/) - 实用、灵活、易于上手的CSS预处理器
- [Eslint](http://eslint.cn/)、[Prettier](https://www.prettier.cn/) - 保证团队代码的质量和可读性，减少语法错误和风格不一致
- [husky](https://www.npmjs.com/package/husky)、[lint-staged](https://www.npmjs.com/package/lint-staged)、[commitlint](https://commitlint.js.org/) - 帮助团队规范 Git 提交规范和代码质量，避免错误和重构
## 更多配置

- [Airbnb Style](https://github.com/airbnb/javascript) - 代码风格
- [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue) - 支持 tsx/jsx 写法
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自动按需引入Vue 组件
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动按需引入 Vue、Vue Router、VueUse 中的 API
- [unplugin-icons](https://github.com/antfu/unplugin-icons) - 图标库自动按需引入
- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader) - 以组件形式使用 SVG 图片

PS：SVG 图片引入时后缀名后需添加`?component`
## 使用方式
### Github 模板
[戳我](https://github.com/xiaopengRUNNING/vite-vue3-template/generate)，直接填写信息即可创建自己的 Github 仓库
### 克隆到本地
```bash
git clone https://github.com/xiaopengRUNNING/vite-vue3-template.git

cd vite-vue3-template

# 开发
pnpm i

# 构建
pnpm dev
```
## 使用之前

- [ ]  在 LICENSE 中改变作者名
- [ ]  在 package.json 中改变作者名
- [ ]  在 .env 中改变配置信息
- [ ]  在 public 目录下改变 favicon
- [ ]  配置路由信息
- [ ]  整理 README 
## 建议IDE配置

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (禁用 Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) +  [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 
