<template>
  <header class="flex items-center justify-between h-[60px] p-4 border-b-2">
    <div>
      <h2 class="font-bold">{{ firstName }}</h2>
      <p class="text-xs">Email: {{ email }}</p>
    </div>
    <div class="flex items-center gap-4">
      <ButtonGeneric name="Asignarme" />
      <ButtonGeneric name="Designarme" />

      <button type="button">X</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import ButtonGeneric from '@/components/common/button-generic.vue'

defineProps(['firstName', 'email']);
</script>