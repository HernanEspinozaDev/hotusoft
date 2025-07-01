<script setup lang="ts">
import { computed } from 'vue'
import { CheckCircle, Clock, Circle } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const { t } = useI18n()
const { target, isIntersecting } = useIntersectionObserver(0.2)

const roadmapItems = computed(() => {
  return [
    {
      quarter: t('roadmap.items.0.quarter'),
      title: t('roadmap.items.0.title'),
      description: t('roadmap.items.0.description'),
      status: t('roadmap.items.0.status')
    },
    {
      quarter: t('roadmap.items.1.quarter'),
      title: t('roadmap.items.1.title'),
      description: t('roadmap.items.1.description'),
      status: t('roadmap.items.1.status')
    },
    {
      quarter: t('roadmap.items.2.quarter'),
      title: t('roadmap.items.2.title'),
      description: t('roadmap.items.2.description'),
      status: t('roadmap.items.2.status')
    },
    {
      quarter: t('roadmap.items.3.quarter'),
      title: t('roadmap.items.3.title'),
      description: t('roadmap.items.3.description'),
      status: t('roadmap.items.3.status')
    }
  ]
})

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed': return CheckCircle
    case 'in-progress': return Clock
    default: return Circle
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'text-green-500'
    case 'in-progress': return 'text-primary-500'
    default: return 'text-dark-200'
  }
}
</script>

<template>
  <section id="roadmap" ref="target" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Transition
        appear
        enter-active-class="transition ease-out duration-800"
        enter-from-class="opacity-0 transform translate-y-8"
        enter-to-class="opacity-100 transform translate-y-0"
      >
        <div v-if="isIntersecting" class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-6">
            <span class="gradient-bg bg-clip-text text-transparent">
              {{ t('roadmap.title') }}
            </span>
          </h2>
          <p class="text-xl text-dark-200 max-w-3xl mx-auto">
            {{ t('roadmap.subtitle') }}
          </p>
        </div>
      </Transition>

      <div class="relative max-w-4xl mx-auto">
        <!-- Timeline line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>

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
            class="relative flex items-start mb-12 last:mb-0"
          >
            <!-- Timeline node -->
            <div :class="[
              'flex items-center justify-center w-16 h-16 rounded-full border-4 border-dark-900 z-10',
              item.status === 'completed' ? 'bg-green-500' : 
              item.status === 'in-progress' ? 'bg-primary-500' : 'bg-dark-800'
            ]">
              <component 
                :is="getStatusIcon(item.status)" 
                :class="[
                  'h-8 w-8',
                  item.status === 'completed' || item.status === 'in-progress' ? 'text-white' : 'text-dark-200'
                ]" 
              />
            </div>

            <!-- Content -->
            <div class="ml-8 glass-effect p-6 rounded-xl flex-1 group hover:bg-white/10 transition-all duration-300">
              <div class="flex items-center justify-between mb-3">
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
              
              <p class="text-dark-200 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>