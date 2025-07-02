<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const bgRef = ref<HTMLElement>()
const particlesRef = ref<HTMLElement>()
let animationContext: gsap.Context

const createVariantParticles = () => {
  const particleCount = 40
  const width = bgRef.value?.offsetWidth || window.innerWidth
  const height = bgRef.value?.offsetHeight || window.innerHeight
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    // Tamaños variados y algunas con brillo
    const size = Math.random() * 18 + 6
    const isGlow = Math.random() > 0.7
    particle.className = `absolute rounded-full opacity-20 ${isGlow ? 'bg-primary-400/80 blur-md shadow-lg' : 'bg-primary-500/60'}`
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    const x = Math.random() * width
    const y = Math.random() * height
    gsap.set(particle, { x, y, scale: Math.random() * 0.7 + 0.5 })
    particlesRef.value?.appendChild(particle)
    // Movimiento suave y aleatorio
    gsap.to(particle, {
      x: x + (Math.random() - 0.5) * 300,
      y: y + (Math.random() - 0.5) * 300,
      duration: Math.random() * 12 + 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2
    })
    // Pulso de opacidad y brillo
    gsap.to(particle, {
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 4 + 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
    if (isGlow) {
      gsap.to(particle, {
        boxShadow: '0 0 32px 8px #34aadc66',
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
    }
  }
}

onMounted(() => {
  if (bgRef.value && particlesRef.value) {
    animationContext = gsap.context(() => {
      createVariantParticles()
    }, bgRef.value)
  }
})

onUnmounted(() => {
  if (animationContext) animationContext.kill()
})
</script>

<template>
  <div ref="bgRef" class="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
    <div ref="particlesRef" class="absolute inset-0 w-full h-full"></div>
    <!-- Orbes suaves -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 w-40 h-40 bg-primary-400/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
  </div>
</template>

<style scoped>
</style> 