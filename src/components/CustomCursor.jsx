import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)

            // Subtle magnetic effect — uses CSS custom properties to avoid
            // conflicting with Framer Motion's style.transform management
            const magnetTargets = document.querySelectorAll('[data-magnetic]')
            magnetTargets.forEach((el) => {
                const rect = el.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                const distX = e.clientX - centerX
                const distY = e.clientY - centerY
                const dist = Math.sqrt(distX * distX + distY * distY)
                const threshold = 100

                if (dist < threshold) {
                    const pull = (1 - dist / threshold) * 4
                    el.style.setProperty('--mag-x', `${distX * pull * 0.03}px`)
                    el.style.setProperty('--mag-y', `${distY * pull * 0.03}px`)
                } else {
                    el.style.setProperty('--mag-x', '0px')
                    el.style.setProperty('--mag-y', '0px')
                }
            })

            // Update light position on liquid glass buttons
            const buttons = document.querySelectorAll('.btn-liquid-glass')
            buttons.forEach((btn) => {
                const rect = btn.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width) * 100
                const y = ((e.clientY - rect.top) / rect.height) * 100
                btn.style.setProperty('--light-x', `${x}%`)
                btn.style.setProperty('--light-y', `${y}%`)
            })
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)
        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mouseleave', handleMouseLeave)
            document.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [isVisible])

    // Hide default cursor globally
    useEffect(() => {
        document.body.style.cursor = 'none'
        const style = document.createElement('style')
        style.textContent = `
            *, *::before, *::after { cursor: none !important; }
            a, button, [role="button"], input, textarea, select { cursor: none !important; }
        `
        document.head.appendChild(style)
        return () => {
            document.body.style.cursor = 'auto'
            style.remove()
        }
    }, [])

    if (!isVisible) return null

    return (
        <>
            {/* Outer ring — 30px hollow circle, scales down on click */}
            <motion.div
                className="fixed pointer-events-none z-[9999] rounded-full border-[1.5px] border-zinc-400/50"
                animate={{
                    x: mousePosition.x - 15,
                    y: mousePosition.y - 15,
                    width: isClicking ? 22 : 30,
                    height: isClicking ? 22 : 30,
                    // re-center on scale
                    ...(isClicking && {
                        x: mousePosition.x - 11,
                        y: mousePosition.y - 11,
                    }),
                }}
                transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 25,
                    mass: 0.4,
                }}
            />

            {/* Inner dot — 8px solid */}
            <motion.div
                className="fixed pointer-events-none z-[9999] rounded-full bg-[#FF6B00]"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    width: isClicking ? 6 : 8,
                    height: isClicking ? 6 : 8,
                    ...(isClicking && {
                        x: mousePosition.x - 3,
                        y: mousePosition.y - 3,
                    }),
                }}
                transition={{
                    type: 'spring',
                    stiffness: 800,
                    damping: 35,
                    mass: 0.2,
                }}
            />
        </>
    )
}
