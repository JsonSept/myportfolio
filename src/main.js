import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../public/particles'
// import '../public/app.js'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


createApp(App).use(store).use(router).mount('#app')
