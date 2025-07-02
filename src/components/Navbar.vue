<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useUIStore } from '../stores/uiStore'
import { useI18n } from 'vue-i18n'
import hotusoftLogo from '../assets/HotuSoft Logo Large.png'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const uiStore = useUIStore()
const router = useRouter()

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    uiStore.closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navItems = [
  { key: 'home', route: '/' },
  { key: 'roadmap', route: '/roadmap' },
  { key: 'about', route: '/about' },
  { key: 'contact', route: '/contact' }
]
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'glass-effect shadow-lg' 
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link 
            to="/"
            class="hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded block"
          >
            <img 
              :src="hotusoftLogo" 
              alt="Hotusoft Logo" 
              class="h-12 w-auto"
            />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <button
              v-for="item in navItems"
              :key="item.key"
              @click="router.push(item.route)"
              class="text-dark-100 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {{ t(`nav.${item.key}`) }}
            </button>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="uiStore.toggleMenu()"
            class="glass-effect p-2 rounded-md text-dark-100 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <Menu v-if="!uiStore.isMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div
        v-show="uiStore.isMenuOpen"
        class="md:hidden glass-effect border-t border-white/10"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <button
            v-for="item in navItems"
            :key="item.key"
            @click="router.push(item.route)"
            class="text-dark-100 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {{ t(`nav.${item.key}`) }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>