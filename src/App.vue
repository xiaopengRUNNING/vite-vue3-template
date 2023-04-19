<script setup lang="ts">
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
</script>

<template>
  <div class="h-screen w-screen bg-white dark:bg-zinc-900">
    <a-config-provider :locale="zhCN">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>

<style scoped></style>
