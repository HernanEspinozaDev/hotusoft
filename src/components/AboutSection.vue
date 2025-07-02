<script setup lang="ts">
import { Target, Eye } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import { ref, onMounted } from 'vue'

const { t } = useI18n()
const { target, isIntersecting } = useIntersectionObserver(0.2)
const isMobile = ref(false)
onMounted(() => {
  isMobile.value = window.innerWidth < 640
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 640
  })
})
</script>

<template>
  <section id="about" ref="target" class="py-20 bg-dark-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-6">
          <span class="gradient-bg bg-clip-text text-transparent">
            {{ t('about.title') }}
          </span>
        </h2>
        <p class="text-xl text-dark-200 max-w-3xl mx-auto">
          {{ t('about.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <template v-if="!isMobile">
          <Transition
            appear
            enter-active-class="transition ease-out duration-800 delay-300"
            enter-from-class="opacity-0 transform translate-x-8"
            enter-to-class="opacity-100 transform translate-x-0"
          >
            <div v-if="isIntersecting" class="space-y-6">
              <p class="text-lg text-dark-100 leading-relaxed">
                Somos HOTU SOFTWARE SOLUTIONS SPA, una startup de desarrollo de software que nace de la profunda convicción de que la tecnología blockchain tiene el poder de redefinir la forma en que interactuamos con el mundo digital. En un panorama donde la gestión de identidades y la seguridad de activos digitales enfrentan desafíos crecientes, nos hemos propuesto ser pioneros en la creación de soluciones robustas y accesibles.<br><br>
                Nos diferenciamos por nuestro enfoque en soluciones permisionadas y sin costos de transacción (gas), lo que nos permite ofrecer una alternativa viable y escalable a las limitaciones de las blockchains públicas. Inicialmente, nos enfocamos en el mercado chileno, integrando validaciones como el RUN/RUT, para luego expandirnos regionalmente y llevar nuestra propuesta de valor a una audiencia más amplia.
              </p>
            </div>
          </Transition>
        </template>
        <template v-else>
          <div class="space-y-6">
            <p class="text-lg text-dark-100 leading-relaxed">
              Somos HOTU SOFTWARE SOLUTIONS SPA, una startup de desarrollo de software que nace de la profunda convicción de que la tecnología blockchain tiene el poder de redefinir la forma en que interactuamos con el mundo digital. En un panorama donde la gestión de identidades y la seguridad de activos digitales enfrentan desafíos crecientes, nos hemos propuesto ser pioneros en la creación de soluciones robustas y accesibles.<br><br>
              Nos diferenciamos por nuestro enfoque en soluciones permisionadas y sin costos de transacción (gas), lo que nos permite ofrecer una alternativa viable y escalable a las limitaciones de las blockchains públicas. Inicialmente, nos enfocamos en el mercado chileno, integrando validaciones como el RUN/RUT, para luego expandirnos regionalmente y llevar nuestra propuesta de valor a una audiencia más amplia.
            </p>
          </div>
        </template>
        <Transition
          appear
          enter-active-class="transition ease-out duration-800 delay-500"
          enter-from-class="opacity-0 transform translate-x-8"
          enter-to-class="opacity-100 transform translate-x-0"
        >
          <div v-if="isIntersecting" class="relative">
            <div class="absolute inset-0 gradient-bg rounded-3xl opacity-20 blur-3xl"></div>
            <div class="relative grid grid-cols-1 gap-6">
              <div class="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
                <h4 class="text-xl font-bold mb-2 text-primary-500">Nuestro Propósito</h4>
                <p class="text-dark-200 leading-relaxed">
                  En Hotu Software Solutions, nuestro propósito es construir un futuro digital más seguro, transparente y eficiente, desarrollando soluciones blockchain empresariales innovadoras y accesibles que transformen la gestión de identidades y activos digitales para empresas de todos los tamaños.
                </p>
              </div>
              <div class="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
                <div class="flex items-center justify-center mb-2">
                  <Target class="h-5 w-5 text-primary-500 mr-2" />
                  <h3 class="text-lg font-semibold text-dark-100">Misión</h3>
                </div>
                <p class="text-dark-200 leading-relaxed">
                  Nuestra misión es democratizar el acceso a tecnologías blockchain empresariales, proporcionando herramientas seguras y fáciles de usar para organizaciones de todos los tamaños.
                </p>
              </div>
              <div class="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
                <div class="flex items-center justify-center mb-2">
                  <Eye class="h-5 w-5 text-primary-500 mr-2" />
                  <h3 class="text-lg font-semibold text-dark-100">Visión</h3>
                </div>
                <p class="text-dark-200 leading-relaxed">
                  Visualizamos un futuro donde cada individuo tenga control total sobre su identidad digital y donde los activos digitales sean tan seguros y confiables como los físicos.
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>