import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create the Vue application
const app = createApp(App)

// Use the router
app.use(router)

// Mount the application
app.mount('#app')

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err, info)
}

// Global properties (if needed)
app.config.globalProperties.$appName = 'Samhita Bazaar'