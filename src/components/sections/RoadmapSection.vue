<template>
  <section class="py-20 bg-off-black bg-aurora-gradient">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold text-off-white mb-6"
          data-aos="fade-up"
        >
          {{ $t('roadmap.title') }}
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
          {{ $t('roadmap.description') }}
        </p>
      </div>

      <!-- Roadmap Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div 
          class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-structure-blue bg-opacity-30"
          data-aos="height-animation"
          data-aos-delay="200"
        ></div>

        <!-- Q1 2023 -->
        <div class="relative z-10 mb-16">
          <div 
            class="flex flex-col md:flex-row items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-action-blue z-10"></div>

            <!-- Left Side (Date) -->
            <div class="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
              <h3 class="text-2xl font-bold text-action-blue">{{ $t('roadmap.q1_2023.title') }}</h3>
            </div>

            <!-- Right Side (Content) -->
            <div class="md:w-1/2 md:pl-12 bg-dark-charcoal p-6 rounded-xl border border-structure-blue border-opacity-20 backdrop-blur-sm">
              <ul class="space-y-3">
                <li 
                  v-for="(item, index) in $t('roadmap.q1_2023.items')" 
                  :key="`q1-${index}`"
                  class="flex items-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-action-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-light-gray">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Q2 2023 -->
        <div class="relative z-10 mb-16">
          <div 
            class="flex flex-col md:flex-row items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-action-blue z-10"></div>

            <!-- Left Side (Content) - Reversed on desktop -->
            <div class="md:w-1/2 md:pr-12 bg-dark-charcoal p-6 rounded-xl border border-structure-blue border-opacity-20 backdrop-blur-sm md:order-1 order-2">
              <ul class="space-y-3">
                <li 
                  v-for="(item, index) in $t('roadmap.q2_2023.items')" 
                  :key="`q2-${index}`"
                  class="flex items-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-action-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-light-gray">{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Right Side (Date) - Reversed on desktop -->
            <div class="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0 md:order-2 order-1">
              <h3 class="text-2xl font-bold text-action-blue">{{ $t('roadmap.q2_2023.title') }}</h3>
            </div>
          </div>
        </div>

        <!-- Q3 2023 -->
        <div class="relative z-10 mb-16">
          <div 
            class="flex flex-col md:flex-row items-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-action-blue z-10"></div>

            <!-- Left Side (Date) -->
            <div class="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
              <h3 class="text-2xl font-bold text-action-blue">{{ $t('roadmap.q3_2023.title') }}</h3>
            </div>

            <!-- Right Side (Content) -->
            <div class="md:w-1/2 md:pl-12 bg-dark-charcoal p-6 rounded-xl border border-structure-blue border-opacity-20 backdrop-blur-sm">
              <ul class="space-y-3">
                <li 
                  v-for="(item, index) in $t('roadmap.q3_2023.items')" 
                  :key="`q3-${index}`"
                  class="flex items-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-action-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-light-gray">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Q4 2023 -->
        <div class="relative z-10">
          <div 
            class="flex flex-col md:flex-row items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-action-blue z-10"></div>

            <!-- Left Side (Content) - Reversed on desktop -->
            <div class="md:w-1/2 md:pr-12 bg-dark-charcoal p-6 rounded-xl border border-structure-blue border-opacity-20 backdrop-blur-sm md:order-1 order-2">
              <ul class="space-y-3">
                <li 
                  v-for="(item, index) in $t('roadmap.q4_2023.items')" 
                  :key="`q4-${index}`"
                  class="flex items-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-action-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-light-gray">{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Right Side (Date) - Reversed on desktop -->
            <div class="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0 md:order-2 order-1">
              <h3 class="text-2xl font-bold text-action-blue">{{ $t('roadmap.q4_2023.title') }}</h3>
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

  // Custom animation for timeline line
  const timelineLine = document.querySelector('[data-aos="height-animation"]');
  if (timelineLine) {
    timelineLine.classList.add('h-0');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            timelineLine.classList.remove('h-0');
            timelineLine.classList.add('h-full', 'transition-all', 'duration-1000');
          }, 300);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(timelineLine);
  }
});
</script>

<style scoped>
.h-0 {
  height: 0;
}
</style>
