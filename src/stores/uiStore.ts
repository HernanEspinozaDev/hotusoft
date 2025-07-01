import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    currentLocale: 'es' as 'es',
    isMenuOpen: false,
  }),
  
  actions: {
    setLocale(locale: 'es') {
      this.currentLocale = locale
      localStorage.setItem('locale', locale)
    },
    
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    
    closeMenu() {
      this.isMenuOpen = false
    }
  },
})