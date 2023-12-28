<script setup lang="ts">
import IconUser from '@/components/icons/IconUser.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import IconChevronDown from '@/components/icons/IconChevronDown.vue'
import { defineProps } from 'vue'

const props = defineProps({
  isMenuOpen: Boolean
})
</script>

<template lang="">
  <div class="flex gap-3 items-center">
    <div class="relative">
      <IconUser />
      <div class="absolute bottom-0 right-0 bg-green-400 rounded-full">
        <IconCheck/>
      </div>
    </div>
    <div :class="{ hidden: props.isMenuOpen }">
      <h4 class="text-sm">Nicolas Marquat</h4>
      <p class="text-gray-400 text-sm">Chuck E. Cheese</p>
    </div>
    <IconChevronDown/>
  </div>
</template>
