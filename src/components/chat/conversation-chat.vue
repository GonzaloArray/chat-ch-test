<template>
  <div :class="{ 'text-left': props.type === 'customer', 'text-right': props.type !== 'customer' }">
    <span v-if="props.type === 'customer'" class="text-sm font-semibold">Customer: </span>
    <p class="text-sm bg-blue-100 rounded-md inline-block p-2">{{ props.message }}</p>
    <span v-if="props.type !== 'customer'" class="text-sm font-semibold"> : You</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  type: String,
  message: String
})
</script>
