import { createRouter, createWebHistory } from 'vue-router'
import RoadmapView from '../views/RoadmapView.vue'
import AboutView from '../views/AboutView.vue'
import HeroFullView from '../views/HeroFullView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroFullView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: RoadmapView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ],
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router