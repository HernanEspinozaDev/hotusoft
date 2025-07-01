<script setup lang="ts">
import { Target, Eye } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const { t } = useI18n()
const { target, isIntersecting } = useIntersectionObserver(0.2)
</script>

<template>
  <section id="about" ref="target" class="py-20 bg-dark-800/50">
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
              {{ t('about.title') }}
            </span>
          </h2>
          <p class="text-xl text-dark-200 max-w-3xl mx-auto">
            {{ t('about.subtitle') }}
          </p>
        </div>
      </Transition>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Transition
          appear
          enter-active-class="transition ease-out duration-800 delay-300"
          enter-from-class="opacity-0 transform translate-x-8"
          enter-to-class="opacity-100 transform translate-x-0"
        >
          <div v-if="isIntersecting" class="space-y-6">
            <p class="text-lg text-dark-100 leading-relaxed">
              {{ t('about.description') }}
            </p>

            <!-- Mission -->
            <div class="glass-effect p-6 rounded-xl">
              <div class="flex items-center mb-4">
                <div class="flex items-center justify-center w-10 h-10 gradient-bg rounded-lg mr-4">
                  <Target class="h-5 w-5 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-dark-100">Misión</h3>
              </div>
              <p class="text-dark-200 leading-relaxed">
                {{ t('about.mission') }}
              </p>
            </div>

            <!-- Vision -->
            <div class="glass-effect p-6 rounded-xl">
              <div class="flex items-center mb-4">
                <div class="flex items-center justify-center w-10 h-10 gradient-bg rounded-lg mr-4">
                  <Eye class="h-5 w-5 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-dark-100">Visión</h3>
              </div>
              <p class="text-dark-200 leading-relaxed">
                {{ t('about.vision') }}
              </p>
            </div>
          </div>
        </Transition>

        <Transition
          appear
          enter-active-class="transition ease-out duration-800 delay-500"
          enter-from-class="opacity-0 transform translate-x-8"
          enter-to-class="opacity-100 transform translate-x-0"
        >
          <div v-if="isIntersecting" class="relative">
            <!-- Decorative background -->
            <div class="absolute inset-0 gradient-bg rounded-3xl opacity-20 blur-3xl"></div>
            
            <!-- Stats cards -->
            <div class="relative grid grid-cols-2 gap-6">
              <div class="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
                <div class="text-3xl font-bold gradient-bg bg-clip-text text-transparent mb-2">5+</div>
                <div class="text-dark-200">Años de experiencia</div>
              </div>
              
              <div class="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
                <div class="text-3xl font-bold gradient-bg bg-clip-text text-transparent mb-2">100%</div>
                <div class="text-dark-200">Código abierto</div>
              </div>
              
              <div class="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
                <div class="text-3xl font-bold gradient-bg bg-clip-text text-transparent mb-2">24/7</div>
                <div class="text-dark-200">Soporte técnico</div>
              </div>
              
              <div class="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
                <div class="text-3xl font-bold gradient-bg bg-clip-text text-transparent mb-2">∞</div>
                <div class="text-dark-200">Escalabilidad</div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>