<template>
  <section class="py-20 bg-off-black">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold text-off-white mb-6"
          data-aos="fade-up"
        >
          {{ $t('valueProposition.title') }}
        </h2>
        <div 
          class="w-24 h-1 bg-action-blue mx-auto rounded-full"
          data-aos="zoom-in"
          data-aos-delay="100"
        ></div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <!-- For Businesses -->
        <div 
          class="bg-dark-charcoal p-8 rounded-xl border border-action-blue border-opacity-20 backdrop-blur-sm"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h3 class="text-2xl font-bold text-off-white mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-action-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {{ $t('valueProposition.forBusinesses.title') }}
          </h3>
          
          <ul class="space-y-4">
            <li 
              v-for="(benefit, index) in $t('valueProposition.forBusinesses.benefits')" 
              :key="`business-benefit-${index}`"
              class="flex items-start"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-action-blue mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-light-gray">{{ benefit }}</span>
            </li>
          </ul>
        </div>
        
        <!-- For Users -->
        <div 
          class="bg-dark-charcoal p-8 rounded-xl border border-action-blue border-opacity-20 backdrop-blur-sm"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h3 class="text-2xl font-bold text-off-white mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-action-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {{ $t('valueProposition.forUsers.title') }}
          </h3>
          
          <ul class="space-y-4">
            <li 
              v-for="(benefit, index) in $t('valueProposition.forUsers.benefits')" 
              :key="`user-benefit-${index}`"
              class="flex items-start"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-action-blue mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-light-gray">{{ benefit }}</span>
            </li>
          </ul>
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