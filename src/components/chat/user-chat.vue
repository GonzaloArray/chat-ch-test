<script setup lang="ts">
import IconUser from '@/components/icons/IconUser.vue'
import IconStart from '@/components/icons/IconStart.vue'

import ChipGeneric from '@/components/common/chip-generic.vue'
import UserTitle from '@/components/common/name-user.vue'

import { defineProps } from 'vue'

const props = defineProps({
  customer: Object
})
</script>

<template>
  <RouterLink :to="`/conversaciones/${props.customer?.id}`" class="relative">
    <div class="flex flex-col gap-2 p-4 items-start border-b-2 hover:bg-yellow-100">
      <span class="absolute top-[10px] right-0 text-gray-400 text-xs px-2 py-1">hace 28 min</span>
      <div class="flex">
        <IconUser />
        <div class="ml-2">
          <UserTitle :name="props.customer?.firstname" />
          <p class="text-xs text-gray-600">ultimo mensaje...</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <ChipGeneric> 22:02 </ChipGeneric>
        <ChipGeneric>
          <div class="flex items-center gap-1">
            <IconStart />
            <span>General</span>
          </div>
        </ChipGeneric>
        <ChipGeneric>
          <div class="flex items-center gap-1">
            <IconUser class="w-[15px] h-[15px]" />
            <span>Nicolle Garamelli</span>
          </div>
        </ChipGeneric>
      </div>
    </div>
  </RouterLink>
</template>
