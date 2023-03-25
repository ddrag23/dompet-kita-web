<script setup lang="ts">
import {onMounted} from 'vue'
import { useCategoryStore } from '@/stores/category';

const state = useCategoryStore()
onMounted(async () => {
 await state.load()
})
</script>
<template>
</template>