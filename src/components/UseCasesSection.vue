<script setup lang="ts">
import { computed } from 'vue'
import { Calendar, Heart, GraduationCap, CheckCircle } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const { t } = useI18n()
const { target, isIntersecting } = useIntersectionObserver(0.2)

const icons = [Calendar, Heart, GraduationCap]

const useCasesItems = computed(() => {
  return [
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
})
</script>

<template>
  <section id="use-cases" ref="target" class="py-20 bg-dark-800/30">
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
              {{ t('useCases.title') }}
            </span>
          </h2>
          <p class="text-xl text-dark-200 max-w-3xl mx-auto">
            {{ t('useCases.subtitle') }}
          </p>
        </div>
      </Transition>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <TransitionGroup
          appear
          enter-active-class="transition ease-out duration-800"
          enter-from-class="opacity-0 transform translate-y-8"
          enter-to-class="opacity-100 transform translate-y-0"
        >
          <div
            v-for="(item, index) in useCasesItems"
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
            
            <p class="text-dark-200 leading-relaxed mb-6">
              {{ item.description }}
            </p>

            <div class="space-y-3">
              <div
                v-for="benefit in item.benefits"
                :key="benefit"
                class="flex items-center text-primary-500"
              >
                <CheckCircle class="h-5 w-5 mr-3 flex-shrink-0" />
                <span class="text-dark-200">{{ benefit }}</span>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>