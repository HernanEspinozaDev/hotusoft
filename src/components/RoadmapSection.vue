<script setup lang="ts">
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import { CheckCircle, Clock, Circle } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'

const { target, isIntersecting } = useIntersectionObserver(0.2)

const roadmapItems = [
  {
    quarter: 'Q4 2024',
    title: 'Fundación y Estrategia',
    status: 'completed',
    description: [
      'Desarrollo y maduración de la idea.',
      'Constitución legal de Hotusoft.'
    ]
  },
  {
    quarter: 'Q1 2025',
    title: 'Desarrollo Inicial y Presencia Digital',
    status: 'completed',
    description: [
      'Creación de la página web y plataforma digital.',
      'Comienzo del desarrollo del backend en Go.',
      'Creación de los primeros prototipos de smart contracts.'
    ]
  },
  {
    quarter: 'Q2 2025',
    title: 'Construcción del MVP',
    status: 'completed',
    description: [
      'Desarrollo de la primera fase del Producto Mínimo Viable (MVP).'
    ]
  },
  {
    quarter: 'Q3 2025',
    title: 'Financiamiento y Maduración Tecnológica',
    status: 'in-progress',
    description: [
      'Gestión de Fondos para Infraestructura Cloud: Búsqueda activa y obtención de financiamiento para asegurar los recursos de infraestructura en la nube necesarios para soportar el despliegue y crecimiento del MVP.',
      'Madurez y Funcionalidad del MVP: Evolución del producto mínimo viable, añadiendo funcionalidades avanzadas y mejorando la experiencia de usuario.',
      'Integración con Smart Contracts: Se completará la vinculación directa y operativa del MVP con los smart contracts, asegurando la lógica de negocio en la blockchain.'
    ]
  },
  {
    quarter: 'Q4 2025',
    title: 'Unificación y Experiencia de Usuario',
    status: 'planned',
    description: [
      'Consolidación de la Plataforma: Unificación total del MVP y la capa de smart contracts para operar como un ecosistema tecnológico cohesionado.',
      'Desarrollo de Dashboard y Wallet: Comienzo del diseño y la creación de la interfaz de usuario final, incluyendo un panel de control (Dashboard) y una billetera digital (Wallet).'
    ]
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed': return CheckCircle
    case 'in-progress': return Clock
    default: return Circle
  }
}

const isMobile = ref(false)
onMounted(() => {
  isMobile.value = window.innerWidth < 640
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 640
  })
})
</script>

