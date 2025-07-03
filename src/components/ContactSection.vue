<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue' // <-- 1. Importa onUnmounted
import { Send, Mail, MapPin } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const { t } = useI18n()
const { target, isIntersecting } = useIntersectionObserver(0.2)

const form = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('') // Para un mensaje de error más específico

const isMobile = ref(false)

// 1. Mejora: Lógica de resize limpia
const handleResize = () => {
  isMobile.value = window.innerWidth < 640
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const submitForm = async () => {
  isSubmitting.value = true
  submitStatus.value = 'idle'
  errorMessage.value = ''

  const requestBody = {
    site: "hotusoft",
    formId: "contacto_principal",
    token: import.meta.env.VITE_HOTUSOFT_TOKEN, // Sospechoso #1
    payload: form.value
  };

  const apiUrl = `${import.meta.env.VITE_API_ENDPOINT}/contact`; // Sospechoso #2

  // --- INICIO DE LA DEPURACIÓN ---
  console.log("🚀 Intentando enviar a:", apiUrl);
  console.log("📦 Payload a enviar:", JSON.stringify(requestBody, null, 2));
  // --- FIN DE LA DEPURACIÓN ---

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error del servidor: ${response.status}`);
    }

    submitStatus.value = 'success';
    form.value = { name: '', email: '', company: '', message: '' };
    setTimeout(() => { submitStatus.value = 'idle' }, 5000);

  } catch (error: any) {
    // --- DEPURACIÓN DEL ERROR ---
    console.error('❌ Error capturado en el bloque CATCH:', error);
    // --- FIN DE LA DEPURACIÓN ---
    errorMessage.value = error.message || 'Ocurrió un error inesperado.';
    submitStatus.value = 'error';
    setTimeout(() => { submitStatus.value = 'idle' }, 5000);
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <section id="contact" ref="target" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-6">
          <span class="gradient-bg bg-clip-text text-transparent">
            {{ t('contact.title') }}
          </span>
        </h2>
        <p class="text-xl text-dark-200 max-w-3xl mx-auto mb-4">
          {{ t('contact.subtitle') }}
        </p>
        <p class="text-dark-200 max-w-3xl mx-auto">
          {{ t('contact.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <template v-if="!isMobile">
          <Transition
            appear
            enter-active-class="transition ease-out duration-800 delay-300"
            enter-from-class="opacity-0 transform translate-x-8"
            enter-to-class="opacity-100 transform translate-x-0"
          >
            <div v-if="isIntersecting" class="space-y-8">
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="flex items-center justify-center w-12 h-12 gradient-bg rounded-lg mr-4">
                    <Mail class="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-dark-100">Email</h3>
                    <p class="text-dark-200">contacto@hotusoft.com</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="flex items-center justify-center w-12 h-12 gradient-bg rounded-lg mr-4">
                    <MapPin class="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-dark-100">Dirección</h3>
                    <p class="text-dark-200">Avenida Apoquindo 6410, oficina 1004, comuna de Las Condes.</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="flex items-center justify-center w-12 h-12 gradient-bg rounded-lg mr-4">
                    <span class="h-6 w-6 text-white font-bold flex items-center justify-center">🏢</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-dark-100">Empresa</h3>
                    <p class="text-dark-200">HOTU SOFTWARE SOLUTIONS SPA</p>
                  </div>
                </div>
              </div>

              <div class="glass-effect p-8 rounded-xl">
                <h3 class="text-2xl font-semibold mb-4 text-dark-100">¿Listo para innovar?</h3>
                <p class="text-dark-200 mb-6">
                  Únete a la revolución blockchain y transforma tu organización con tecnología de vanguardia.
                </p>
                <div class="flex flex-wrap gap-4">
                  <span class="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm">Consultoría</span>
                  <span class="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm">Implementación</span>
                  <span class="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm">Soporte</span>
                </div>
              </div>
            </div>
          </Transition>
        </template>
        <template v-else>
          <div class="space-y-8">
            <div class="space-y-6">
              <div class="flex items-center">
                <div class="flex items-center justify-center w-12 h-12 gradient-bg rounded-lg mr-4">
                  <Mail class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-dark-100">Email</h3>
                  <p class="text-dark-200">contacto@hotusoft.com</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex items-center justify-center w-12 h-12 gradient-bg rounded-lg mr-4">
                  <MapPin class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-dark-100">Dirección</h3>
                  <p class="text-dark-200">Avenida Apoquindo 6410, oficina 1004, comuna de Las Condes.</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex items-center justify-center w-12 h-12 gradient-bg rounded-lg mr-4">
                  <span class="h-6 w-6 text-white font-bold flex items-center justify-center">🏢</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-dark-100">Empresa</h3>
                  <p class="text-dark-200">HOTU SOFTWARE SOLUTIONS SPA</p>
                </div>
              </div>
            </div>

            <div class="glass-effect p-8 rounded-xl">
              <h3 class="text-2xl font-semibold mb-4 text-dark-100">¿Listo para innovar?</h3>
              <p class="text-dark-200 mb-6">
                Únete a la revolución blockchain y transforma tu organización con tecnología de vanguardia.
              </p>
              <div class="flex flex-wrap gap-4">
                <span class="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm">Consultoría</span>
                <span class="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm">Implementación</span>
                <span class="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm">Soporte</span>
              </div>
            </div>
          </div>
        </template>
        <template v-if="!isMobile">
          <Transition
            appear
            enter-active-class="transition ease-out duration-800 delay-500"
            enter-from-class="opacity-0 transform translate-x-8"
            enter-to-class="opacity-100 transform translate-x-0"
          >
            <div v-if="isIntersecting">
              <form @submit.prevent="submitForm" class="glass-effect p-8 rounded-xl space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-dark-100 mb-2">
                      {{ t('contact.form.name') }}
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-dark-800 border border-dark-200/20 rounded-lg text-dark-100 placeholder-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre completo"
                    >
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-dark-100 mb-2">
                      {{ t('contact.form.email') }}
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 bg-dark-800 border border-dark-200/20 rounded-lg text-dark-100 placeholder-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                    >
                  </div>
                </div>

                <div>
                  <label for="company" class="block text-sm font-medium text-dark-100 mb-2">
                    {{ t('contact.form.company') }}
                  </label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="w-full px-4 py-3 bg-dark-800 border border-dark-200/20 rounded-lg text-dark-100 placeholder-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tu empresa"
                  >
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-dark-100 mb-2">
                    {{ t('contact.form.message') }}
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 bg-dark-800 border border-dark-200/20 rounded-lg text-dark-100 placeholder-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send class="mr-2 h-5 w-5" />
                  <span v-if="!isSubmitting">{{ t('contact.form.submit') }}</span>
                  <span v-else>Enviando...</span>
                </button>

                <Transition
                  enter-active-class="transition ease-out duration-300"
                  enter-from-class="opacity-0 transform translate-y-2"
                  enter-to-class="opacity-100 transform translate-y-0"
                  leave-active-class="transition ease-in duration-200"
                  leave-from-class="opacity-100 transform translate-y-0"
                  leave-to-class="opacity-0 transform translate-y-2"
                >
                  <div v-if="submitStatus === 'success'" class="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                    <p class="text-green-400 text-center">{{ t('contact.form.success') }}</p>
                  </div>
                  <div v-else-if="submitStatus === 'error'" class="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                    <p class="text-red-400 text-center">{{ t('contact.form.error') }}</p>
                  </div>
                </Transition>
              </form>
            </div>
          </Transition>
        </template>
        <template v-else>
          <form @submit.prevent="submitForm" class="glass-effect p-8 rounded-xl space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-dark-100 mb-2">
                  {{ t('contact.form.name') }}
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-dark-800 border border-dark-200/20 rounded-lg text-dark-100 placeholder-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre completo"
                >
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-dark-100 mb-2">
                  {{ t('contact.form.email') }}
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-dark-800 border border-dark-200/20 rounded-lg text-dark-100 placeholder-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                >
              </div>
            </div>

            <div>
              <label for="company" class="block text-sm font-medium text-dark-100 mb-2">
                {{ t('contact.form.company') }}
              </label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                class="w-full px-4 py-3 bg-dark-800 border border-dark-200/20 rounded-lg text-dark-100 placeholder-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                placeholder="Tu empresa"
              >
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-dark-100 mb-2">
                {{ t('contact.form.message') }}
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 bg-dark-800 border border-dark-200/20 rounded-lg text-dark-100 placeholder-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send class="mr-2 h-5 w-5" />
              <span v-if="!isSubmitting">{{ t('contact.form.submit') }}</span>
              <span v-else>Enviando...</span>
            </button>

            <Transition
              enter-active-class="transition ease-out duration-300"
              enter-from-class="opacity-0 transform translate-y-2"
              enter-to-class="opacity-100 transform translate-y-0"
              leave-active-class="transition ease-in duration-200"
              leave-from-class="opacity-100 transform translate-y-0"
              leave-to-class="opacity-0 transform translate-y-2"
            >
              <div v-if="submitStatus === 'success'" class="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p class="text-green-400 text-center">{{ t('contact.form.success') }}</p>
              </div>
              <div v-else-if="submitStatus === 'error'" class="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p class="text-red-400 text-center">{{ t('contact.form.error') }}</p>
              </div>
            </Transition>
          </form>
        </template>
      </div>
    </div>
  </section>
</template>