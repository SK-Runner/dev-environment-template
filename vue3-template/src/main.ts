import { createApp } from 'vue'
import createPinia from './store/index'
import './style.css'
import App from './App.vue'

createApp(App).use(createPinia).mount('#app')
