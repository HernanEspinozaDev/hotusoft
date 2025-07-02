<template>
  <div class="relative min-h-screen bg-dark-900 text-dark-100 overflow-hidden">
    <AnimatedBackground />
    <Navbar />
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AboutSection />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import AboutSection from '../components/AboutSection.vue'
import Footer from '../components/Footer.vue'
import AnimatedBackground from '../components/AnimatedBackground.vue'
</script> 