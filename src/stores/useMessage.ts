import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Chat, ChatMessage } from '@/type'
import { mockChats } from '@/config/chat'

export const useMessagesStore = defineStore('messages', () => {
  const messages = ref<ChatMessage[]>([])
  const mock = ref<Chat[]>(mockChats)

  const fetchMessages = async (id: string) => {
    if (!id) return
    try {
      const chat = mock.value.find((chat) => chat.id === Number(id))
      if (chat) {
        messages.value = chat.messages.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
      } else {
        messages.value = []
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error)
    }
  }

  const addMessage = (userId: string, newMessage: ChatMessage) => {
    const chatIndex = mock.value.findIndex((chat) => chat.id === Number(userId))
    if (chatIndex !== -1) {
      mock.value[chatIndex].messages.push(newMessage)
      mock.value[chatIndex].messages.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
      messages.value = [...mock.value[chatIndex].messages]
    }
  }

  return { messages, fetchMessages, addMessage, mock }
})
