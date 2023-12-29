import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChangeUser = defineStore('toggleUser', () => {
  const toggle = ref(false)

  function handleToggle() {
    toggle.value = !toggle.value
  }

  function handleChange() {
    toggle.value = false
  }

  return { toggle, handleToggle, handleChange }
})
