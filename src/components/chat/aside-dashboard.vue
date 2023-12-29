<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import UserChatVue from './user-chat.vue'
import { ApiClient } from '@/api/api-customer'
import type { Customer } from '@/type'
import { useMediaQuery } from '@vueuse/core'
import IconChat from '../icons/IconChat.vue'
import IconClose from '../icons/IconClose.vue'

const isMobile = useMediaQuery('(max-width: 1279px)')
const isChatHiddenMobile = ref(isMobile)
const toggle = ref(false)


const apiClient = new ApiClient()
const customers = ref<Customer[]>([])
const searchQuery = ref('')

onMounted(async () => {
  const resp = await apiClient.getCustomers()
  customers.value = resp.data
})

const filteredCustomers = computed(() => {
  return customers.value.filter((customer) =>
    customer.firstname.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const toggleChatMobile = () => {
  toggle.value = !toggle.value
}

const toggleChangeDefault = () => {
  toggle.value = false
}

</script>

<template>
  <section
    :class="{
      'absolute left-0 bottom-0 top-0 right-0 bg-white z-50': isChatHiddenMobile && toggle,
      'relative h-full col-span-1 md:col-span-3': !isChatHiddenMobile,
      'relative col-span-12': !toggle
    }"
    class="flex flex-col border-r-2 xl:h-[90vh]  xl:overflow-scroll"
  >
    <button
      class="bg-gray-100 flex justify-center items-center p-2 border-b-2"
      :class="{ 'h-full': !toggle }"
      @click="toggleChatMobile"
      v-show="isMobile"
    >
      <IconChat v-show="!toggle" />
      <IconClose v-show="toggle" />
    </button>
    <div
      :class="{ hidden: !toggle && isMobile }"
      class="flex flex-col items-center px-3 py-3 border-b-2"
    >
      <input
        class="w-full p-2 text-gray-700 text-xs bg-white border rounded-lg focus:outline-none"
        type="search"
        placeholder="Buscar por nombre o número de teléfono"
        v-model="searchQuery"
      />
    </div>

    <div
      class="overflow-y-scroll overflow-hidden"
      style="scrollbar-width: thin; -ms-overflow-style: none"
      :class="{ hidden: !toggle && isMobile }"
    >
      <div v-for="customer in filteredCustomers" :key="customer.id" class="border-b">
        <UserChatVue :customer="customer" :change="toggleChangeDefault" />
      </div>
    </div>
  </section>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
