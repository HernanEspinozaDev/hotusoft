import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    currentLocale: 'es' as 'es' | 'en'
  }),
  actions: {
    setLocale(newLocale: 'es' | 'en') {
      this.currentLocale = newLocale
      // Save to localStorage for persistence
      localStorage.setItem('locale', newLocale)
    },
    initLocale() {
      // Try to get locale from localStorage
      const savedLocale = localStorage.getItem('locale') as 'es' | 'en' | null
      if (savedLocale && ['es', 'en'].includes(savedLocale)) {
        this.currentLocale = savedLocale
      }
    }
  }
})