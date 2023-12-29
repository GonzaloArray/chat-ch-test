<template>
  <div :class="className">
    {{ formattedDate }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getConvertDateHour } from '@/helper/fnDate';

const props = defineProps({
  date: String,
  className: String
})

const formattedDate = computed(() => {
  return getConvertDateHour(props.date ?? '')
});
</script>