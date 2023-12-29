<template>
  <div class="border-2 flex flex-col">
    <RowInformation information="Bandeja de entrada" description="General" />
    <RowInformation information="Estado del ticket" description="Pendiente" />
    <RowInformation information="Creado" description="12/23" />
    <RowInformation information="Etiqueta" description="Sin tag" />
    <RowInformation information="Diálogo" description="Último diálogo" />
  </div>
</template>

<script setup lang="ts">
import RowInformation from '../common/row-information.vue'
</script>
