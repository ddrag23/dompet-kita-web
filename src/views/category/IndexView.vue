<script setup lang="ts">
import {  useRouter, useRoute } from "vue-router";
import Table from './components/Table.vue'
const router = useRouter();
</script>
<template>
  <section class="w-full">
    <Table/>
  </section>
</template>
