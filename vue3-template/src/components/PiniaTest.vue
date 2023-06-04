<script setup lang="ts">
import { useExampleStore } from '../store/example.ts'
import { storeToRefs } from 'pinia'
// 响应式解构赋值
const { age } = storeToRefs(useExampleStore())
</script>

<template>
  <p>年龄: {{ age }}</p>
</template>

<style scoped></style>
