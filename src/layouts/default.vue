<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import { ref } from "vue";
const t = ref(false);
function toggleSidebar(param: boolean) {
  t.value = param;
  console.log(param);
}
</script>

<template>
  <section class="flex w-full min-h-screen">
    <Sidebar
      class="z-40 fixed md:static md:w-1/5 bg-white p-5 h-screen md:block overflow-auto"
      :class="t ? 'w-full' : 'hidden'"
      @hiddenSidebar="toggleSidebar"
    />
    <main class="p-5 md:p-10 w-full">
      <Header class="mb-10" @toggleSidebar="toggleSidebar" />
      <RouterView />
    </main>
  </section>
</template>
