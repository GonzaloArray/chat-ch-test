<script setup lang="ts">
import { useCustomerStore } from '@/stores/useCustomer'
import UserTitle from '@/components/common/name-user.vue'
import Title from '../common/title-generic.vue'
import InformationUser from './information-user.vue'
import StatusTicket from './status-ticket.vue'
const store = useCustomerStore()

import IconUserInfo from '../icons/IconUserInfo.vue'
import IconClose from '../icons/IconClose.vue'

IconClose
import { useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'


const isMobile = useMediaQuery('(max-width: 1279px)')
const isChatHiddenMobile = ref(isMobile)
const toogle = ref(false)

function toggleChatMobile() {
  toogle.value = !toogle.value
}
</script>
<template>
  <div class="flex flex-col h-full border-l-2 transition-all" :class="{ 'absolute right-0 bottom-0 w-[210px] bg-white z-50': isChatHiddenMobile && toogle, 'relative h-[84vh] col-span-1 md:col-span-3': !isChatHiddenMobile , 'relative': !toogle}">
    <button :class="toogle ? 'absolute top-2 right-2 w-[20px]': 'flex justify-center items-center h-full'" @click="toggleChatMobile" v-show="isMobile">
      <IconUserInfo v-show="!toogle" />
      <IconClose v-show="toogle" />
    </button>
    <header class="border-b-2 h-[60px] px-1 md:p-2 hidden md:block">
      <UserTitle :name="store.customer?.firstname" />
      <span class="text-xs">id: #{{ store.customer?.id }}</span>
    </header>
    <section class="p-2" :class="{ 'hidden': !toogle && isMobile }">
      <Title title="Ticket" />
      <StatusTicket />

      <div class="flex flex-col gap-1 md:gap-2 mt-1 md:mt-4">
        <div class="flex gap-2">
          <h2
            class="w-[80px] text-sm text-center text-blue-500 border-blue-500 border-b-2 p-1 font-semibold"
          >
            Contacto
          </h2>
          <h2 class="w-[80px] text-sm text-center p-1 text-gray-500 font-semibold">Adjuntos</h2>
          <h2 class="w-[80px] text-sm text-center p-1 text-gray-500 font-semibold">Feed</h2>
        </div>

        <div class="my-2 flex gap-2">
          <button class="p-2 bg-white rounded-lg border-2 text-xs w-full">Editar</button>
          <button class="p-2 bg-white rounded-lg border-2 text-xs w-full">Refrescar</button>
        </div>

        <InformationUser />
      </div>
    </section>
  </div>
</template>
