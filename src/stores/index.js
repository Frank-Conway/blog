import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia =createPinia()
pinia.use(persist)

export * from './modules/user.js'
export * from './modules/config.js'
export * from './modules/article.js'
export default pinia
