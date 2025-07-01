<template>
  <section class="py-20 bg-off-black">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold text-off-white mb-6"
          data-aos="fade-up"
        >
          {{ $t('team.title') }}
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
          {{ $t('team.description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="`team-member-${index}`"
          class="bg-dark-charcoal rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-action-blue/10 transition-all duration-300"
          :data-aos="'fade-up'"
          :data-aos-delay="200 + (index * 100)"
        >
          <div class="h-48 bg-gradient-to-r from-action-blue/10 to-structure-blue/10 relative flex items-center justify-center">
            <!-- Avatar placeholder with initials -->
            <div class="w-24 h-24 rounded-full bg-action-blue bg-opacity-20 flex items-center justify-center text-2xl font-bold text-action-blue">
              {{ getMemberInitials(member.name) }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-off-white mb-2 group-hover:text-action-blue transition-colors duration-300">
              {{ member.name }}
            </h3>
            <p class="text-light-gray text-sm">
              {{ member.expertise }}
            </p>
          </div>
        </div>
      </div>

      <!-- Interactive element: Join the team button -->
      <div class="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
        <button class="px-8 py-3 bg-action-blue text-white font-medium rounded-lg hover:bg-action-blue/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-action-blue focus:ring-opacity-50">
          {{ $t('team.title') === 'Nuestro Equipo' ? 'Únete a Nuestro Equipo' : 'Join Our Team' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useIntersectionObserver } from '../../composables/useIntersectionObserver';
import { useI18n } from 'vue-i18n';

// Define interface for team member structure
interface TeamMember {
  name: string;
  expertise: string;
}

const { t } = useI18n();

// Computed property with type assertion
const teamMembers = computed<TeamMember[]>(() => {
  return t('team.members') as unknown as TeamMember[];
});

// Function to get initials from name
const getMemberInitials = (name: string) => {
  if (!name) return '';
  return name.split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase();
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
