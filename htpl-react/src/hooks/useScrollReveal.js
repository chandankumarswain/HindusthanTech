import { useEffect } from 'react'

/**
 * Replicates the original page's scroll-reveal behaviour: every element with
 * the `.reveal` class fades/slides in once it scrolls into view, with a small
 * staggered transition delay. Kept identical to the source IntersectionObserver
 * so the motion design matches the original page exactly.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms'
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])
}
