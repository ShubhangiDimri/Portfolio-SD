import { motion } from 'framer-motion'

// Left side content animations
const leftContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
}

const leftItem = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}

// Right side portrait animation
const rightSide = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 },
    },
}

// SVG stat icons with orange glow
const StatIcon = ({ type }) => {
    const icons = {
        rocket: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
            </svg>
        ),
        bolt: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        trophy: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0012 0V2z" />
            </svg>
        ),
    }
    return (
        <div className="text-[#FF6B00] drop-shadow-[0_0_8px_rgba(255,107,0,0.5)]">
            {icons[type]}
        </div>
    )
}

export default function Hero() {
    return (
        <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
            {/* Background orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-500/8 rounded-full blur-[120px] pointer-events-none"
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/6 rounded-full blur-[100px] pointer-events-none"
                animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zinc-600/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Slow animated radial gradient background */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                animate={{
                    background: [
                        'radial-gradient(ellipse 120% 80% at 20% 30%, rgba(249, 115, 22, 0.6) 0%, rgba(251, 146, 60, 0.3) 35%, transparent 70%)',
                        'radial-gradient(ellipse 140% 90% at 80% 70%, rgba(251, 146, 60, 0.5) 0%, rgba(249, 115, 22, 0.4) 40%, transparent 75%)',
                        'radial-gradient(ellipse 100% 70% at 40% 80%, rgba(251, 146, 60, 0.7) 0%, rgba(253, 186, 116, 0.2) 30%, transparent 65%)',
                        'radial-gradient(ellipse 130% 85% at 70% 20%, rgba(249, 115, 22, 0.4) 0%, rgba(251, 146, 60, 0.3) 45%, transparent 80%)',
                        'radial-gradient(ellipse 120% 80% at 20% 30%, rgba(249, 115, 22, 0.6) 0%, rgba(251, 146, 60, 0.3) 35%, transparent 70%)'
                    ]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid-pattern" />

            {/* Two-column split layout */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-16 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
                    {/* Left Side: Text Content */}
                    <motion.div
                        variants={leftContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6 lg:space-y-8"
                    >
                        {/* Dark Glass Pill Badge — System Status */}
                        <motion.div
                            variants={leftItem}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                                bg-zinc-900/80 backdrop-blur-md
                                border border-zinc-800/60
                                shadow-[0_2px_16px_rgba(0,0,0,0.3)]"
                        >
                            {/* Pulsing green LED dot */}
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                            </span>
                            <span
                                className="text-[11px] text-zinc-300 uppercase tracking-[0.2em]"
                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                            >
                                Available
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.div variants={leftItem}>
                            <p className="text-zinc-500 text-lg mb-3 font-mono">
                                Hi, I&apos;m
                            </p>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl heading-variable text-gradient mb-4 leading-tight cursor-default">
                                Shubhangi <br />
                                <span className="text-zinc-100 heading-variable">Dimri</span>
                            </h1>
                        </motion.div>

                        {/* Role — brightened to text-zinc-300 */}
                        <motion.h2 variants={leftItem} className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 font-semibold">
                            Full Stack{' '}
                            <span className="text-gradient-cyan font-semibold">AI</span>
                            {' '}Engineer from UPES
                        </motion.h2>

                        {/* Description */}
                        <motion.p variants={leftItem} className="max-w-xl text-zinc-500 leading-relaxed text-lg">
                            Building scalable full-stack applications and AI-driven solutions with a passion for clean code and great user experiences.
                        </motion.p>

                        {/* CTA Buttons — Ghost secondary button */}
                        <motion.div
                            variants={leftItem}
                            className="flex flex-col sm:flex-row items-start gap-4"
                        >
                            {/* Primary CTA */}
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                data-cursor="click"
                                data-magnetic
                                className="group px-8 py-3.5 rounded-2xl font-semibold text-white btn-liquid-glass
                                    shadow-lg shadow-[#FF6B00]/20
                                    flex items-center gap-2"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>

                            {/* Ghost Button — secondary */}
                            <motion.a
                                href="#work"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                data-cursor="click"
                                data-magnetic
                                className="px-8 py-3.5 rounded-2xl font-semibold text-zinc-400
                                    bg-transparent border border-zinc-800
                                    hover:border-orange-500 hover:text-zinc-100
                                    transition-all duration-300"
                            >
                                View My Work
                            </motion.a>
                        </motion.div>

                        {/* Horizontal Bento Glass Stats Container */}
                        <motion.div
                            variants={leftItem}
                            className="bg-white/[0.04] backdrop-blur-lg border border-white/[0.08] rounded-2xl p-5 mt-8
                                shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
                        >
                            <div className="flex items-center justify-between sm:justify-start sm:gap-0 divide-x divide-zinc-700/50">
                                {[
                                    { value: '3+', label: 'Projects Built', icon: 'rocket' },
                                    { value: '4+', label: 'Technologies', icon: 'bolt' },
                                    { value: '8.6', label: 'CGPA at UPES', icon: 'trophy' },
                                ].map((stat) => (
                                    <motion.div
                                        key={stat.label}
                                        whileHover={{ scale: 1.03, y: -1 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                        className="flex items-center gap-3 cursor-default flex-1 justify-center px-4 first:pl-0 last:pr-0"
                                    >
                                        <StatIcon type={stat.icon} />
                                        <div className="flex flex-col">
                                            <span className="text-2xl sm:text-3xl font-bold text-gradient leading-none">{stat.value}</span>
                                            <span className="text-[10px] text-zinc-500 mt-0.5 font-mono leading-tight uppercase tracking-wider">{stat.label}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Circular Portrait */}
                    <motion.div
                        variants={rightSide}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Enhanced orange glow behind image */}
                            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,107,0,0.15),_transparent_60%)] blur-3xl scale-125" />
                            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,107,0,0.08),_transparent_70%)] blur-2xl scale-110" />

                            {/* Floating portrait container */}
                            <motion.div
                                animate={{
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                                whileHover={{ scale: 1.03 }}
                                className="relative p-3 rounded-full bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm"
                            >
                                <img
                                    src="/assets/profile-img.png"
                                    alt="Shubhangi Dimri"
                                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full object-cover object-center"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-600 font-mono tracking-widest uppercase">scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="w-px h-8 bg-gradient-to-b from-orange-400 to-transparent"
                />
            </motion.div>
        </section>
    )
}
