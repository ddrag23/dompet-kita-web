<script setup lang="ts">
import DataGrid from "./components/DataGrid.vue";
import { Bell } from "@element-plus/icons-vue";
</script>

<template>
  <Header>
    <div>
      <p class="text-2xl font-bold">Users</p>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="/">Users Management</a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
  </Header>
  <el-card class="box-card mt-10">
    <template #header>
      <div class="flex justify-between">
        <span>Daftar Pengguna</span>
        <el-button class="button" text>Add</el-button>
      </div>
    </template>
    <DataGrid />
  </el-card>
</template>
