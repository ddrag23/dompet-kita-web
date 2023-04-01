<script lang="ts" setup>
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from "@element-plus/icons-vue";
import StatisticCard from "@/components/StatisticCard.vue";
import { onMounted } from "vue";
import { useDashboardStore } from "@/stores/dashboard";

const state = useDashboardStore();
onMounted(async () => {
  await state.loadNominalMonth();
});
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <StatisticCard
      title="Transaksi bulan ini"
      :value="state.nominalThisMont as number"
    />
    <StatisticCard title="Gaji Perbulan" :value="4500000" />
  </div>
</template>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}
.red {
  color: var(--el-color-error);
}
</style>
