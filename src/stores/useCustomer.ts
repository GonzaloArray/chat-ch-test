import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Customer } from '@/type'
import { ApiClient } from '@/api/api-customer'

export const useCustomerStore = defineStore('customer', () => {
  const customer = ref<Customer | null>(null)

  const saveUser = (user: Customer) => {
    customer.value = user
  }

  const fetchCustomer = async (id: string) => {
    const apiClient = new ApiClient()
    if (!id) return
    try {
      const resp = await apiClient.getCustomerById(id as string)
      saveUser(resp.data)
    } catch (error) {
      console.error('Failed to fetch customer:', error)
    }
  }

  return { customer, fetchCustomer }
})
