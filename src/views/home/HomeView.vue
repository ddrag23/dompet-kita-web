<script setup lang="ts">
import Header from "@/components/Header.vue";
import { Bell } from "@element-plus/icons-vue";
import Statistic from "./components/Statistic.vue";
import DashboardChart from "./components/DashboardChart.vue";
</script>

<template>
  <section id="main" class="w-full flex flex-col gap-4">
    <Statistic />
    <DashboardChart />
  </section>
</template>
