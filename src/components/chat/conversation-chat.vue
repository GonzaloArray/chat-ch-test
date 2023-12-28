<template>
  <div :class="{ 'text-left': props.type === 'customer', 'text-right': props.type !== 'customer' }">
    <span v-if="props.type === 'customer'" class="text-sm bg-blue-500 p-3 rounded-full font-semibold w-[50px] h-[50px]">C</span>
    <p class="text-sm bg-blue-300 rounded-md inline-block p-2 mx-2">{{ props.message }}</p>
    <span v-if="props.type !== 'customer'" class="text-sm bg-blue-500 p-3 rounded-full font-semibold w-[50px] h-[50px]">Y</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  type: String,
  message: String
})
</script>