<template>
  <section id="roadmap" ref="target" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <template v-if="!isMobile">
        <Transition
          appear
          enter-active-class="transition ease-out duration-800"
          enter-from-class="opacity-0 transform translate-y-8"
          enter-to-class="opacity-100 transform translate-y-0"
        >
          <div v-if="isIntersecting" class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold mb-6">
              <span class="gradient-bg bg-clip-text text-transparent">
                Estado y Proyección
              </span>
            </h2>
            <p class="text-xl text-dark-200 max-w-3xl mx-auto">
              Roadmap interactivo de Hotusoft: fases completadas y próximas etapas.
            </p>
          </div>
        </Transition>
      </template>
      <template v-else>
        <div v-if="isIntersecting" class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-6">
            <span class="gradient-bg bg-clip-text text-transparent">
              Estado y Proyección
            </span>
          </h2>
          <p class="text-xl text-dark-200 max-w-3xl mx-auto">
            Roadmap interactivo de Hotusoft: fases completadas y próximas etapas.
          </p>
        </div>
      </template>
      <div class="relative max-w-4xl mx-auto">
        <!-- Timeline line -->
        <div class="hidden sm:block absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600" style="height: calc(100% - 24px); top: 24px;"></div>
        <template v-if="!isMobile">
          <TransitionGroup
            appear
            enter-active-class="transition ease-out duration-800"
            enter-from-class="opacity-0 transform translate-x-8"
            enter-to-class="opacity-100 transform translate-x-0"
          >
            <div
              v-for="(item, index) in roadmapItems"
              :key="index"
              v-if="isIntersecting"
              :style="{ transitionDelay: `${index * 300}ms` }"
              class="relative flex items-start mb-12 last:mb-0
                sm:flex-row sm:items-start
                flex-col items-stretch"
            >
              <!-- Timeline node -->
              <div :class="[
                'flex items-center justify-center rounded-full border-4 border-dark-900 z-10',
                'sm:w-16 sm:h-16 w-10 h-10',
                item.status === 'completed' ? 'bg-green-500' : 
                item.status === 'in-progress' ? 'bg-primary-500' : 'bg-dark-800',
                'absolute left-8 -translate-x-1/2 sm:static sm:translate-x-0'
              ]"
              >
                <component 
                  :is="getStatusIcon(item.status)" 
                  :class="[
                    'sm:h-8 sm:w-8 h-5 w-5',
                    item.status === 'completed' || item.status === 'in-progress' ? 'text-white' : 'text-dark-200'
                  ]" 
                />
              </div>
              <!-- Content -->
              <div class="sm:ml-8 ml-8 mt-4 sm:mt-0 glass-effect p-6 rounded-xl flex-1 group hover:bg-white/10 transition-all duration-300">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2 sm:gap-0">
                  <span class="text-primary-500 font-semibold text-lg">{{ item.quarter }}</span>
                  <span :class="[
                    'px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide',
                    item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'in-progress' ? 'bg-primary-500/20 text-primary-400' :
                    'bg-dark-200/20 text-dark-200'
                  ]">
                    {{ item.status === 'completed' ? 'Completado' : 
                         item.status === 'in-progress' ? 'En progreso' : 'Planificado' }}
                  </span>
                </div>
                <h3 class="text-2xl font-semibold mb-3 text-dark-100 group-hover:text-primary-500 transition-colors duration-300">
                  {{ item.title }}
                </h3>
                <ul class="text-dark-200 leading-relaxed list-disc pl-5 space-y-1">
                  <li v-for="(desc, i) in item.description" :key="i">{{ desc }}</li>
                </ul>
              </div>
            </div>
          </TransitionGroup>
        </template>
        <template v-else>
          <div
            v-for="(item, index) in roadmapItems"
            :key="index"
            class="relative flex items-start mb-12 last:mb-0
              sm:flex-row sm:items-start
              flex-col items-stretch"
          >
            <!-- Timeline node -->
            <div :class="[
              'flex items-center justify-center rounded-full border-4 border-dark-900 z-10',
              'sm:w-16 sm:h-16 w-10 h-10',
              item.status === 'completed' ? 'bg-green-500' : 
              item.status === 'in-progress' ? 'bg-primary-500' : 'bg-dark-800',
              'absolute left-8 -translate-x-1/2 sm:static sm:translate-x-0'
            ]"
            >
              <component 
                :is="getStatusIcon(item.status)" 
                :class="[
                  'sm:h-8 sm:w-8 h-5 w-5',
                  item.status === 'completed' || item.status === 'in-progress' ? 'text-white' : 'text-dark-200'
                ]" 
              />
            </div>
            <!-- Content -->
            <div class="sm:ml-8 ml-8 mt-4 sm:mt-0 glass-effect p-6 rounded-xl flex-1 group hover:bg-white/10 transition-all duration-300">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2 sm:gap-0">
                <span class="text-primary-500 font-semibold text-lg">{{ item.quarter }}</span>
                <span :class="[
                  'px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide',
                  item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  item.status === 'in-progress' ? 'bg-primary-500/20 text-primary-400' :
                  'bg-dark-200/20 text-dark-200'
                ]">
                  {{ item.status === 'completed' ? 'Completado' : 
                       item.status === 'in-progress' ? 'En progreso' : 'Planificado' }}
                </span>
              </div>
              <h3 class="text-2xl font-semibold mb-3 text-dark-100 group-hover:text-primary-500 transition-colors duration-300">
                {{ item.title }}
              </h3>
              <ul class="text-dark-200 leading-relaxed list-disc pl-5 space-y-1">
                <li v-for="(desc, i) in item.description" :key="i">{{ desc }}</li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>