<template>
  <section class="py-20 bg-dark-charcoal">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold text-off-white mb-6"
          data-aos="fade-up"
        >
          {{ $t('useCases.title') }}
        </h2>
        <div 
          class="w-24 h-1 bg-action-blue mx-auto rounded-full mb-6"
          data-aos="zoom-in"
          data-aos-delay="100"
        ></div>
        <p 
          class="text-light-gray max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {{ $t('useCases.description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Financial Services Use Case -->
        <div 
          class="bg-off-black rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-action-blue/10 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="h-48 bg-gradient-to-r from-action-blue/20 to-structure-blue/20 relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-action-blue text-opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-off-white mb-3 group-hover:text-action-blue transition-colors duration-300">
              {{ $t('useCases.finance.title') }}
            </h3>
            <p class="text-light-gray">
              {{ $t('useCases.finance.description') }}
            </p>
          </div>
        </div>

        <!-- Healthcare Use Case -->
        <div 
          class="bg-off-black rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-action-blue/10 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="h-48 bg-gradient-to-r from-action-blue/20 to-structure-blue/20 relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-action-blue text-opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-off-white mb-3 group-hover:text-action-blue transition-colors duration-300">
              {{ $t('useCases.healthcare.title') }}
            </h3>
            <p class="text-light-gray">
              {{ $t('useCases.healthcare.description') }}
            </p>
          </div>
        </div>

        <!-- Government Use Case -->
        <div 
          class="bg-off-black rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-action-blue/10 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="h-48 bg-gradient-to-r from-action-blue/20 to-structure-blue/20 relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-action-blue text-opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-off-white mb-3 group-hover:text-action-blue transition-colors duration-300">
              {{ $t('useCases.government.title') }}
            </h3>
            <p class="text-light-gray">
              {{ $t('useCases.government.description') }}
            </p>
          </div>
        </div>

        <!-- Enterprise Use Case -->
        <div 
          class="bg-off-black rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-action-blue/10 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="h-48 bg-gradient-to-r from-action-blue/20 to-structure-blue/20 relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-action-blue text-opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-off-white mb-3 group-hover:text-action-blue transition-colors duration-300">
              {{ $t('useCases.enterprise.title') }}
            </h3>
            <p class="text-light-gray">
              {{ $t('useCases.enterprise.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useIntersectionObserver } from '../../composables/useIntersectionObserver';

onMounted(() => {
  // Initialize animation on scroll
  const { observeElements } = useIntersectionObserver();
  observeElements('[data-aos]');
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
