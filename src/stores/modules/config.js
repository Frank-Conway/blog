import { defineStore } from 'pinia'
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark()
const toggleDark = useToggle(isDark)

export const configStore = defineStore("config", {
    persist: {
        enabled: true, //开启数据持久化
        strategies: [
            {
                key: "configState", //给一个要保存的名称
                storage: localStorage, //localStorage 存储方式
            },
        ],
    },
    state: () => {
        return {
            isDark: isDark.value
        };
    },
    getters: {
        getIsDark() {
            return this.isDark
        },
    },
    actions: {
        setToggleDark() {
            toggleDark()
            this.isDark = isDark.value
        },
    },
})

