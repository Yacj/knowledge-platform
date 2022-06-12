import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import pinia from './store'
app.use(pinia)

import router from './router'
app.use(router)

import globalProperties from '@/util/global.properties'
globalProperties(app)

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 全局样式
import '@/assets/styles/globals.scss'

// Uno css
import 'uno.css'
// normalize.css
import '@unocss/reset/normalize.css'
// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
import '@unocss/reset/eric-meyer.css'

app.mount('#app')
