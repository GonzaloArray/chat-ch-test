<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  name: String
})
</script>

<template>
  <button class="p-2 bg-white rounded-lg border-2 text-xs w-full">{{ name }}</button>
</template>