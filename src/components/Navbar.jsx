import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('#top')
    const [hoveredLink, setHoveredLink] = useState(null)

    // Track scroll position and active section
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Find active section based on scroll position
            const sections = navLinks.map(link => {
                const id = link.href.substring(1)
                const element = id === 'top' ? document.documentElement : document.getElementById(id)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return {
                        id: link.href,
                        top: rect.top,
                        bottom: rect.bottom,
                        height: rect.height
                    }
                }
                return null
            }).filter(Boolean)

            // Determine which section is most visible (accounting for navbar offset)
            const viewportMiddle = window.innerHeight / 3 // Use top third for better UX
            const current = sections.find(section =>
                section.top <= viewportMiddle && section.bottom >= viewportMiddle
            )

            if (current) {
                setActiveSection(current.id)
            } else if (window.scrollY < 100) {
                setActiveSection('#top')
            }
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const target = href === '#top' ? document.documentElement : document.querySelector(href)
        if (window.__lenis) {
            window.__lenis.scrollTo(target, { offset: -80, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
        } else {
            target?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#top" onClick={(e) => handleNavClick(e, '#top')}>
                        <span className="text-xl font-bold text-gradient font-Outfit tracking-wide">

                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 relative">

                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i + 0.3 }}
                                className="relative z-10"
                                onHoverStart={() => setHoveredLink(link.href)}
                                onHoverEnd={() => setHoveredLink(null)}
                            >
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    data-cursor="click"
                                    className={`text-sm transition-all duration-200 relative group px-4 py-2 block ${activeSection === link.href
                                        ? 'text-[#FF6B00] font-medium'
                                        : 'text-zinc-400 hover:text-zinc-100'
                                        }`}
                                >
                                    {link.label}

                                    {/* Enhanced sliding underline */}
                                    <motion.span
                                        className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-[#FF6B00] via-[#FF8C32] to-[#FF6B00]"
                                        initial={{ scaleX: 0, originX: 0.5 }}
                                        animate={{
                                            scaleX: hoveredLink === link.href || activeSection === link.href ? 1 : 0,
                                            originX: hoveredLink === link.href ? 0 : 0.5
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 25,
                                            duration: 0.4
                                        }}
                                        style={{ width: '100%' }}
                                    />
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        data-cursor="click"
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium btn-liquid-glass
                            text-white shadow-lg shadow-[#FF6B00]/20"
                    >
                        <span className="relative z-10">Hire Me</span>
                    </motion.a>

                    {/* Mobile Hamburger */}
                    <motion.button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2 relative z-50 btn-hover rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-orange-400/40 btn-gradient-border"
                        aria-label="Toggle menu"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            className="block w-6 h-0.5 bg-white origin-center"
                            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        />
                        <motion.span
                            className="block w-6 h-0.5 bg-white"
                            animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="block w-6 h-0.5 bg-white origin-center"
                            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-y-0 right-0 w-64 sm:w-72 z-40 bg-white/10 backdrop-blur-xl border-l border-white/15 flex flex-col pt-20 sm:pt-24 px-6 sm:px-8 gap-4"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{
                                    delay: i * 0.05,
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 25
                                }}
                                onClick={(e) => handleNavClick(e, link.href)}
                                data-cursor="click"
                                className={`text-lg py-3 border-b border-white/5 transition-all duration-200 relative ${activeSection === link.href
                                    ? 'text-[#FF6B00] translate-x-2'
                                    : 'text-gray-300 hover:text-white hover:translate-x-2'
                                    }`}
                            >
                                <span className={`text-sm font-mono mr-2 transition-colors ${activeSection === link.href ? 'text-[#FF6B00]' : 'text-gray-500'
                                    }`}>
                                    0{i + 1}.
                                </span>
                                {link.label}
                                {activeSection === link.href && (
                                    <motion.span
                                        layoutId="activeMobile"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#FF6B00] to-[#E55F00] rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm md:hidden cursor-pointer"
                    />
                )}
            </AnimatePresence>
        </>
    )
}