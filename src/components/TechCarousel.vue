<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const carouselRef = ref<HTMLElement>()
let animationContext: gsap.Context

const techStack = [
  {
    name: 'Hyperledger Fabric',
    logo: 'https://www.hyperledger.org/wp-content/uploads/2018/03/Hyperledger_Fabric_Logo_Color-1.png',
    description: 'Enterprise Blockchain Platform'
  },
  {
    name: 'Go',
    logo: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
    description: 'High-performance Language'
  },
  {
    name: 'Blockchain',
    logo: 'https://cdn-icons-png.flaticon.com/512/2092/2092063.png',
    description: 'Distributed Ledger Technology'
  },
  {
    name: 'API RESTful',
    logo: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png',
    description: 'Modern Web Services'
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Type-safe Development'
  },
  {
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    description: 'Progressive Framework'
  }
]

// Duplicate the array to create seamless loop
const duplicatedTechStack = [...techStack, ...techStack]

onMounted(() => {
  if (carouselRef.value) {
    initializeCarousel()
  }
})

onUnmounted(() => {
  if (animationContext) {
    animationContext.kill()
  }
})

const initializeCarousel = () => {
  if (!carouselRef.value) return

  animationContext = gsap.context(() => {
    const container = carouselRef.value?.querySelector('.carousel-track')
    const items = gsap.utils.toArray('.tech-item')
    const itemWidth = 200 // Width including spacing
    const totalItems = techStack.length
    const totalWidth = totalItems * itemWidth

    // Set initial position for the container
    gsap.set(container, {
      x: 0
    })

    // Create infinite horizontal scroll animation
    const tl = gsap.timeline({ repeat: -1 })
    
    tl.to(container, {
      x: -totalWidth,
      duration: totalItems * 3, // Slower for better visibility
      ease: "none"
    })

    // Reset position when animation completes
    tl.set(container, { x: 0 })

    // Add staggered fade-in effect for items
    gsap.fromTo(items, 
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 0.7,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out"
      }
    )

    // Add hover effects for individual items
    items.forEach((item: any) => {
      const element = item as HTMLElement
      
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          scale: 1.15,
          opacity: 1,
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        })
        
        // Add glow effect
        gsap.to(element.querySelector('.tech-glow'), {
          opacity: 0.6,
          scale: 1.2,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          scale: 1,
          opacity: 0.7,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        })
        
        // Remove glow effect
        gsap.to(element.querySelector('.tech-glow'), {
          opacity: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // Add floating animation to the entire carousel
    gsap.to(carouselRef.value, {
      y: -8,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    // Add subtle pulse animation to logos
    gsap.to('.tech-logo', {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut"
    })

  }, carouselRef.value)
}
</script>

<template>
  <div 
    ref="carouselRef"
    class="relative w-full h-28 overflow-hidden"
  >
    <!-- Gradient overlays for smooth fade effect -->
    <div class="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-dark-900 via-dark-900/80 to-transparent z-10 pointer-events-none"></div>
    
    <!-- Carousel track -->
    <div class="carousel-track flex items-center h-full" style="width: fit-content;">
      <div
        v-for="(tech, index) in duplicatedTechStack"
        :key="`${tech.name}-${index}`"
        class="tech-item flex flex-col items-center justify-center group cursor-pointer relative"
        style="width: 200px; flex-shrink: 0;"
      >
        <!-- Glow effect background -->
        <div class="tech-glow absolute inset-0 bg-primary-500/20 rounded-xl blur-lg opacity-0 transition-all duration-300"></div>
        
        <!-- Tech logo container -->
        <div class="relative w-16 h-16 mb-3 flex items-center justify-center">
          <img
            :src="tech.logo"
            :alt="tech.name"
            class="tech-logo w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
            loading="lazy"
          />
          
          <!-- Logo background glow -->
          <div class="absolute inset-0 bg-primary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <!-- Tech information -->
        <div class="text-center px-2">
          <h4 class="text-sm font-semibold text-dark-100 group-hover:text-primary-400 transition-colors duration-300 mb-1">
            {{ tech.name }}
          </h4>
          <p class="text-xs text-dark-200/70 group-hover:text-dark-200/90 transition-colors duration-300 leading-tight">
            {{ tech.description }}
          </p>
        </div>
        
        <!-- Animated border on hover -->
        <div class="absolute inset-2 border border-primary-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary-500/60"></div>
        
        <!-- Corner accents -->
        <div class="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
    
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="w-full h-full bg-gradient-to-r from-primary-500/10 via-transparent to-primary-500/10"></div>
      
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(52, 152, 219, 0.1) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>
    
    <!-- Central highlight line -->
    <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent transform -translate-y-1/2 pointer-events-none"></div>
  </div>
</template>