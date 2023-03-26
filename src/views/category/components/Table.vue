<script setup lang="ts">
import { onMounted } from "vue";
import { useCategoryStore } from "@/stores/category";
import { Delete, Edit } from "@element-plus/icons-vue";
const state = useCategoryStore();
onMounted(async () => {
  await state.load();
  console.log("state", state.items);
});
</script>
<template>
  <EasyDataTable :headers="state.headers" :items="state.items" show-index>
    <template #item-aksi="item">
      <div class="flex flex-col md:flex-row my-2">
        <el-button type="primary" :icon="Edit" @click="$emit('edit',item)" />
        <el-button type="danger" :icon="Delete" @click="$emit('delete',item.id)" />
      </div>
    </template>
  </EasyDataTable>
</template>
