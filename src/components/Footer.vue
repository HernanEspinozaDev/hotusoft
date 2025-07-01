<script setup lang="ts">
import { Github, Linkedin, Twitter, Mail } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const currentYear = new Date().getFullYear()

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const quickLinks = [
  { key: 'problems', id: 'problems' },
  { key: 'features', id: 'features' },
  { key: 'useCases', id: 'use-cases' },
  { key: 'roadmap', id: 'roadmap' }
]

const companyLinks = [
  { key: 'about', id: 'about' },
  { key: 'contact', id: 'contact' }
]

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contacto@hotusoft.com', label: 'Email' }
]
</script>

<template>
  <footer class="bg-dark-800 border-t border-dark-200/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center mb-4">
            <h3 class="text-2xl font-bold gradient-bg bg-clip-text text-transparent">
              Hotusoft
            </h3>
          </div>
          <p class="text-dark-200 mb-6 max-w-md">
            {{ t('footer.description') }}
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="flex items-center justify-center w-10 h-10 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              <component :is="social.icon" class="h-5 w-5 text-dark-200 group-hover:text-primary-500 transition-colors duration-300" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-dark-100 mb-4">{{ t('footer.links.product') }}</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.key">
              <button
                @click="scrollToSection(link.id)"
                class="text-dark-200 hover:text-primary-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
              >
                {{ t(`nav.${link.key}`) }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h4 class="text-lg font-semibold text-dark-100 mb-4">{{ t('footer.links.company') }}</h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.key">
              <button
                @click="scrollToSection(link.id)"
                class="text-dark-200 hover:text-primary-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
              >
                {{ t(`nav.${link.key}`) }}
              </button>
            </li>
            <li>
              <a
                href="mailto:contacto@hotusoft.com"
                class="text-dark-200 hover:text-primary-500 transition-colors duration-300"
              >
                Soporte
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-dark-200/10">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-dark-200 text-sm">
            {{ t('footer.copyright').replace('2024', currentYear.toString()) }}
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-dark-200 hover:text-primary-500 text-sm transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="#" class="text-dark-200 hover:text-primary-500 text-sm transition-colors duration-300">
              Términos de Uso
            </a>
            <a href="#" class="text-dark-200 hover:text-primary-500 text-sm transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>