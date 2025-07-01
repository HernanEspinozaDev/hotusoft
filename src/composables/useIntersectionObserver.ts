import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useIntersectionObserver(
  threshold = 0.1,
  rootMargin = '0px'
) {
  const target: Ref<Element | null> = ref(null)
  const isIntersecting = ref(false)
  const observer = ref<IntersectionObserver | null>(null)

  onMounted(() => {
    if (target.value) {
      observer.value = new IntersectionObserver(
        ([entry]) => {
          isIntersecting.value = entry.isIntersecting
        },
        {
          threshold,
          rootMargin
        }
      )
      observer.value.observe(target.value)
    }
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return {
    target,
    isIntersecting
  }
}