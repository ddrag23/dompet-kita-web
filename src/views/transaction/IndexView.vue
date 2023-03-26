<script setup lang="ts">
import Table from "./components/Table.vue";
import { ref, reactive, onMounted } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useTransactionStore } from "@/stores/transaction";
import { useCategoryStore } from "@/stores/category";
import { useAuthStore } from "@/stores/auth";
import { ElMessage, ElMessageBox } from "element-plus";

const dialogVisible = ref(false);
const loadingButton = ref(false);
const isUpdate = ref(false);
const state = useTransactionStore();
const categoryState = useCategoryStore();
const userState = useAuthStore();
const idCategory = ref<string | number>();
const formCategory = ref<FormInstance>();
const rules = reactive<FormRules>({
  category_name: [
    { required: true, message: "Tolong input nama kategori", trigger: "blur" },
  ],
});
const user = userState.userLogin;
const form = reactive<any>({
  category_id: null,
  title: null,
  nominal: 0,
  user_id: user.id,
});

onMounted(async () => {
  await categoryState.load();
});

async function submit() {
  await formCategory.value?.validate(async (valid, fields) => {
    if (valid) {
      loadingButton.value = true;
      console.log(form);
      if (isUpdate.value) {
        await state.update(idCategory.value, form);
      } else {
        await state.submit(form);
      }
      loadingButton.value = false;
      dialogVisible.value = false;
      formCategory.value?.resetFields();
    } else {
      console.log("error submit!", fields);
      loadingButton.value = false;
    }
  });
  console.log(form);
}

function showDialog() {
  dialogVisible.value = true;
  formCategory.value?.resetFields();
  isUpdate.value = false;
}

function edit(selectionData: any) {
  form.category_name = selectionData.category_name;
  form.user_id = selectionData.user_id;
  dialogVisible.value = true;
  isUpdate.value = true;
  idCategory.value = selectionData.id;
}

async function deleteData(id: number) {
  ElMessageBox.confirm(
    "Data kategori akan dihapus permanen, lanjutkan?",
    "Warning",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning",
    }
  )
    .then(async () => await state.deleteData(id))
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Delete canceled",
      });
    });
}
</script>
<template>
  <section class="w-full">
    <el-card>
      <div class="flex justify-end mb-5">
        <el-button type="primary" icon="Plus" @click="showDialog"
          >Tambah</el-button
        >
      </div>
      <Table @edit="edit" @delete="deleteData" />
    </el-card>
    <el-dialog v-model="dialogVisible" title="Modal Kategori">
      <el-form
        ref="formCategory"
        :model="form"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        status-icon
        label-position="top"
      >
        <el-form-item label="Title" prop="title" required>
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="Kategori" prop="category_id" required>
          <el-select v-model="form.category_id" placeholder="Select" style="width:100%;">
            <el-option
              v-for="item in categoryState.items"
              :key="item.id"
              :label="item.category_name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Nominal" prop="nominal" required>
          <el-input v-model="form.nominal" type="number" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="submit" :loading="loadingButton">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </section>
</template>
