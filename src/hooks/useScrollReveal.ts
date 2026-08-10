import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Reveals any [data-reveal] element the first time it scrolls into view.
 *
 * Re-runs on every navigation, since each page mounts its own set of targets.
 * `deps` lets a page re-scan after it swaps content that isn't route-driven
 * (a filter change, for instance).
 */
export function useScrollReveal(deps: unknown[] = []) {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    /* Marks the sheet as JS-driven. Without it the hidden state would never
       lift if this never ran, leaving the page blank. Set in a layout effect
       so it lands before the first paint — in a plain effect the content
       would flash visible for a frame, then snap hidden to animate. */
    document.documentElement.classList.add('reveal-ready')

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
    )
    if (targets.length === 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          /* Reveal once — no re-hiding when it scrolls back out */
          observer.unobserve(entry.target)
        })
      },
      /* Fires just before the element is fully on screen, so the motion
         finishes as it settles rather than starting late. */
      { threshold: 0.12, rootMargin: '0px 0px -12% 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, ...deps])
}
