import pinia from '@/stores/index.js'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// svg
import "virtual:svg-icons-register"

// 全局样式入口
import "./styles/base.scss"
import "./styles/layout.scss"
import "./styles/dark.scss"
import "./styles/element/custom.scss"

// 样式
import "element-plus/dist/index.css"
// element-plus 暗黑主题
import "element-plus/theme-chalk/dark/css-vars.css"

const app = createApp(App)

app.use(router).use(pinia).mount('#app')
