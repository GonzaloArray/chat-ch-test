<script setup lang="ts">
 import AsideDashboardInbox from '@/components/aside/dashboard-inbox.vue'
</script>

<template>
  <div class="flex flex-1">
    <AsideDashboardInbox/>
    <main class="flex-1 w-full">
      <RouterView/>
    </main>
  </div>
</template>
