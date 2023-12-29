<script setup lang="ts">
import { useCustomerStore } from '@/stores/useCustomer';
import RowInformation from '@/components/common/row-information.vue';

const store = useCustomerStore()
</script>
<template>
  <div class="border-2 flex flex-col">
    <RowInformation information="Id" :description="store.customer?.id.toString()"/>
    <RowInformation information="Apellido" :description="store.customer?.lastname"/>
    <RowInformation information="Dirección" :description="store.customer?.address"/>
    <RowInformation information="Tel" :description="store.customer?.cellphone"/>
    <RowInformation information="Documento" :description="store.customer?.document"/>
    <RowInformation information="Pasaporte" :description="store.customer?.document_type"/>
    <RowInformation information="Estado" :description="store.customer?.status"/>
  </div>
</template>
