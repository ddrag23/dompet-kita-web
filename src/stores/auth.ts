import { ref } from "vue";
import { defineStore } from "pinia";
import type { AuthRequest } from "@/entities/auth.entity";
import httpClient from '@/utils/http-client'
import { ElNotification } from 'element-plus'
export const useAuthStore = defineStore("auth", () => {
  const isLogin = ref(false);
  async function login(credential: AuthRequest) {
    try {
      const response = await httpClient.post("/auth/login",credential)
      console.log(response.data)
      localStorage.setItem('user',JSON.stringify(response.data.user))
      localStorage.setItem('token',response.data.access_token)
      isLogin.value = true
    } catch (error : any) {
      console.error(error)
      ElNotification({
        title: 'Gagal',
        message: error.response.status == 401 ? 'Username atau password salah' : "Login gagal",
        type: 'error',
      })
    }
  }

  return { login, isLogin };
});
