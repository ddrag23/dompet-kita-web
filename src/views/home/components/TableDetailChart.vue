<script setup lang="ts">
import { onMounted } from "vue";
import {useDashboardStore} from '@/stores/dashboard'
import { Delete, Edit } from "@element-plus/icons-vue";
import type { Header, Item } from "vue3-easy-data-table";

const state = useDashboardStore();
const headers:Header[] = [
        { text: "Kategori", value: "category_name"},
        { text: "Total Nominal Transaksi", value: "total_nominal" }
    ]
onMounted(async () => {
  await state.pieChartTransaction();
});
</script>
<template>
  <EasyDataTable :headers="headers" :items="state.pieChartData" show-index>
  </EasyDataTable>
</template>
