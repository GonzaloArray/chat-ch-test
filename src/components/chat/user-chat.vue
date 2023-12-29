<script setup lang="ts">
import IconUser from '@/components/icons/IconUser.vue'
import IconStart from '@/components/icons/IconStart.vue'

import ChipGeneric from '@/components/common/chip-generic.vue'
import UserTitle from '@/components/common/name-user.vue'

import { defineProps, computed } from 'vue'
import { useCustomerStore } from '@/stores/useCustomer'
import { useMessagesStore } from '@/stores/useMessage'
import { getConvertDateHour, getCalculateTimeAgo } from '@/helper/fnDate'

import Avatar from '../common/avatar-generic.vue'

const props = defineProps({
  customer: Object,
  change: Function
})

const store = useCustomerStore()
const storeMessage = useMessagesStore()


const lastMessage = computed(() => {
  const messages = storeMessage.mock
    .find(chat => chat.id === props.customer?.id)?.messages
  if (messages && messages.length > 0) {
    return messages.reduce((latest, message) =>
      new Date(latest.timestamp).getTime() > new Date(message.timestamp).getTime() ? latest : message
    );
  }
  return null;
})

const lastMessageTime = computed(() => {
  return lastMessage.value ? getConvertDateHour(lastMessage.value.timestamp) : ''
})

const lastMessageAgo = computed(() => {
  return lastMessage.value ? getCalculateTimeAgo(lastMessage.value.timestamp) : ''
})

const lastMessageContent = computed(() => {
  return lastMessage.value ? lastMessage.value.content : 'No hay mensajes'
})

</script>

<template>
  <RouterLink @click.prevent="change" :to="`/conversaciones/${props.customer?.id}`" class="relative">
    <div class="flex flex-col gap-2 p-4 items-start border-b-2 hover:bg-yellow-100" :class="{ 'bg-yellow-100': store.customer?.id === props.customer?.id }">
      <span class="absolute top-[10px] right-0 text-gray-400 text-xs px-2 py-1">{{ lastMessageAgo }}</span>
      <div class="flex">
        <Avatar>
          {{ props.customer?.firstname.slice(0, 1) }}
        </Avatar>
        <div class="ml-2">
          <UserTitle :name="props.customer?.firstname" />
          <p class="text-xs text-gray-600">{{ lastMessageContent }}</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <ChipGeneric>{{lastMessageTime}}</ChipGeneric>
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
