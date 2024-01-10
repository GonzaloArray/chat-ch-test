<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/header/NavBar.vue'


import { onMounted } from 'vue';

onMounted(async () => {
  const response = await fetch('https://revhouse.azurewebsites.net/api/v1/token', {
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfdXNlcl9pZCI6IjkwODgzNWUxLTdmNDktNDQxZC05YjY5LTc1NGI1MThiODUxZiJ9.6hq6C4uxCrwNLS4G_rkcEzHWyzukfG1i3zwbNwR3lPI`,
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  console.log(data);
});


</script>

<template>
  <div class="flex flex-col h-screen">
    <NavBar/>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
