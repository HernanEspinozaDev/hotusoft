<template>
  <section id="problem-solution" class="py-20 bg-gradient-to-b from-dark-charcoal to-off-black min-h-screen">
    <div class="container mx-auto px-4 md:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-action-blue mb-4 animate-fade-in">
          {{ $t('problemSolutionSection.mainTitle') }}
        </h2>
      </div>

      <div class="flex flex-col md:flex-row gap-8 mb-16">
        <!-- Tarjeta principal de Problema con barra roja a la izquierda -->
        <div class="flex-1 relative border-2 border-red-500/40 rounded-xl p-8 bg-off-black shadow-lg transition-all duration-300 animate-fade-in"
          style="overflow: hidden;">
          <div class="absolute top-0 left-0 h-full w-2 bg-red-500 rounded-l-xl"></div>
          <h3 class="text-3xl font-bold text-off-white mb-4 ml-4">
            {{ $t('problemSolutionSection.problemCard.title') }}
          </h3>
          <p class="text-light-gray text-lg ml-4">
            {{ $t('problemSolutionSection.problemCard.description') }}
          </p>
        </div>
        <!-- Tarjeta principal de Solución con barra azul a la derecha -->
        <div class="flex-1 relative border-2 border-action-blue/40 rounded-xl p-8 bg-off-black shadow-lg transition-all duration-300 animate-fade-in delay-100"
          style="overflow: hidden;">
          <div class="absolute top-0 right-0 h-full w-2 bg-action-blue rounded-r-xl"></div>
          <h3 class="text-3xl font-bold text-off-white mb-4 mr-4 text-right">
            {{ $t('problemSolutionSection.solutionCard.title') }}
          </h3>
          <p class="text-light-gray text-lg mr-4 text-right">
            {{ $t('problemSolutionSection.solutionCard.description') }}
          </p>
        </div>
      </div>
    </div>
    <!-- INICIO: Sección de ventajas tecnológicas (Features) -->
    <section class="py-20 bg-off-black bg-aurora-gradient">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 
            class="text-3xl md:text-4xl font-bold text-off-white mb-6"
            data-aos="fade-up"
          >
            {{ $t('features.title') }}
          </h2>
          <div 
            class="w-24 h-1 bg-action-blue mx-auto rounded-full"
            data-aos="zoom-in"
            data-aos-delay="100"
          ></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Identity Management Feature -->
          <div 
            class="bg-dark-charcoal rounded-xl p-6 border border-structure-blue border-opacity-20 backdrop-blur-sm hover:border-action-blue transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="w-16 h-16 rounded-lg bg-action-blue bg-opacity-20 flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-off-white mb-3">{{ $t('features.identityManagement.title') }}</h3>
            <p class="text-light-gray">{{ $t('features.identityManagement.description') }}</p>
          </div>
          <!-- Asset Management Feature -->
          <div 
            class="bg-dark-charcoal rounded-xl p-6 border border-structure-blue border-opacity-20 backdrop-blur-sm hover:border-action-blue transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="w-16 h-16 rounded-lg bg-action-blue bg-opacity-20 flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-off-white mb-3">{{ $t('features.assetManagement.title') }}</h3>
            <p class="text-light-gray">{{ $t('features.assetManagement.description') }}</p>
          </div>
          <!-- Verification Feature -->
          <div 
            class="bg-dark-charcoal rounded-xl p-6 border border-structure-blue border-opacity-20 backdrop-blur-sm hover:border-action-blue transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="w-16 h-16 rounded-lg bg-action-blue bg-opacity-20 flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-off-white mb-3">{{ $t('features.verification.title') }}</h3>
            <p class="text-light-gray">{{ $t('features.verification.description') }}</p>
          </div>
          <!-- Interoperability Feature -->
          <div 
            class="bg-dark-charcoal rounded-xl p-6 border border-structure-blue border-opacity-20 backdrop-blur-sm hover:border-action-blue transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="w-16 h-16 rounded-lg bg-action-blue bg-opacity-20 flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-off-white mb-3">{{ $t('features.interoperability.title') }}</h3>
            <p class="text-light-gray">{{ $t('features.interoperability.description') }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- FIN: Sección de ventajas tecnológicas (Features) -->
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.5s ease-in-out, opacity 0.3s ease;
  overflow: hidden;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to, .accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}
.animate-fade-in {
  animation: fadeIn 0.7s both;
}
.animate-fade-in.delay-100 { animation-delay: 0.1s; }
.animate-fade-in.delay-200 { animation-delay: 0.2s; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
}
</style>
