<script setup lang="ts">
import { RouterView, useRouter, useRoute } from "vue-router";
import { useMenu } from "@/stores/menu";
const router = useRouter();
const route = useRoute();
function toRoute(path: string) {
  router.push({ name: path });
}
</script>
<template>
  <section class="w-full">
    <RouterView />
  </section>
</template>
<style lang="postcss" scoped>
.side-active {
  @apply bg-blue-700 text-white rounded;
}
</style>
