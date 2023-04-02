<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { LineChart, useLineChart, DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { useDashboardStore } from "@/stores/dashboard";
import Table from "./TableDetailChart.vue";
Chart.register(...registerables);
const state = useDashboardStore();
const donutChartData = computed<ChartData<"doughnut">>(() => ({
  labels: state.pieChartData.map((item) => item.category_name),
  datasets: [
    {
      data: state.pieChartData.map((item) => item.total_nominal),
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
}));
onMounted(async () => {
  await state.pieChartTransaction();
  console.log(state.pieChartData);
});
</script>
<template>
  <div class="grid grid-cols-2">
    <div class="card">
      <DoughnutChart
        :chartData="donutChartData"
        v-if="state.pieChartData.length > 0"
      />
      <div v-else class="flex justify-center items-center">
        Tidak ada data untuk ditampilkan
      </div>
    </div>
    <div class="card">
      <h5 class="mb-4">Detail Transaksi Berdasarkan Kategori</h5>
      <Table />
    </div>
  </div>
</template>
<style>
.card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}
</style>
