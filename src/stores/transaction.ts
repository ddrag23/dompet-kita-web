import httpClient from '@/utils/http-client';
import { ref,watch,computed  } from "vue";
import { defineStore } from "pinia";
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import { ElNotification } from 'element-plus'
export const useTransactionStore = defineStore("transaction", () => {
  const headers: Header[] = [
    { text: "Title", value: "title" },
    { text: "Nominal", value: "nominal" },
    { text: "Tanggal", value: "created_at" }
  ]
  const serverOptions = ref<ServerOptions>({
    page: 1,
    rowsPerPage: 5,
    sortBy: 'created_at',
    sortType: 'desc',
  });
  const loading = ref(false)
  const items = ref<Item[]>([])
  const totalItem = ref<number>()
  const reRender = ref<number>(1)
  async function load() {
    try {
      loading.value = true
      console.log(serverOptions.value)
      const { data } = await httpClient.get("/transaction", {
        params: {
          skip: serverOptions.value.page,
          take: serverOptions.value.rowsPerPage,
          sortBy: serverOptions.value.sortBy,
          sortType: serverOptions.value.sortType
        }
      })
      items.value = data.data
      totalItem.value = data.totalData
      loading.value = false

    } catch (error: any) {
      console.error(error)
      loading.value = false
    }
  }

  async function submit(form: any) {
    try {
      const { data } = await httpClient.post('/transaction', {...form,nominal : +form.nominal})
      console.log(data)
      ElNotification({
        title: 'Success',
        message: data.message,
        type: 'success',
      })
      load()
    } catch (error: any) {
      console.error(error)
    }
  }
  async function update(id: string | number | undefined, form: any) {
    try {
      const { data } = await httpClient.put(`/transaction/${id}`, form)
      ElNotification({
        title: 'Success',
        message: data,
        type: 'success',
      })
      load()
    } catch (error: any) {
      console.error(error)
    }
  }

  async function deleteData(id: number) {
    try {
      const { data } = await httpClient.delete(`/transaction/${id}`)
      ElNotification({
        title: 'Success',
        message: data,
        type: 'success',
      })
      load()
    } catch (error: any) {
      console.error(error)
    }
  }
  watch(
  serverOptions,
    (value) => {
      console.log(value);
      reRender.value++
      load();
    },
    { deep: true }
  );
  return { headers, load, items, submit, update, deleteData, serverOptions, totalItem,loading,reRender }
});
