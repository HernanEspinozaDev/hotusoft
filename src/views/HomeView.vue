<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import ProblemsSection from '../components/ProblemsSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import UseCasesSection from '../components/UseCasesSection.vue'
import RoadmapSection from '../components/RoadmapSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-dark-900 text-dark-100">
    <Navbar />
    <main>
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <UseCasesSection />
      <RoadmapSection />
      <AboutSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>