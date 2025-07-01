<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Play } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'

const { t } = useI18n()
const isLoaded = ref(false)
const heroRef = ref<HTMLElement>()
const particlesRef = ref<HTMLElement>()

let animationContext: gsap.Context

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)

  // Initialize GSAP animations
  if (heroRef.value && particlesRef.value) {
    initializeAnimations()
  }
})

onUnmounted(() => {
  if (animationContext) {
    animationContext.kill()
  }
})

const initializeAnimations = () => {
  if (!heroRef.value || !particlesRef.value) return

  animationContext = gsap.context(() => {
    // Create floating particles
    createParticles()
    
    // Animate background gradient
    animateBackground()
    
    // Create connection lines
    createConnections()
  }, heroRef.value)
}

const createParticles = () => {
  const particleCount = 50
  const particles: HTMLElement[] = []

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'absolute w-2 h-2 bg-primary-500 rounded-full opacity-20'
    
    // Random initial position
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight
    
    gsap.set(particle, {
      x: x,
      y: y,
      scale: Math.random() * 0.5 + 0.5
    })
    
    particlesRef.value?.appendChild(particle)
    particles.push(particle)
    
    // Animate particle movement
    gsap.to(particle, {
      x: x + (Math.random() - 0.5) * 400,
      y: y + (Math.random() - 0.5) * 400,
      duration: Math.random() * 10 + 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2
    })
    
    // Pulse animation
    gsap.to(particle, {
      opacity: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 3 + 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }
}

const createConnections = () => {
  const connectionCount = 15
  
  for (let i = 0; i < connectionCount; i++) {
    const line = document.createElement('div')
    line.className = 'absolute bg-gradient-to-r from-primary-500/20 to-transparent'
    
    const width = Math.random() * 200 + 100
    const height = 1
    const x = Math.random() * (window.innerWidth - width)
    const y = Math.random() * window.innerHeight
    const rotation = Math.random() * 360
    
    gsap.set(line, {
      width: width,
      height: height,
      x: x,
      y: y,
      rotation: rotation,
      transformOrigin: 'left center'
    })
    
    particlesRef.value?.appendChild(line)
    
    // Animate line opacity and scale
    gsap.to(line, {
      scaleX: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.1,
      duration: Math.random() * 4 + 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2
    })
  }
}

const animateBackground = () => {
  // Animate the main gradient orbs
  gsap.to('.floating-orb-1', {
    x: 100,
    y: -50,
    scale: 1.2,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })
  
  gsap.to('.floating-orb-2', {
    x: -80,
    y: 60,
    scale: 0.8,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1
  })
  
  // Create floating data nodes
  createDataNodes()
}

const createDataNodes = () => {
  const nodeCount = 8
  
  for (let i = 0; i < nodeCount; i++) {
    const node = document.createElement('div')
    node.className = 'absolute w-4 h-4 border-2 border-primary-500/40 rounded-full bg-primary-500/10'
    
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight
    
    gsap.set(node, {
      x: x,
      y: y
    })
    
    particlesRef.value?.appendChild(node)
    
    // Floating animation
    gsap.to(node, {
      y: y - 100,
      duration: Math.random() * 6 + 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2
    })
    
    // Pulse border
    gsap.to(node, {
      borderColor: 'rgba(52, 152, 219, 0.8)',
      scale: 1.5,
      duration: Math.random() * 2 + 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section 
    id="hero" 
    ref="heroRef"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Animated background container -->
    <div 
      ref="particlesRef"
      class="absolute inset-0 overflow-hidden pointer-events-none"
    ></div>
    
    <!-- Background gradient -->
    <div class="absolute inset-0 aurora-bg opacity-10"></div>
    
    <!-- Enhanced floating elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-orb-1 absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div class="floating-orb-2 absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
      
      <!-- Additional gradient orbs -->
      <div class="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-400/15 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute top-3/4 left-1/6 w-48 h-48 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/6 right-1/6 w-40 h-40 bg-primary-500/15 rounded-full blur-2xl"></div>
    </div>

    <!-- Blockchain network visualization -->
    <div class="absolute inset-0 opacity-30">
      <svg class="w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#3498DB;stop-opacity:0" />
            <stop offset="50%" style="stop-color:#3498DB;stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:#3498DB;stop-opacity:0" />
          </linearGradient>
        </defs>
        
        <!-- Network connections -->
        <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#lineGradient)" stroke-width="2" fill="none" class="animate-pulse" />
        <path d="M200,400 Q400,300 600,400 T1000,400" stroke="url(#lineGradient)" stroke-width="2" fill="none" class="animate-pulse" style="animation-delay: 1s;" />
        <path d="M150,600 Q350,500 550,600 T950,600" stroke="url(#lineGradient)" stroke-width="2" fill="none" class="animate-pulse" style="animation-delay: 2s;" />
        
        <!-- Network nodes -->
        <circle cx="100" cy="200" r="6" fill="#3498DB" class="animate-pulse" />
        <circle cx="500" cy="200" r="8" fill="#3498DB" class="animate-pulse" style="animation-delay: 0.5s;" />
        <circle cx="900" cy="200" r="6" fill="#3498DB" class="animate-pulse" style="animation-delay: 1s;" />
        <circle cx="200" cy="400" r="7" fill="#3498DB" class="animate-pulse" style="animation-delay: 1.5s;" />
        <circle cx="600" cy="400" r="9" fill="#3498DB" class="animate-pulse" style="animation-delay: 2s;" />
        <circle cx="1000" cy="400" r="6" fill="#3498DB" class="animate-pulse" style="animation-delay: 2.5s;" />
      </svg>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Transition
        appear
        enter-active-class="transition ease-out duration-1000"
        enter-from-class="opacity-0 transform translate-y-8"
        enter-to-class="opacity-100 transform translate-y-0"
      >
        <div v-if="isLoaded" class="space-y-6 sm:space-y-8">
          <!-- Main title -->
          <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight px-2">
            <span class="gradient-bg bg-clip-text text-transparent">
              {{ t('hero.title') }}
            </span>
            <br>
            <span class="text-dark-100">
              {{ t('hero.subtitle') }}
            </span>
          </h1>

          <!-- Description -->
          <p class="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-dark-200 leading-relaxed px-4">
            {{ t('hero.description') }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex justify-center items-center px-4">
            <button
              @click="scrollToSection('contact')"
              class="btn-primary group"
            >
              Contáctanos
            </button>
          </div>

          <!-- Tech stack carousel -->
          <!-- Eliminado el carrusel de tecnologías aquí -->
        </div>
      </Transition>
    </div>

    <!-- Enhanced scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div class="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center animate-pulse">
        <div class="w-1 h-3 bg-primary-500 rounded-full mt-2"></div>
      </div>
    </div>
  </section>
</template>