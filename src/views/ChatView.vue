<script setup lang="ts">
import {  onMounted, ref, watch} from 'vue'
import { useRoute } from 'vue-router'
import HeaderChat from '@/components/chat/header-chat.vue'
import IconSend from '@/components/icons/IconSend.vue'
import ConversationChat from '@/components/chat/conversation-chat.vue'
import PanelConfig from '@/components/chat/panel-config.vue'
import { useCustomerStore } from '@/stores/useCustomer'
import { useMessagesStore } from '@/stores/useMessage'

import { mockChats } from '@/config/chat'

const route = useRoute()

const userId = ref(route.params.id as string)

const storeCustomer = useCustomerStore()
const storeMessage = useMessagesStore()


onMounted(() => {
  storeCustomer.fetchCustomer(userId.value as string);
  storeMessage.fetchMessages(userId.value as string, mockChats)
})

watch(() => route.params.id, (newId) => {
  userId.value = newId as string
  storeCustomer.fetchCustomer(userId.value)
  storeMessage.fetchMessages(userId.value as string, mockChats)
}, { immediate: true })


</script>

<template>
  <div class="grid grid-cols-12 h-full">
    <div class="flex flex-col h-full col-span-9">
      <HeaderChat :first-name="storeCustomer.customer?.firstname" :email="storeCustomer.customer?.email" />
      <div class="flex-1 bg-image overflow-y-auto p-5">
        <ul>
          <li v-for="message in storeMessage.messages" :key="message.timestamp" class="mb-2">
            <ConversationChat :message="message.content" :type="message.from" />
          </li>
        </ul>
      </div>
      <form class="h-[70px] flex items-center p-3 border-t-2">
        <input
          class="w-full bg-slate-100 border-slate-300 border-2 p-2 rounded-md"
          type="text"
          placeholder="Escribir un mensaje..."
        />
        <button type="submit" class="hover:bg-slate-200 p-4 rounded-lg">
          <IconSend />
        </button>
      </form>
    </div>

    <PanelConfig />
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url('../assets/bg-chat.jpg');
  background-repeat: repeat;
  background-size: 500px;
  background-color: rgba(0, 0, 0, 0.092);
  background-blend-mode: darken;
}
</style>
