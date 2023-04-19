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
      status="500"
      subtitle="抱歉，服务器出了点问题～"
    >
      <template #extra>
        <a-button key="back" type="primary" @click="back">返回</a-button>
      </template>
    </a-result>
  </div>
</template>

<style scoped></style>
