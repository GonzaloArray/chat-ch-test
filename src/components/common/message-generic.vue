<template>
  <div class="relative bg-blue-300 py-1 px-2 mx-2 rounded-md">
    <p class="text-sm inline-block">{{ props.message }}</p>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  message: String
})
</script>
