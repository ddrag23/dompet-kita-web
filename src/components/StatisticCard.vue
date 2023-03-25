<script lang="ts" setup>
import { defineProps } from "vue";
export interface StatisticCardType {
  title: string;
  value: number;
  isFooter?: boolean;
}
defineProps<StatisticCardType>();
</script>

<template>
  <div class="statistic-card">
    <el-statistic :value="value">
      <template #title>
        <div style="display: inline-flex; align-items: center">
          {{ title }}
          <slot name="tooltip" />
        </div>
      </template>
    </el-statistic>
    <div class="statistic-footer" v-if="isFooter">
      <div class="footer-item">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style>
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
</style>
