<template>
  <section class="py-20 bg-dark-charcoal">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto bg-off-black rounded-xl p-8 md:p-12 border border-action-blue border-opacity-20 backdrop-blur-sm">
        <div class="text-center mb-10">
          <h2 
            class="text-3xl md:text-4xl font-bold text-off-white mb-6"
            data-aos="fade-up"
          >
            {{ $t('cta.title') }}
          </h2>
          <p 
            class="text-lg text-light-gray max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {{ $t('cta.description') }}
          </p>
        </div>
        
        <!-- Contact Form -->
        <form 
          @submit.prevent="submitForm"
          class="space-y-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-off-white mb-2">{{ $t('cta.form.name') }}</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                class="w-full px-4 py-3 bg-dark-charcoal border border-structure-blue border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-action-blue text-off-white"
                :placeholder="$t('cta.form.name')"
                required
              />
            </div>
            
            <!-- Email Field -->
            <div>
              <label for="email" class="block text-off-white mb-2">{{ $t('cta.form.email') }}</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                class="w-full px-4 py-3 bg-dark-charcoal border border-structure-blue border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-action-blue text-off-white"
                :placeholder="$t('cta.form.email')"
                required
              />
            </div>
          </div>
          
          <!-- Company Field -->
          <div>
            <label for="company" class="block text-off-white mb-2">{{ $t('cta.form.company') }}</label>
            <input 
              type="text" 
              id="company" 
              v-model="form.company" 
              class="w-full px-4 py-3 bg-dark-charcoal border border-structure-blue border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-action-blue text-off-white"
              :placeholder="$t('cta.form.company')"
            />
          </div>
          
          <!-- Message Field -->
          <div>
            <label for="message" class="block text-off-white mb-2">{{ $t('cta.form.message') }}</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              class="w-full px-4 py-3 bg-dark-charcoal border border-structure-blue border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-action-blue text-off-white resize-none"
              :placeholder="$t('cta.form.message')"
              required
            ></textarea>
          </div>
          
          <!-- Submit Button -->
          <div class="text-center">
            <button 
              type="submit" 
              class="px-8 py-3 bg-action-blue hover:bg-opacity-90 text-off-white font-medium rounded-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-action-blue"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ $t('cta.form.submit') }}...
              </span>
              <span v-else>{{ $t('cta.form.submit') }}</span>
            </button>
          </div>
        </form>
        
        <!-- Success Message -->
        <div 
          v-if="formSubmitted" 
          class="mt-8 p-4 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 rounded-md text-center"
          data-aos="fade-up"
        >
          <p class="text-green-400">{{ $t('cta.form.success') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useIntersectionObserver } from '../../composables/useIntersectionObserver';

// Form state
const form = reactive({
  name: '',
  email: '',
  company: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

// Form submission handler
const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate API call with timeout
  setTimeout(() => {
    isSubmitting.value = false;
    formSubmitted.value = true;
    
    // Reset form
    form.name = '';
    form.email = '';
    form.company = '';
    form.message = '';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  }, 1500);
};

onMounted(() => {
  // Initialize animation on scroll
  const { observeElements } = useIntersectionObserver();
  observeElements('[data-aos]');
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>