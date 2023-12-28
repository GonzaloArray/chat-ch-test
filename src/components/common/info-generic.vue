<template>
  <div class="flex gap-2 border-b-2 p-2 text-xs">
    <h2 class="font-semibold text-gray-500">{{ name }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  name: String,
  description: String
})
</script>
