<template>
  <div class="relative">
    <button 
      @click="toggleDropdown" 
      class="flex items-center space-x-1 px-3 py-2 rounded-md bg-[#1D232A] hover:bg-[#2C5E8A] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3498DB]"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <span class="text-[#EAEAEA]">{{ currentLocale === 'es' ? 'ES' : 'EN' }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#8899A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <div 
      v-if="isOpen" 
      class="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-[#1D232A] ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="language-menu"
    >
      <div class="py-1" role="none">
        <button 
          @click="changeLanguage('es')" 
          class="w-full text-left px-4 py-2 text-sm text-[#EAEAEA] hover:bg-[#2C5E8A] transition-colors duration-200"
          :class="{ 'bg-[#2C5E8A]': currentLocale === 'es' }"
          role="menuitem"
        >
          Español
        </button>
        <button 
          @click="changeLanguage('en')" 
          class="w-full text-left px-4 py-2 text-sm text-[#EAEAEA] hover:bg-[#2C5E8A] transition-colors duration-200"
          :class="{ 'bg-[#2C5E8A]': currentLocale === 'en' }"
          role="menuitem"
        >
          English
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useUiStore } from '../stores/uiStore';

const uiStore = useUiStore();
const isOpen = ref(false);

const currentLocale = computed(() => uiStore.currentLocale);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function changeLanguage(locale: 'es' | 'en') {
  uiStore.setLocale(locale);
  isOpen.value = false;
}

// Close dropdown when clicking outside
function handleClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (!target.closest('.relative')) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>