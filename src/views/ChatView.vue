<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import HeaderChat from '@/components/chat/header-chat.vue'
import IconSend from '@/components/icons/IconSend.vue'
import ConversationChat from '@/components/chat/conversation-chat.vue'
import PanelConfig from '@/components/chat/panel-config.vue'
import { useCustomerStore } from '@/stores/useCustomer'
import { useMessagesStore } from '@/stores/useMessage'

const route = useRoute()

const userId = ref(route.params.id as string)

const storeCustomer = useCustomerStore()
const storeMessage = useMessagesStore()

const newMessage = ref('')

const chatContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  storeCustomer.fetchCustomer(userId.value as string);
  storeMessage.fetchMessages(userId.value as string)
})

watch(() => route.params.id, (newId) => {
  userId.value = newId as string
  storeCustomer.fetchCustomer(userId.value)
  storeMessage.fetchMessages(userId.value as string)
}, { immediate: true })

watch(storeMessage.messages, () => {
  nextTick(() => {
    const chatElem = chatContainer.value
    if (chatElem && chatElem instanceof HTMLElement) {
      chatElem.scrollTop = chatElem.scrollHeight
    }
  })
})

const handleSubmit = () => {
  if (newMessage.value.trim()) {
    storeMessage.addMessage(userId.value, {
      content: newMessage.value,
      timestamp: new Date().toISOString(),
      from: 'user'
    })
    newMessage.value = ''
  }
}

</script>

<template>
  <div class="grid grid-cols-12 h-full">
    <div class="flex flex-col h-[84vh] xl:h-[90vh] col-span-11 xl:col-span-9">
      <HeaderChat :first-name="storeCustomer.customer?.firstname" :email="storeCustomer.customer?.email" />
      <div ref="chatContainer" class="flex-1 bg-image overflow-hidden overflow-y-auto p-2 md:p-3 xl:p-5">
        <ul>
          <li v-for="message in storeMessage.messages" :key="message.timestamp" class="mb-2">
            <ConversationChat :date="message.timestamp" :message="message.content" :type="message.from" />
          </li>
        </ul>
      </div>
      <form @submit.prevent="handleSubmit" class="h-[70px] flex items-center p-3 border-t-2">
        <input
          v-model="newMessage"
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

::-webkit-scrollbar {
  width: 7px;
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
