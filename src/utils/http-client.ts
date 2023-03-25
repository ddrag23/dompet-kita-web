import axios from 'axios'
import router from '@/router/index'
const instance = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
})
instance.interceptors.request.use((config : any) :any => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = token ? `Bearer ${token}` : '' 
    return config
})
instance.interceptors.response.use(res => res,err => {
    if (err.response.status == 401) {
        router.push({name:'login'})
    }
    return Promise.reject(err)
})
export default instance;