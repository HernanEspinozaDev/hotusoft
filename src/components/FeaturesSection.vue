<script setup lang="ts">
import { computed } from 'vue'
import { User, Coins, Network, Cpu, TrendingUp, Shield } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const { t } = useI18n()
const { target, isIntersecting } = useIntersectionObserver(0.2)

const icons = [User, Coins, Network, Cpu, TrendingUp, Shield]

const featuresItems = computed(() => {
  return [
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
})
</script>

<template>
  <section id="features" ref="target" class="py-20">
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
              {{ t('features.title') }}
            </span>
          </h2>
          <p class="text-xl text-dark-200 max-w-3xl mx-auto">
            {{ t('features.subtitle') }}
          </p>
        </div>
      </Transition>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TransitionGroup
          appear
          enter-active-class="transition ease-out duration-800"
          enter-from-class="opacity-0 transform translate-y-8"
          enter-to-class="opacity-100 transform translate-y-0"
        >
          <div
            v-for="(item, index) in featuresItems"
            :key="index"
            v-if="isIntersecting"
            :style="{ transitionDelay: `${index * 150}ms` }"
            class="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
          >
            <div class="flex items-center justify-center w-12 h-12 gradient-bg rounded-lg mb-4 group-hover:animate-glow">
              <component :is="icons[index]" class="h-6 w-6 text-white" />
            </div>
            
            <h3 class="text-xl font-semibold mb-3 text-dark-100">
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