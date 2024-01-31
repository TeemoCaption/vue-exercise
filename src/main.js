import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 預設導入router內的index.js

createApp(App).use(router).mount('#app')