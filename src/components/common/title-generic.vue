<template>
  <h2 class="text-blue-500 mb-2">{{ title }}</h2>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: String
})
</script>
