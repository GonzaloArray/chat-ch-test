<template>
  <header class="flex items-center justify-between h-[60px] px-2 py-4 md:p-4 border-b-2">
    <div>
      <UserTitle :name="firstName" />
      <p class="hidden md:block text-xs">Email: {{ email }}</p>
    </div>
    <div class="flex items-center gap-1 md:gap-4">
      <ButtonGeneric name="Asignarme" />
      <ButtonGeneric name="Designarme" />

    </div>
  </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import ButtonGeneric from '@/components/common/button-generic.vue'
import UserTitle from '@/components/common/name-user.vue'

defineProps(['firstName', 'email']);
</script>