<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useTransactionStore } from "@/stores/transaction";
import { Delete, Edit } from "@element-plus/icons-vue";
import moment from "moment";
const state = useTransactionStore();
onMounted(async () => {
  await state.load();
});
function formatDate(date: Date) {
  moment.locale("id");
  return moment(date).format("D/MMMM/YYYY h:mm");
}
</script>
<template>
  <EasyDataTable
  :key="state.reRender"
    v-model:server-options="state.serverOptions"
    :headers="state.headers"
    :loadin="state.loading"
    :items="state.items"
    :server-items-length="state.totalItem"
    buttons-pagination
  >
    <template #item-created_at="item">
      {{ formatDate(item.created_at) }}
    </template>
  </EasyDataTable>
</template>
