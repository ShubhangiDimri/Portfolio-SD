import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function useLenisScroll() {
    const rafIdRef = useRef(null)

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
            anchors: {
                offset: -100,
            },
        })

        // Expose instance globally so Navbar can call lenis.scrollTo()
        window.__lenis = lenis

        const raf = (time) => {
            lenis.raf(time)
            rafIdRef.current = requestAnimationFrame(raf)
        }

        rafIdRef.current = requestAnimationFrame(raf)

        return () => {
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current)
            }
            window.__lenis = null
            lenis.destroy()
        }
    }, [])
}
