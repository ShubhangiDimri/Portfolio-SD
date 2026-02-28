import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorVariant, setCursorVariant] = useState('default')
    const [isVisible, setIsVisible] = useState(false)
    const [lightPosition, setLightPosition] = useState({ x: 0.5, y: 0.5 })

    const updateCursorType = useCallback((e) => {
        const target = e.target
        const tagName = target.tagName.toLowerCase()
        
        // Check for project cards/thumbnails
        if (
            target.closest('[data-cursor="magnify"]') ||
            target.closest('.project-card') ||
            target.classList.contains('project-thumbnail')
        ) {
            setCursorVariant('magnify')
            return
        }
        
        // Check for buttons and CTAs
        if (
            tagName === 'button' ||
            tagName === 'a' ||
            target.closest('[data-cursor="click"]') ||
            target.closest('.btn-liquid-glass') ||
            target.classList.contains('btn-hover')
        ) {
            setCursorVariant('click')
            return
        }
        
        // Check for text inputs
        if (tagName === 'input' || tagName === 'textarea') {
            setCursorVariant('text')
            return
        }
        
        setCursorVariant('default')
    }, [])

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)
            updateCursorType(e)
            
            // Update light position for liquid glass effect on buttons
            const buttons = document.querySelectorAll('.btn-liquid-glass')
            buttons.forEach(btn => {
                const rect = btn.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width) * 100
                const y = ((e.clientY - rect.top) / rect.height) * 100
                btn.style.setProperty('--light-x', `${x}%`)
                btn.style.setProperty('--light-y', `${y}%`)
            })
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
            document.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [isVisible, updateCursorType])

    // Hide default cursor
    useEffect(() => {
        document.body.style.cursor = 'none'
        
        // Add cursor:none to all interactive elements
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

    const cursorVariants = {
        default: {
            width: 20,
            height: 20,
            backgroundColor: 'transparent',
            border: '2px solid rgba(255, 107, 0, 0.6)',
            borderRadius: '50%',
            mixBlendMode: 'normal',
        },
        click: {
            width: 48,
            height: 48,
            backgroundColor: 'rgba(255, 107, 0, 0.15)',
            border: '2px solid rgba(255, 107, 0, 0.8)',
            borderRadius: '50%',
            mixBlendMode: 'normal',
        },
        magnify: {
            width: 64,
            height: 64,
            backgroundColor: 'rgba(255, 107, 0, 0.1)',
            border: '2px solid rgba(255, 107, 0, 0.6)',
            borderRadius: '50%',
            mixBlendMode: 'normal',
        },
        text: {
            width: 4,
            height: 32,
            backgroundColor: 'rgba(255, 107, 0, 0.8)',
            border: 'none',
            borderRadius: '2px',
            mixBlendMode: 'normal',
        },
    }

    const currentVariant = cursorVariants[cursorVariant]
    const offsetX = cursorVariant === 'text' ? 2 : currentVariant.width / 2
    const offsetY = cursorVariant === 'text' ? currentVariant.height / 2 : currentVariant.height / 2

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Main cursor */}
                    <motion.div
                        className="fixed pointer-events-none z-[9999]"
                        animate={{
                            x: mousePosition.x - offsetX,
                            y: mousePosition.y - offsetY,
                            ...currentVariant,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 28,
                            mass: 0.5,
                        }}
                    >
                        {/* Magnifying glass icon */}
                        {cursorVariant === 'magnify' && (
                            <motion.div 
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                            >
                                <svg 
                                    className="w-6 h-6 text-[#FF6B00]" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                                    />
                                </svg>
                            </motion.div>
                        )}
                        
                        {/* Click indicator */}
                        {cursorVariant === 'click' && (
                            <motion.div 
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                            >
                                <svg 
                                    className="w-5 h-5 text-[#FF6B00]" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.05 3.293A8 8 0 0118.95 15.243l-4.243 4.243a2 2 0 01-2.828 0l-4.243-4.243A8 8 0 017.05 3.293zM12 6a4 4 0 100 8 4 4 0 000-8z" />
                                </svg>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Trailing dot */}
                    <motion.div
                        className="fixed pointer-events-none z-[9998] w-2 h-2 rounded-full bg-[#FF6B00]"
                        animate={{
                            x: mousePosition.x - 4,
                            y: mousePosition.y - 4,
                            scale: cursorVariant === 'default' ? 1 : 0.5,
                            opacity: cursorVariant === 'text' ? 0 : 1,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 800,
                            damping: 35,
                            mass: 0.3,
                        }}
                    />

                    {/* Ambient glow */}
                    <motion.div
                        className="fixed pointer-events-none z-[9997] w-[300px] h-[300px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(255, 107, 0, 0.08) 0%, transparent 70%)',
                        }}
                        animate={{
                            x: mousePosition.x - 150,
                            y: mousePosition.y - 150,
                            opacity: cursorVariant === 'click' || cursorVariant === 'magnify' ? 1 : 0.5,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 20,
                        }}
                    />
                </>
            )}
        </AnimatePresence>
    )
}
