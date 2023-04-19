<script setup lang="ts">
const router = useRouter();
const back = () => {
  router.go(-1);
};
</script>

<template>
  <div>
    <a-result
      class="absolute top-1/2 -translate-y-1/2 -mt-8"
      status="404"
      subtitle="抱歉，页面不见了～"
    >
      <template #extra>
        <a-button key="back" type="primary" @click="back">返回</a-button>
      </template>
    </a-result>
  </div>
</template>

<style scoped></style>
