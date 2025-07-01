import { ref } from 'vue';

export function useIntersectionObserver() {
  const observedElements = ref<Element[]>([]);

  // Animation classes based on data-aos attribute
  const animationClasses: Record<string, string[]> = {
    'fade-up': ['opacity-0', 'translate-y-8', 'opacity-100', 'translate-y-0'],
    'fade-down': ['opacity-0', 'translate-y-[-2rem]', 'opacity-100', 'translate-y-0'],
    'fade-left': ['opacity-0', 'translate-x-[-2rem]', 'opacity-100', 'translate-x-0'],
    'fade-right': ['opacity-0', 'translate-x-8', 'opacity-100', 'translate-x-0'],
    'zoom-in': ['opacity-0', 'scale-95', 'opacity-100', 'scale-100'],
    'zoom-out': ['opacity-0', 'scale-105', 'opacity-100', 'scale-100'],
  };

  // Default animation if not specified
  const defaultAnimation = 'fade-up';

  // Create intersection observer
  const createObserver = () => {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1, // 10% of the element must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animation = element.getAttribute('data-aos') || defaultAnimation;
          const delay = element.getAttribute('data-aos-delay') || '0';
          
          // Get animation classes
          const [initialOpacity, initialTransform, finalOpacity, finalTransform] = 
            animationClasses[animation] || animationClasses[defaultAnimation];
          
          // Apply initial state
          element.classList.add('transition-all', 'duration-700', initialOpacity, initialTransform);
          
          // Apply final state after delay
          setTimeout(() => {
            element.classList.remove(initialOpacity, initialTransform);
            element.classList.add(finalOpacity, finalTransform);
          }, parseInt(delay));
          
          // Unobserve after animation
          observer.unobserve(element);
        }
      });
    }, options);

    return observer;
  };

  // Observe elements with data-aos attribute
  const observeElements = (selector: string) => {
    const elements = document.querySelectorAll(selector);
    const observer = createObserver();
    
    elements.forEach((element) => {
      // Apply initial state
      const animation = element.getAttribute('data-aos') || defaultAnimation;
      const [initialOpacity, initialTransform] = 
        animationClasses[animation] || animationClasses[defaultAnimation];
      
      element.classList.add(initialOpacity, initialTransform);
      
      // Start observing
      observer.observe(element);
      observedElements.value.push(element);
    });
  };

  return {
    observeElements,
    observedElements,
  };
}