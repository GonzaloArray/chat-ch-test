<template>
  <div class="flex relative" :class="{ 'justify-start': props.type === 'customer', 'justify-end': props.type !== 'customer' }">
    <Avatar v-if="props.type === 'customer'">
      {{ store.customer?.firstname.slice(0, 1) }}
    </Avatar>
    <Message :message="props.message">
      <Time class-name=" button-2 text-right right-0 rounded-full p-1 text-xs" :date="props.date" />
    </Message>
    <Avatar v-if="props.type !== 'customer'">
      You
    </Avatar>
    <TimeGeneric/>
  </div>
</template>
<script setup lang="ts">
import Message from '../common/message-generic.vue';
import Avatar from '../common/avatar-generic.vue';
import Time from '../common/time-generic.vue';

import { useCustomerStore } from '@/stores/useCustomer';

const store = useCustomerStore()

const props = defineProps({
  type: String,
  date: String,
  message: String
})


</script>

