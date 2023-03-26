import httpClient from '@/utils/http-client';
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Header, Item } from "vue3-easy-data-table";
import { ElNotification } from 'element-plus'
export const useCategoryStore = defineStore("category", () => {
    const headers:Header[] = [
        { text: "Kategori", value: "category_name",width:700},
        { text: "Aksi", value: "aksi" }
    ]
    const items = ref<Item[]>([])
    async function load() {
        try {
            const {data} = await httpClient.get("/category")
            items.value = data
            console.log(items.value)
          } catch (error : any) {
            console.error(error)
          }
    }

    async function submit(form : any) {
      try {
        const {data} = await httpClient.post('/category',form)
        console.log(data)
        ElNotification({
          title: 'Success',
          message: data,
          type: 'success',
        })
        load()
      } catch (error : any) {
        console.error(error)
      }
    }
    async function update(id : string | number | undefined,form : any) {
      try {
        const {data} = await httpClient.put(`/category/${id}`,form)
        console.log(data)
        ElNotification({
          title: 'Success',
          message: data,
          type: 'success',
        })
        load()
      } catch (error : any) {
        console.error(error)
      }
    }

    async function deleteData(id:number) {
      try {
        const {data} = await httpClient.delete(`/category/${id}`)
        console.log(data)
        ElNotification({
          title: 'Success',
          message: data,
          type: 'success',
        })
        load()
      } catch (error : any) {
        console.error(error)
      }
    }
    return {headers,load,items,submit,update,deleteData}
});
