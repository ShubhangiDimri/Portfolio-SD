import { useEffect } from 'react'
import Lenis from 'lenis'

export default function useLenisScroll() {
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
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            window.__lenis = null
            lenis.destroy()
        }
    }, [])
}
