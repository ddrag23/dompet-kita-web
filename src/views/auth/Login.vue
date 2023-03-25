<script setup lang="ts">
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const state = useAuthStore();
const form = reactive({ username: "", password: "" });
const router = useRouter();
async function login() {
  await state.login(form);
  if (state.isLogin) {
    router.push({ name: "home" });
  }
}
</script>
<template>
  <section class="flex justify-center items-center w-full h-screen">
    <el-card class="box-card w-full md:w-1/3 mx-2 md:mx-0">
      <p class="text-lg font-bold mt-3">Login to your account</p>
      <p class="text-sm font-semibold mb-5 text-slate-400">
        Welcome back, Select method to login
      </p>
      <el-divider />
      <el-form :model="form" label-position="top">
        <el-form-item label="Username">
          <el-input v-model="form.username" size="large" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input
            v-model="form.password"
            type="password"
            show-password
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="w-full" size="large" @click="login"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
      <div class="flex flex-col justify-center items-center w-full">
        <router-link to="/" class="text-sm">Forgot password?</router-link>
      </div>
    </el-card>
  </section>
</template>
