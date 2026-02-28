import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectCard({ project, index }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 0.4, 
                delay: index * 0.12, 
                type: 'spring', 
                stiffness: 280, 
                damping: 20 
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group"
        >
            {/* Animated border glow */}
            <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 rounded-2xl opacity-0 blur-sm"
                animate={{
                    opacity: isHovered ? 0.6 : 0,
                }}
                transition={{ duration: 0.3 }}
            />

            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative bg-zinc-800/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-zinc-700/50 hover:border-zinc-600/60 transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
                {/* Background gradient */}
                <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Number watermark */}
                <div className="relative z-10">
                    <motion.span
                        className="text-5xl font-bold text-white/5 font-mono select-none"
                        animate={{
                            opacity: isHovered ? 0.1 : 0.03,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {project.number}
                    </motion.span>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col mt-2">
                    <motion.p 
                        className="text-xs font-mono uppercase tracking-widest mb-1"
                        animate={{
                            color: isHovered ? '#fb923c' : '#F97316',
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {project.category}
                    </motion.p>
                    
                    <motion.h3 
                        className="text-lg font-bold mb-3"
                        animate={{
                            background: isHovered 
                                ? 'linear-gradient(to right, #fb923c, #fdba74, #fb923c)'
                                : 'transparent',
                            backgroundClip: isHovered ? 'text' : 'border-box',
                            WebkitBackgroundClip: isHovered ? 'text' : 'border-box',
                            WebkitTextFillColor: isHovered ? 'transparent' : '#e4e4e7',
                            color: isHovered ? 'transparent' : '#e4e4e7',
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {project.name}
                    </motion.h3>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">
                        {project.description}
                    </p>

                    {/* GitHub Link */}
                    <div className="flex items-center gap-4 pt-4 border-t border-zinc-700/50">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-orange-300 transition-colors group/link"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Code
                            <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Hover Overlay with Tech Stack */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#0f0f12]/95 via-[#18181b]/80 to-transparent flex items-end p-4 sm:p-6 pointer-events-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <div className="w-full">
                        <p className="text-xs font-mono text-orange-400 uppercase tracking-widest mb-3">
                            Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, ti) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{
                                        opacity: isHovered ? 1 : 0,
                                        scale: isHovered ? 1 : 0.8,
                                        y: isHovered ? 0 : 10,
                                    }}
                                    transition={{ 
                                        duration: 0.3,
                                        delay: isHovered ? ti * 0.05 : 0,
                                    }}
                                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-zinc-800/80 backdrop-blur-md text-zinc-100 border border-orange-400/30 shadow-lg"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
