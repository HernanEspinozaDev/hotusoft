<script setup lang="ts">
import { computed } from 'vue'
import { AlertTriangle, Shield, Zap } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const { t } = useI18n()
const { target, isIntersecting } = useIntersectionObserver(0.2)

const icons = [AlertTriangle, Shield, Zap]

const problemsItems = computed(() => {
  return [
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
})
</script>

<template>
  <section id="problems" ref="target" class="py-20 bg-dark-800/50">
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
              {{ t('problems.title') }}
            </span>
          </h2>
          <p class="text-xl text-dark-200 max-w-3xl mx-auto">
            {{ t('problems.subtitle') }}
          </p>
        </div>
      </Transition>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TransitionGroup
          appear
          enter-active-class="transition ease-out duration-800"
          enter-from-class="opacity-0 transform translate-y-8"
          enter-to-class="opacity-100 transform translate-y-0"
        >
          <div
            v-for="(item, index) in problemsItems"
            :key="index"
            v-if="isIntersecting"
            :style="{ transitionDelay: `${index * 200}ms` }"
            class="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group"
          >
            <div class="flex items-center justify-center w-16 h-16 gradient-bg rounded-full mb-6 group-hover:animate-pulse">
              <component :is="icons[index]" class="h-8 w-8 text-white" />
            </div>
            
            <h3 class="text-2xl font-semibold mb-4 text-dark-100">
              {{ item.title }}
            </h3>
            
            <p class="text-dark-200 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>