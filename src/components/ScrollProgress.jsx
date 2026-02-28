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
            className="fixed top-0 left-0 right-0 h-1 bg-zinc-900/30 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 shadow-lg shadow-orange-500/20"
                style={{
                    width: `${scrollProgress}%`,
                }}
                animate={{
                    boxShadow: [
                        '0 0 20px rgba(249, 115, 22, 0.3)',
                        '0 0 30px rgba(251, 146, 60, 0.4)',
                        '0 0 20px rgba(249, 115, 22, 0.3)',
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