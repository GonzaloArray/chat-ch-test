import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Chat, ChatMessage } from '@/type'

export const useMessagesStore = defineStore('messages', () => {
  const messages = ref<ChatMessage[]>([])

  const fetchMessages = async (id: string, mock: Chat[]) => {
    if (!id) return
    try {
      const chat = mock.find((chat) => chat.id === Number(id))
      messages.value = chat?.messages || []
    } catch (error) {
      console.error('Failed to fetch messages:', error)
    }
  }

  return { messages, fetchMessages }
})
