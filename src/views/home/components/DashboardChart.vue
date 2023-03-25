<script setup lang="ts">
import { computed } from "vue";
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";

Chart.register(...registerables);

const testData = computed<ChartData<"line">>(() => ({
  labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
  datasets: [
    {
      data: [30, 40, 60, 70, 5],
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
}));
const options = computed<ChartOptions<"doughnut">>(() => ({
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
}));
const { lineChartProps, lineChartRef } = useLineChart({
  chartData: testData,
  options,
});
</script>
<template>
  <div class="card">
    <LineChart v-bind="lineChartProps" />
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
