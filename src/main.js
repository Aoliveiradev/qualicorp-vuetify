import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import axios from 'axios';

const app = createApp(App)
app.config.globalProperties.$axios = axios;
axios.defaults.baseURL = 'http://localhost:5000';
registerPlugins(app)

app.mount('#app')
