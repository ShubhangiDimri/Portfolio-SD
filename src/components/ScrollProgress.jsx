import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = (scrollTop / docHeight) * 100
            setScrollProgress(scrollPercent)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial call

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#121212]/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="h-full bg-gradient-to-r from-[#FF6B00] via-[#FF8C32] to-[#FF6B00] shadow-lg shadow-[#FF6B00]/30"
                style={{
                    width: `${scrollProgress}%`,
                }}
                animate={{
                    boxShadow: [
                        '0 0 20px rgba(255, 107, 0, 0.4)',
                        '0 0 30px rgba(255, 140, 50, 0.5)',
                        '0 0 20px rgba(255, 107, 0, 0.4)',
                    ]
                }}
                transition={{
                    boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    width: { type: 'spring', stiffness: 400, damping: 40 }
                }}
            />
        </motion.div>
    )
}