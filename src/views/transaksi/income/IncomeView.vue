<script setup lang="ts">
import DataGrid from "./components/DataGrid.vue";
</script>

<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="flex justify-between">
        <span>Daftar Transaksi Masuk</span>
        <el-button class="button" text>Add</el-button>
      </div>
    </template>
    <DataGrid />
  </el-card>
</template>
