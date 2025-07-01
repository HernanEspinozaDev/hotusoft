<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-[#1D232A] py-4 px-6 sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <img src="/logo.svg" alt="Hotusoft Logo" class="h-10 w-auto" />
          <h1 class="text-[#EAEAEA] text-xl font-semibold ml-3">Hotusoft</h1>
        </div>
        <LanguageSwitcher />
      </div>
    </header>

    <main class="flex-grow">
      <HeroSection />
      <ProblemSolutionSection />
      <UseCasesSection />
      <ValuePropositionSection />
      <BusinessModelSection />
      <RoadmapSection />
      <TeamSection />
      <CtaSection />
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useUiStore } from './stores/uiStore';
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ProblemSolutionSection from './components/sections/ProblemSolutionSection.vue';
import UseCasesSection from './components/sections/UseCasesSection.vue';
import ValuePropositionSection from './components/sections/ValuePropositionSection.vue';
import BusinessModelSection from './components/sections/BusinessModelSection.vue';
import RoadmapSection from './components/sections/RoadmapSection.vue';
import TeamSection from './components/sections/TeamSection.vue';
import CtaSection from './components/sections/CtaSection.vue';
import FooterSection from './components/sections/FooterSection.vue';

const { locale } = useI18n();
const uiStore = useUiStore();

// Set locale from store
watch(() => uiStore.currentLocale, (newLocale) => {
  locale.value = newLocale;
  document.documentElement.lang = newLocale;
  updateMetaTags(newLocale);
});

// Detect browser language on first load
onMounted(() => {
  const browserLang = navigator.language.split('-')[0];
  const supportedLocale = ['es', 'en'].includes(browserLang) ? browserLang : 'es';
  uiStore.setLocale(supportedLocale as 'es' | 'en');
});

// Update meta tags when language changes
function updateMetaTags(lang: string) {
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  const title = document.querySelector('title');

  if (lang === 'es') {
    if (metaDescription) metaDescription.setAttribute('content', 'Hotusoft - Plataforma de identidad y activos digitales basada en blockchain');
    if (ogTitle) ogTitle.setAttribute('content', 'Hotusoft - Identidad y Activos Digitales');
    if (ogDescription) ogDescription.setAttribute('content', 'Plataforma de identidad y activos digitales basada en blockchain');
    if (twitterTitle) twitterTitle.setAttribute('content', 'Hotusoft - Identidad y Activos Digitales');
    if (twitterDescription) twitterDescription.setAttribute('content', 'Plataforma de identidad y activos digitales basada en blockchain');
    if (title) title.textContent = 'Hotusoft - Identidad y Activos Digitales';
  } else {
    if (metaDescription) metaDescription.setAttribute('content', 'Hotusoft - Blockchain-based digital identity and assets platform');
    if (ogTitle) ogTitle.setAttribute('content', 'Hotusoft - Digital Identity and Assets');
    if (ogDescription) ogDescription.setAttribute('content', 'Blockchain-based digital identity and assets platform');
    if (twitterTitle) twitterTitle.setAttribute('content', 'Hotusoft - Digital Identity and Assets');
    if (twitterDescription) twitterDescription.setAttribute('content', 'Blockchain-based digital identity and assets platform');
    if (title) title.textContent = 'Hotusoft - Digital Identity and Assets';
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}

/* Custom focus styles for accessibility */
*:focus-visible {
  outline: 2px solid #3498DB;
  outline-offset: 2px;
}
</style>
