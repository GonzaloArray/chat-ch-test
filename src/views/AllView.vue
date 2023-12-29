<script setup lang="ts">
  import AsideChatDashboard from '@/components/chat/aside-dashboard.vue'

</script>
<template>
  <div class="grid grid-cols-12 h-full relative">
    <AsideChatDashboard />
    <section class="col-span-12 row-span-12 xl:col-span-9 h-full flex-1">
      <RouterView/>
    </section>
  </div>
</template>