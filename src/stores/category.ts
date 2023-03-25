import httpClient from '@/utils/http-client';
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Header, Item } from "vue3-easy-data-table";
export const useCategoryStore = defineStore("category", () => {
    const headers:Header[] = [
        { text: "Kategori", value: "category_name" },
        { text: "Aksi", value: "id" }
    ]
    const items = ref<Item[]>()
    async function load() {
        try {
            const {data} = await httpClient.get("/category")
            console.log(data)
          } catch (error : any) {
            console.error(error)
          }
    }
    return {headers,load,items}
});
