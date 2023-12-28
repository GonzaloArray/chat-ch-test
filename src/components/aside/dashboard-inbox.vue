<script setup lang="ts">
import { ref } from 'vue'
import { asideLinks, additionalLinks } from '@/config/aside'
import ItemDashboard from './item-dashboard.vue'

const isAsideHidden = ref(true)

function toggleAside() {
  isAsideHidden.value = !isAsideHidden.value
}
</script>

<template>
  <aside
    class="aside-responsive h-full w-[180px] px-2 bg-blue-1000"
    :class="{ 'is-hidden': isAsideHidden }"
  >
    <div class="flex flex-col justify-between h-full">
      <div class="relative pt-6">
        <button class="absolute top-0 right-0 text-white" @click="toggleAside">-</button>
        <ItemDashboard :additional-links="asideLinks" />
      </div>

      <ItemDashboard :additional-links="additionalLinks" />
    </div>
  </aside>
</template>
