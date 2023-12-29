<script setup lang="ts">
import { ref, watch } from 'vue'
import { asideLinks, additionalLinks } from '@/config/aside'
import ItemDashboard from './item-dashboard.vue'
import IconArrow from '../icons/IconArrow.vue'
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 1200px)')
const isAsideHidden = ref(!isMobile.value)

watch(isMobile, (newValue) => {
  isAsideHidden.value = !newValue
})

function toggleAside() {
  isAsideHidden.value = !isAsideHidden.value
}
</script>

<template>
  <aside
    class="aside-responsive h-full px-2 bg-blue-1000 "
    :class="{ 'is-hidden absolute xl:relative top-0 button-0 z-50': isAsideHidden, 'w-[25px] relative': !isAsideHidden }"
  >
    <div class="flex flex-col justify-between h-full pt-10">
      <button
        class="absolute top-1 right-0 text-white bg-black-100 p-1 rounded-md"
        @click="toggleAside"
      >
        <div :class="isAsideHidden ? '' : 'rotate-180'" class="transition-all">
          <IconArrow />
        </div>
      </button>
      <ItemDashboard v-show="isAsideHidden" :additional-links="asideLinks" />

      <ItemDashboard v-show="isAsideHidden" :additional-links="additionalLinks" />
    </div>
  </aside>
</template>
