import './assets/css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import { useUiStore } from './store/ui'
import i18n from './i18n' 

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

const ui = useUiStore()
ui.init()