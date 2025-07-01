<template>
  <section class="relative py-20 overflow-hidden bg-off-black bg-aurora-gradient">
    <!-- Decorative elements -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="absolute top-20 left-10 w-64 h-64 rounded-full bg-action-blue blur-[100px]"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-structure-blue blur-[120px]"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h1 
          class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-off-white"
          data-aos="fade-up"
        >
          {{ $t('hero.title') }}
        </h1>
        
        <h2 
          class="text-xl md:text-2xl text-action-blue font-medium mb-6"
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {{ $t('hero.subtitle') }}
        </h2>
        
        <p 
          class="text-lg text-light-gray mb-10 max-w-2xl mx-auto"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {{ $t('hero.description') }}
        </p>
        
        <div 
          class="flex flex-col sm:flex-row justify-center gap-4"
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <a 
            href="#problem-solution" 
            class="px-8 py-3 bg-action-blue hover:bg-opacity-90 text-off-white font-medium rounded-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-action-blue"
          >
            {{ $t('hero.cta') }}
          </a>
        </div>
      </div>
      
      <!-- Placeholder for 3D animation -->
      <div 
        class="mt-16 max-w-4xl mx-auto h-64 sm:h-80 md:h-96 bg-dark-charcoal bg-opacity-50 rounded-xl backdrop-blur-sm border border-structure-blue border-opacity-20 flex items-center justify-center"
        data-aos="zoom-in" 
        data-aos-delay="400"
      >
        <div class="text-light-gray text-opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
          <p class="text-center">3D Blockchain Visualization</p>
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