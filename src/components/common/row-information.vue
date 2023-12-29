<template>
  <div class="flex gap-2 border-b-2 p-2 text-xs">
    <h2 class="font-semibold text-gray-500">{{ information }}: </h2>
    <p>{{ description }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  information: String,
  description: String
})
</script>
