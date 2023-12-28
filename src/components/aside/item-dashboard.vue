<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router';

type Link = {
  name: string;
  link: string;
}

const props = defineProps({
  additionalLinks: Array as () => Link[]
})

</script>
<template>
  <ul class="flex flex-col gap-1 pb-2">
    <li
      class="flex rounded-lg hover:bg-black-100 hover:rounded-lg transition-colors"
      v-for="link in props.additionalLinks"
      :key="link.name"
    >
      <RouterLink class="text-xs p-2 w-full text-gray-300" :to="link.link">{{ link.name }}</RouterLink>
    </li>
  </ul>
</template>
