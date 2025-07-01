<template>
  <section class="py-20 bg-dark-charcoal">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold text-off-white mb-6"
          data-aos="fade-up"
        >
          {{ $t('businessModel.title') }}
        </h2>
        <div 
          class="w-24 h-1 bg-action-blue mx-auto rounded-full"
          data-aos="zoom-in"
          data-aos-delay="100"
        ></div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Revenue Model -->
        <div 
          class="bg-off-black p-8 rounded-xl border border-structure-blue border-opacity-20 backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-full bg-action-blue bg-opacity-20 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-off-white">{{ $t('businessModel.revenue.title') }}</h3>
          </div>
          
          <ul class="space-y-4 pl-4">
            <li 
              v-for="(stream, index) in $t('businessModel.revenue.streams')" 
              :key="`revenue-stream-${index}`"
              class="relative pl-6 text-light-gray"
            >
              <div class="absolute left-0 top-2 w-3 h-3 rounded-full bg-action-blue"></div>
              {{ stream }}
            </li>
          </ul>
        </div>
        
        <!-- Market Strategy -->
        <div 
          class="bg-off-black p-8 rounded-xl border border-structure-blue border-opacity-20 backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-full bg-action-blue bg-opacity-20 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-action-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-off-white">{{ $t('businessModel.strategy.title') }}</h3>
          </div>
          
          <div class="relative pl-8 mt-8">
            <!-- Timeline line -->
            <div class="absolute left-3 top-0 bottom-0 w-0.5 bg-action-blue bg-opacity-30"></div>
            
            <!-- Timeline items -->
            <div 
              v-for="(step, index) in $t('businessModel.strategy.steps')" 
              :key="`strategy-step-${index}`"
              class="mb-8 relative"
            >
              <!-- Timeline dot -->
              <div class="absolute -left-5 top-1.5 w-4 h-4 rounded-full bg-action-blue"></div>
              
              <!-- Content -->
              <div class="text-light-gray">
                {{ step }}
              </div>
            </div>
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