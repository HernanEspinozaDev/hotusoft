<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import hyperledgerLogo from '../assets/hyperledger-fabric-fabric-logo.png'

const carouselRef = ref<HTMLElement>()
const currentIndex = ref(0)
let intervalId: number | undefined

const techStack = [
  {
    name: 'Hyperledger Fabric',
    logo: hyperledgerLogo,
    description: 'Plataforma blockchain empresarial'
  },
  {
    name: 'Go',
    logo: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
    description: 'Lenguaje de alto rendimiento'
  },
  {
    name: 'Blockchain',
    logo: 'https://cdn-icons-png.flaticon.com/512/2092/2092063.png',
    description: 'Tecnología de libro mayor distribuido'
  },
  {
    name: 'API RESTful',
    logo: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png',
    description: 'Servicios web modernos'
  }
]

const nextTech = () => {
  currentIndex.value = (currentIndex.value + 1) % techStack.length
}

onMounted(() => {
  intervalId = window.setInterval(() => {
    animateOutIn()
  }, 2600)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

const animateOutIn = () => {
  const el = carouselRef.value?.querySelector('.tech-focus') as HTMLElement
  if (!el) {
    nextTech()
    return
  }
  gsap.to(el, {
    x: -120,
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    ease: 'power2.in',
    onComplete: () => {
      nextTech()
      gsap.fromTo(el, {
        x: 120,
        opacity: 0,
        scale: 0.8
      }, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      })
    }
  })
}
</script>

<template>
  <div 
    ref="carouselRef"
    class="relative w-full flex flex-col items-center justify-center py-16"
    style="background: radial-gradient(ellipse at 60% 40%, rgba(52,152,219,0.10) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(52,152,219,0.08) 0%, transparent 80%);"
  >
    <!-- Orbes suaves de fondo -->
    <div class="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
    
    <!-- Carrusel central -->
    <div class="relative z-10 flex flex-col items-center justify-center">
      <transition name="fade-move" mode="out-in">
        <div
          :key="techStack[currentIndex].name"
          class="tech-focus flex flex-col items-center justify-center"
        >
          <div class="relative w-32 h-32 md:w-40 md:h-40 mb-4 flex items-center justify-center">
            <img
              :src="techStack[currentIndex].logo"
              :alt="techStack[currentIndex].name"
              class="w-full h-full object-contain drop-shadow-xl"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-primary-500/10 rounded-full blur-2xl"></div>
          </div>
          <h4 class="text-lg md:text-xl font-bold text-dark-100 mb-1 text-center">
            {{ techStack[currentIndex].name }}
          </h4>
          <p class="text-base md:text-lg text-dark-200/80 text-center max-w-xs">
            {{ techStack[currentIndex].description }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-move-enter-active, .fade-move-leave-active {
  transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
}
.fade-move-enter-from {
  opacity: 0;
  transform: translateX(120px) scale(0.8);
}
.fade-move-leave-to {
  opacity: 0;
  transform: translateX(-120px) scale(0.8);
}
</style>