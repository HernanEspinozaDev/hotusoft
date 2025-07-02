<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { AlertTriangle, Shield, Zap, User, Coins, Network, Cpu, TrendingUp, Calendar, Heart, GraduationCap, CheckCircle } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import hyperledgerLogo from '../assets/hyperledger-fabric-fabric-logo.png'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const { t } = useI18n()
const isLoaded = ref(false)
const heroRef = ref<HTMLElement>()
const particlesRef = ref<HTMLElement>()
const isMobile = ref(false)

let animationContext: gsap.Context

onMounted(() => {
  isMobile.value = window.innerWidth < 640
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
  if (heroRef.value && particlesRef.value) {
    initializeAnimations()
  }
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 640
  })
  intervalId = window.setInterval(() => {
    animateOutIn()
  }, 2600)
})

onUnmounted(() => {
  if (animationContext) {
    animationContext.kill()
  }
  if (intervalId) clearInterval(intervalId)
})

const initializeAnimations = () => {
  if (!heroRef.value || !particlesRef.value) return
  animationContext = gsap.context(() => {
    createParticles()
    animateBackground()
    createConnections()
  }, heroRef.value)
}

const createParticles = () => {
  const particleCount = 50
  const particles: HTMLElement[] = []
  const width = heroRef.value?.offsetWidth || window.innerWidth
  const height = heroRef.value?.offsetHeight || window.innerHeight
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'absolute w-2 h-2 bg-primary-500 rounded-full opacity-20'
    const x = Math.random() * width
    const y = Math.random() * height
    gsap.set(particle, { x, y, scale: Math.random() * 0.5 + 0.5 })
    particlesRef.value?.appendChild(particle)
    particles.push(particle)
    gsap.to(particle, {
      x: x + (Math.random() - 0.5) * 400,
      y: y + (Math.random() - 0.5) * 400,
      duration: Math.random() * 10 + 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2
    })
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
  const width = heroRef.value?.offsetWidth || window.innerWidth
  const height = heroRef.value?.offsetHeight || window.innerHeight
  for (let i = 0; i < connectionCount; i++) {
    const line = document.createElement('div')
    line.className = 'absolute bg-gradient-to-r from-primary-500/20 to-transparent'
    const w = Math.random() * 200 + 100
    const h = 1
    const x = Math.random() * (width - w)
    const y = Math.random() * height
    const rotation = Math.random() * 360
    gsap.set(line, { width: w, height: h, x, y, rotation, transformOrigin: 'left center' })
    particlesRef.value?.appendChild(line)
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
  createDataNodes()
}

const createDataNodes = () => {
  const nodeCount = 8
  const width = heroRef.value?.offsetWidth || window.innerWidth
  const height = heroRef.value?.offsetHeight || window.innerHeight
  for (let i = 0; i < nodeCount; i++) {
    const node = document.createElement('div')
    node.className = 'absolute w-4 h-4 border-2 border-primary-500/40 rounded-full bg-primary-500/10'
    const x = Math.random() * width
    const y = Math.random() * height
    gsap.set(node, { x, y })
    particlesRef.value?.appendChild(node)
    gsap.to(node, {
      y: y - 100,
      duration: Math.random() * 6 + 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2
    })
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
const currentIndex = ref(0)
let intervalId: number | undefined
const nextTech = () => {
  currentIndex.value = (currentIndex.value + 1) % techStack.length
}

const animateOutIn = () => {
  const el = document.querySelector('.tech-focus') as HTMLElement
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

const { target: problemsTarget, isIntersecting: problemsIntersecting } = useIntersectionObserver(0.2)
const { target: featuresTarget, isIntersecting: featuresIntersecting } = useIntersectionObserver(0.2)
const { target: useCasesTarget, isIntersecting: useCasesIntersecting } = useIntersectionObserver(0.2)

const problemsIcons = [AlertTriangle, Shield, Zap]
const problemsItems = [
  {
    title: t('problems.items.0.title'),
    description: t('problems.items.0.description')
  },
  {
    title: t('problems.items.1.title'),
    description: t('problems.items.1.description')
  },
  {
    title: t('problems.items.2.title'),
    description: t('problems.items.2.description')
  }
]
const featuresIcons = [User, Coins, Network, Cpu, TrendingUp, Shield]
const featuresItems = [
  {
    title: t('features.items.0.title'),
    description: t('features.items.0.description')
  },
  {
    title: t('features.items.1.title'),
    description: t('features.items.1.description')
  },
  {
    title: t('features.items.2.title'),
    description: t('features.items.2.description')
  },
  {
    title: t('features.items.3.title'),
    description: t('features.items.3.description')
  },
  {
    title: t('features.items.4.title'),
    description: t('features.items.4.description')
  },
  {
    title: t('features.items.5.title'),
    description: t('features.items.5.description')
  }
]
const useCasesIcons = [Calendar, Heart, GraduationCap]
const useCasesItems = [
  {
    title: t('useCases.items.0.title'),
    description: t('useCases.items.0.description'),
    benefits: [
      t('useCases.items.0.benefits.0'),
      t('useCases.items.0.benefits.1'),
      t('useCases.items.0.benefits.2')
    ]
  },
  {
    title: t('useCases.items.1.title'),
    description: t('useCases.items.1.description'),
    benefits: [
      t('useCases.items.1.benefits.0'),
      t('useCases.items.1.benefits.1'),
      t('useCases.items.1.benefits.2')
    ]
  },
  {
    title: t('useCases.items.2.title'),
    description: t('useCases.items.2.description'),
    benefits: [
      t('useCases.items.2.benefits.0'),
      t('useCases.items.2.benefits.1'),
      t('useCases.items.2.benefits.2')
    ]
  }
]
</script>

<template>
  <section ref="heroRef" class="relative min-h-screen h-auto flex flex-col justify-start items-center text-dark-100 overflow-hidden">
    <!-- Fondo animado y partículas -->
    <div ref="particlesRef" class="absolute inset-0 h-full w-full pointer-events-none z-0"></div>
    <div class="floating-orb-1 absolute top-0 left-0 w-40 h-40 sm:w-96 sm:h-96 bg-primary-500/20 rounded-full blur-2xl sm:blur-3xl z-0"></div>
    <div class="floating-orb-2 absolute bottom-0 right-0 w-40 h-40 sm:w-96 sm:h-96 bg-primary-600/20 rounded-full blur-2xl sm:blur-3xl z-0"></div>

    <!-- Contenido principal HeroFull -->
    <div class="relative z-10 w-full flex flex-col">
      <!-- Hero principal y carrusel en paralelo -->
      <div class="w-full max-w-6xl mx-auto pt-24 sm:pt-32 pb-8 sm:pb-16 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-12 text-left min-h-[80vh] sm:min-h-screen">
        <!-- Columna izquierda: título, subtítulo, botones -->
        <div class="flex-1 min-w-[200px] max-w-full md:max-w-lg w-full">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gradient-bg bg-clip-text text-transparent text-center sm:text-left">
            {{ t('hero.title') }}
          </h1>
          <p class="text-base sm:text-xl md:text-2xl text-dark-200 mb-6 sm:mb-8 text-center sm:text-left">
            {{ t('hero.subtitle') }}
          </p>
        </div>
        <!-- Columna derecha: carrusel -->
        <div class="flex-1 w-full max-w-xl">
          <div 
            class="relative w-full flex flex-col items-center justify-center py-8 sm:py-12"
            style="background: radial-gradient(ellipse at 60% 40%, rgba(52,152,219,0.10) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(52,152,219,0.08) 0%, transparent 80%);"
          >
            <div class="absolute top-1/3 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary-500/10 rounded-full blur-xl sm:blur-3xl pointer-events-none"></div>
            <div class="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-96 sm:h-96 bg-primary-600/10 rounded-full blur-xl sm:blur-3xl pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 w-16 h-16 sm:w-32 sm:h-32 bg-primary-400/10 rounded-full blur-md sm:blur-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div class="relative z-10 flex flex-col items-center justify-center">
              <template v-if="!isMobile">
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
              </template>
              <template v-else>
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
              </template>
            </div>
          </div>
        </div>
      </div>
      <!-- Secciones debajo del hero -->
      <section id="problems" ref="problemsTarget" class="relative z-10 py-10 sm:py-20 w-full min-h-[60vh] sm:min-h-screen">
        <div class="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold mb-6">
              <span class="gradient-bg bg-clip-text text-transparent">
                {{ t('problems.title') }}
              </span>
            </h2>
            <p class="text-xl text-dark-200 max-w-3xl mx-auto">
              {{ t('problems.subtitle') }}
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <template v-if="!isMobile">
              <TransitionGroup appear enter-active-class="transition ease-out duration-800" enter-from-class="opacity-0 transform translate-y-8" enter-to-class="opacity-100 transform translate-y-0">
                <div v-for="(item, index) in problemsItems" :key="index" v-if="problemsIntersecting" :style="{ transitionDelay: `${index * 200}ms` }" class="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <div class="flex items-center justify-center w-16 h-16 gradient-bg rounded-full mb-6 group-hover:animate-pulse">
                    <component :is="problemsIcons[index]" class="h-8 w-8 text-white" />
                  </div>
                  <h3 class="text-2xl font-semibold mb-4 text-dark-100">
                    {{ item.title }}
                  </h3>
                  <p class="text-dark-200 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </TransitionGroup>
            </template>
            <template v-else>
              <div v-for="(item, index) in problemsItems" :key="index" class="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div class="flex items-center justify-center w-16 h-16 gradient-bg rounded-full mb-6 group-hover:animate-pulse">
                  <component :is="problemsIcons[index]" class="h-8 w-8 text-white" />
                </div>
                <h3 class="text-2xl font-semibold mb-4 text-dark-100">
                  {{ item.title }}
                </h3>
                <p class="text-dark-200 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </template>
          </div>
        </div>
      </section>
      <section id="features" ref="featuresTarget" class="relative z-10 py-20 w-full min-h-screen">
        <div class="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold mb-6">
              <span class="gradient-bg bg-clip-text text-transparent">
                {{ t('features.title') }}
              </span>
            </h2>
            <p class="text-xl text-dark-200 max-w-3xl mx-auto">
              {{ t('features.subtitle') }}
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <template v-if="!isMobile">
              <TransitionGroup appear enter-active-class="transition ease-out duration-800" enter-from-class="opacity-0 transform translate-y-8" enter-to-class="opacity-100 transform translate-y-0">
                <div v-for="(item, index) in featuresItems" :key="index" v-if="featuresIntersecting" :style="{ transitionDelay: `${index * 150}ms` }" class="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                  <div class="flex items-center justify-center w-12 h-12 gradient-bg rounded-lg mb-4 group-hover:animate-glow">
                    <component :is="featuresIcons[index]" class="h-6 w-6 text-white" />
                  </div>
                  <h3 class="text-xl font-semibold mb-3 text-dark-100">
                    {{ item.title }}
                  </h3>
                  <p class="text-dark-200 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </TransitionGroup>
            </template>
            <template v-else>
              <div v-for="(item, index) in featuresItems" :key="index" class="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                <div class="flex items-center justify-center w-12 h-12 gradient-bg rounded-lg mb-4 group-hover:animate-glow">
                  <component :is="featuresIcons[index]" class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold mb-3 text-dark-100">
                  {{ item.title }}
                </h3>
                <p class="text-dark-200 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </template>
          </div>
        </div>
      </section>
      <section id="use-cases" ref="useCasesTarget" class="relative z-10 py-20 w-full min-h-screen">
        <div class="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold mb-6">
              <span class="gradient-bg bg-clip-text text-transparent">
                {{ t('useCases.title') }}
              </span>
            </h2>
            <p class="text-xl text-dark-200 max-w-3xl mx-auto">
              {{ t('useCases.subtitle') }}
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            <template v-if="!isMobile">
              <TransitionGroup appear enter-active-class="transition ease-out duration-800" enter-from-class="opacity-0 transform translate-y-8" enter-to-class="opacity-100 transform translate-y-0">
                <div v-for="(item, index) in useCasesItems" :key="index" v-if="useCasesIntersecting" :style="{ transitionDelay: `${index * 200}ms` }" class="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <div class="flex items-center justify-center w-16 h-16 gradient-bg rounded-full mb-6 group-hover:animate-pulse">
                    <component :is="useCasesIcons[index]" class="h-8 w-8 text-white" />
                  </div>
                  <h3 class="text-2xl font-semibold mb-4 text-dark-100">
                    {{ item.title }}
                  </h3>
                  <p class="text-dark-200 leading-relaxed mb-6">
                    {{ item.description }}
                  </p>
                  <div class="space-y-3">
                    <div v-for="benefit in item.benefits" :key="benefit" class="flex items-center text-primary-500">
                      <CheckCircle class="h-5 w-5 mr-3 flex-shrink-0" />
                      <span class="text-dark-200">{{ benefit }}</span>
                    </div>
                  </div>
                </div>
              </TransitionGroup>
            </template>
            <template v-else>
              <div v-for="(item, index) in useCasesItems" :key="index" class="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div class="flex items-center justify-center w-16 h-16 gradient-bg rounded-full mb-6 group-hover:animate-pulse">
                  <component :is="useCasesIcons[index]" class="h-8 w-8 text-white" />
                </div>
                <h3 class="text-2xl font-semibold mb-4 text-dark-100">
                  {{ item.title }}
                </h3>
                <p class="text-dark-200 leading-relaxed mb-6">
                  {{ item.description }}
                </p>
                <div class="space-y-3">
                  <div v-for="benefit in item.benefits" :key="benefit" class="flex items-center text-primary-500">
                    <CheckCircle class="h-5 w-5 mr-3 flex-shrink-0" />
                    <span class="text-dark-200">{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </section>
    </div>
  </section>
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