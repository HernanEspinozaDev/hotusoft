import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { useUiStore } from './stores/uiStore'

// Import language files
import es from './locales/es.json'
import en from './locales/en.json'

// Create i18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'es', // Default language
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
})

// Create Pinia store
const pinia = createPinia()

// Create and mount the app
const app = createApp(App)
app.use(i18n)
app.use(pinia)

// Initialize the UI store
const uiStore = useUiStore()
uiStore.initLocale()

app.mount('#app')
