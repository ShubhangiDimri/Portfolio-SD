import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const services = [
    {
        icon: '💻',
        name: 'Full Stack Development',
        description: 'End-to-end web applications using React, Node.js, Express, and modern databases like MongoDB & MySQL.',
        tags: ['React', 'Node.js', 'REST APIs'],
        gradient: 'from-orange-600 to-orange-400',
        details: {
            highlights: [
                'Built career portal with authentication, role-based access, and job matching',
                'Developed real-time news aggregation platform with API integrations',
                'Created responsive SPAs with modern component architecture',
            ],
            tools: ['React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Tailwind CSS', 'ShadCN/UI'],
            projects: ['Career Services Portal', 'News-Bite', 'Flight Management System'],
        },
    },
    {
        icon: '🤖',
        name: 'AI Integration',
        description: 'Embedding AI models, NLP pipelines, and HuggingFace integrations into real-world web applications.',
        tags: ['Python', 'HuggingFace', 'ML APIs'],
        gradient: 'from-orange-500 to-orange-400',
        details: {
            highlights: [
                'Built marine data analysis platform with AI-powered insights',
                'Developed fraud detection system using ML algorithms',
                'Created automated knowledge graph pipeline from unstructured data',
            ],
            tools: ['Python', 'HuggingFace', 'Scikit-learn', 'NLP', 'Graph Databases', 'FastAPI'],
            projects: ['Marine Insights', 'Digital Transaction Risk Analysis', 'Knowledge Graph Pipeline'],
        },
    },
    {
        icon: '🎨',
        name: 'UI / UX Design',
        description: 'Crafting clean, responsive and accessible interfaces using Tailwind CSS and ShadCN/UI component systems.',
        tags: ['Tailwind', 'ShadCN', 'Framer Motion'],
        gradient: 'from-orange-500 to-orange-700',
        details: {
            highlights: [
                'Designed glassmorphism-based portfolio with micro-animations',
                'Built responsive layouts adapting seamlessly across devices',
                'Implemented smooth scroll, custom cursors, and hover interactions',
            ],
            tools: ['Tailwind CSS', 'Framer Motion', 'ShadCN/UI', 'CSS Animations', 'Figma'],
            projects: ['This Portfolio', 'Women Community Hall', 'News-Bite'],
        },
    },
    {
        icon: '🗄️',
        name: 'Database Architecture',
        description: 'Designing efficient schemas, optimized queries, and scalable data models for MongoDB and MySQL.',
        tags: ['MongoDB', 'MySQL', 'Schema Design'],
        gradient: 'from-orange-400 to-orange-600',
        details: {
            highlights: [
                'Designed relational schemas for flight booking and queue management',
                'Built NoSQL document models for flexible content management',
                'Implemented data pipelines for AI feature extraction',
            ],
            tools: ['MongoDB', 'MySQL', 'Mongoose', 'Sequelize', 'Redis'],
            projects: ['Flight Management System', 'Intelligent Queue Management', 'Career Services Portal'],
        },
    },
]

function ServiceCard({ service, index, isExpanded, onToggle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1, type: 'spring', stiffness: 280, damping: 20 }}
            className="group"
        >
            <motion.div
                onClick={onToggle}
                whileHover={{ y: -4 }}
                className={`relative bg-zinc-800/50 backdrop-blur-md rounded-2xl p-6 border border-zinc-700/50 
                    transition-all duration-300 cursor-pointer
                    hover:border-[#FF6B00]/40 hover:shadow-[0_0_25px_rgba(255,107,0,0.15)]
                    ${isExpanded ? 'border-[#FF6B00]/50 shadow-[0_0_30px_rgba(255,107,0,0.2)]' : ''}`}
            >
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl shadow-lg shrink-0`}
                        >
                            {service.icon}
                        </motion.div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-zinc-100 mb-1">{service.name}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    </div>

                    {/* Expand Toggle */}
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-lg bg-zinc-700/50 flex items-center justify-center shrink-0 mt-1"
                    >
                        <svg className="w-4 h-4 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </div>

                {/* Tags Row */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {service.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-400 bg-zinc-800/60 border border-zinc-700/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Expandable Drawer */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="mt-2 p-5 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-700/30">
                            {/* What I've Done */}
                            <div className="mb-5">
                                <h4 className="text-xs font-mono text-[#FF6B00] uppercase tracking-widest mb-3">
                                    What I&apos;ve Built
                                </h4>
                                <ul className="space-y-2">
                                    {service.details.highlights.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.08 }}
                                            className="text-sm text-zinc-400 flex items-start gap-2.5 leading-relaxed"
                                        >
                                            <span className="text-[#FF6B00] mt-1 shrink-0">▹</span>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tools & Related Projects */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-700/30">
                                <div>
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2.5">
                                        Tools & Tech
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {service.details.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="px-2 py-1 rounded-md text-xs text-zinc-300 bg-zinc-800/70 border border-zinc-700/40"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2.5">
                                        Related Projects
                                    </h4>
                                    <ul className="space-y-1.5">
                                        {service.details.projects.map((proj) => (
                                            <li key={proj} className="text-sm text-zinc-400 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shrink-0" />
                                                {proj}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function Skills() {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <section id="services" className="relative w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] py-16 sm:py-20 md:py-24 scroll-mt-20">
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-zinc-600/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="section-heading">What I Offer</p>
                    <div className="glow-line" />
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100">My Services</h2>
                    <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
                        Click any service to explore what I&apos;ve built and the tools I work with.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {services.map((service, i) => (
                        <ServiceCard
                            key={service.name}
                            service={service}
                            index={i}
                            isExpanded={expandedIndex === i}
                            onToggle={() => toggleExpand(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
