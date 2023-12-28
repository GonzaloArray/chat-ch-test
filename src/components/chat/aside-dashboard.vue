<script setup lang="ts">
import { onMounted, ref } from 'vue'
import UserChatVue from './user-chat.vue'
import { ApiClient } from '@/api/api-customer'
import type { Customer } from '@/type'

const apiClient = new ApiClient()
const customers = ref<Customer[]>([])

onMounted(async () => {
  const resp = await apiClient.getCustomers()
  customers.value = resp.data
})
</script>

<template>
  <section class="col-span-3 border-r-2 flex flex-col h-[84vh]">
    <div class="flex flex-col items-center px-3 py-3 border-b-2">
      <input
        class="w-full p-2 text-gray-700 text-xs bg-white border rounded-lg focus:outline-none"
        type="search"
        placeholder="Buscar por nombre o número de teléfono"
      />
    </div>
    <div
      class="overflow-y-scroll overflow-hidden"
      style="scrollbar-width: thin; -ms-overflow-style: none"
    >
      <div v-for="customer in customers" :key="customer.id" class="border-b">
        <UserChatVue :customer="customer" />
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
