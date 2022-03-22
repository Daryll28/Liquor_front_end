import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'mdb-ui-kit/css/mdb.min.css'

createApp(App).use(router).mount('#app')
