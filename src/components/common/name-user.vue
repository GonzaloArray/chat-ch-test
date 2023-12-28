<template>
  <h2 :class="['font-semibold text-gray-800', wrapperClass]">
    {{ name }}
  </h2>
</template>

<script setup lang="ts">
defineProps({
  wrapperClass: {
    type: String,
    default: ''
  },
  name: String
});
</script>