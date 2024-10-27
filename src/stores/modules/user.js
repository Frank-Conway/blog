import { defineStore } from 'pinia'
import { ref } from 'vue'

export const blogUserStore = defineStore(
    'big-user', //区分，唯一
    () => {
        const token = ref('') //需引入，响应式ref
        const setToken = (newToken) => {
            token.value = newToken
        }
        const removeToken = () => {
            token.value = ''
        }
        return {
            token,
            setToken,
            removeToken
        }
    },
    {
        persist: true // 持久化
    }
)
