<script setup lang="ts">
  import AsideChatDashboard from '@/components/chat/aside-dashboard.vue'

</script>
<template>
  <div class="grid grid-cols-12 h-full">
    <AsideChatDashboard />
    <section class="col-span-9">
      <RouterView/>
    </section>
  </div>
</template>