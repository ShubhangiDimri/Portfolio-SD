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
                        {/* Badge */}
                        <motion.div
                            variants={leftItem}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-badge text-sm text-zinc-200 font-mono"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] animate-pulse shadow-[0_0_12px_rgba(255,107,0,0.6)]" />
                            Available for opportunities
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

                        {/* Role */}
                        <motion.h2 variants={leftItem} className="text-xl sm:text-2xl lg:text-3xl text-zinc-400 font-light">
                            Full Stack{' '}
                            <span className="text-gradient-cyan font-semibold">AI Engineer</span>
                            {' '}from UPES
                        </motion.h2>

                        {/* Description */}
                        <motion.p variants={leftItem} className="max-w-xl text-zinc-500 leading-relaxed text-lg">
                            Building scalable full-stack applications and AI-driven solutions with a passion for clean code and great user experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={leftItem}
                            className="flex flex-col sm:flex-row items-start gap-4"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                data-cursor="click"
                                className="group px-8 py-3.5 rounded-2xl font-semibold text-white btn-liquid-glass
                                    shadow-lg shadow-[#FF6B00]/20
                                    flex items-center gap-2"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#work"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                data-cursor="click"
                                className="px-8 py-3.5 rounded-2xl font-semibold text-zinc-300 btn-hover
                                    bg-zinc-900/60 backdrop-blur-md border border-zinc-700/40
                                    hover:bg-zinc-800/70 hover:border-zinc-600 hover:text-white
                                    transition-all duration-200"
                            >
                                View My Work
                            </motion.a>
                        </motion.div>

                        {/* Bento Grid Stats */}
                        <motion.div
                            variants={leftItem}
                            className="bento-grid grid-cols-3 pt-8"
                        >
                            {[
                                { value: '3+', label: 'Projects Built', icon: '🚀' },
                                { value: '4+', label: 'Technologies', icon: '⚡' },
                                { value: '8.6', label: 'CGPA at UPES', icon: '🎓' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                    className="bento-item p-5 text-center cursor-default"
                                >
                                    <span className="text-2xl mb-2 block">{stat.icon}</span>
                                    <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
                                    <div className="text-xs text-zinc-500 mt-1.5 font-mono leading-tight">{stat.label}</div>
                                </motion.div>
                            ))}
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
                            {/* Soft blue glow behind image */}
                            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.12),_transparent_60%)] blur-2xl scale-110" />
                            
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
