<script setup lang="ts">
 import AsideDashboardInbox from '@/components/aside/dashboard-inbox.vue'
</script>

<template>
  <div class="flex flex-1 relative overflow-hidden">
    <AsideDashboardInbox/>
    <main class="flex">
      <RouterView/>
    </main>
  </div>
</template>
