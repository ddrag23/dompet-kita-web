import httpClient from '@/utils/http-client';
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", () => {
    const nominalThisMont = ref<number>(0)
    async function loadNominalMonth() {
        try {
            const {data} = await httpClient.get('/dashboard/total-transaction')
            nominalThisMont.value = data[0].total_nominal
            console.log()
        } catch (error) {
            console.error(error)
        }
    }

    return { nominalThisMont, loadNominalMonth };
});
