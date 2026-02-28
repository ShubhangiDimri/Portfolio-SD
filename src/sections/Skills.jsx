import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const services = [
    {
        icon: '💻',
        name: 'Full Stack Development',
        description: 'End-to-end web applications using React, Node.js, Express, and modern databases like MongoDB & MySQL.',
        tags: ['React', 'Node.js', 'REST APIs'],
        gradient: 'from-orange-600 to-orange-400',
        // Detailed data for drawer
        details: {
            expertise: [
                { skill: 'React/Next.js', level: 95, projects: 12 },
                { skill: 'Node.js/Express', level: 90, projects: 10 },
                { skill: 'REST API Design', level: 92, projects: 14 },
                { skill: 'TypeScript', level: 85, projects: 8 },
            ],
            deliverables: ['SPA/PWA Development', 'API Architecture', 'Authentication Systems', 'Real-time Features'],
            timeline: '2-8 weeks',
        },
    },
    {
        icon: '🤖',
        name: 'AI Integration',
        description: 'Embedding AI models, NLP pipelines, and HuggingFace integrations into real-world web applications.',
        tags: ['Python', 'HuggingFace', 'ML APIs'],
        gradient: 'from-orange-500 to-orange-400',
        details: {
            expertise: [
                { skill: 'HuggingFace', level: 88, projects: 6 },
                { skill: 'Python/FastAPI', level: 90, projects: 8 },
                { skill: 'NLP Pipelines', level: 85, projects: 5 },
                { skill: 'Model Fine-tuning', level: 78, projects: 3 },
            ],
            deliverables: ['Chatbot Integration', 'Sentiment Analysis', 'Text Generation', 'Knowledge Graphs'],
            timeline: '3-10 weeks',
        },
    },
    {
        icon: '🎨',
        name: 'UI / UX Design',
        description: 'Crafting clean, responsive and accessible interfaces using Tailwind CSS and ShadCN/UI component systems.',
        tags: ['Tailwind', 'ShadCN', 'Figma'],
        gradient: 'from-orange-500 to-orange-700',
        details: {
            expertise: [
                { skill: 'Tailwind CSS', level: 95, projects: 15 },
                { skill: 'Framer Motion', level: 88, projects: 10 },
                { skill: 'Figma/Design', level: 82, projects: 8 },
                { skill: 'Accessibility', level: 85, projects: 12 },
            ],
            deliverables: ['Design Systems', 'Component Libraries', 'Responsive Layouts', 'Micro-interactions'],
            timeline: '1-4 weeks',
        },
    },
    {
        icon: '🗄️',
        name: 'Database Architecture',
        description: 'Designing efficient schemas, optimized queries, and scalable data models for MongoDB and MySQL.',
        tags: ['MongoDB', 'MySQL', 'Schema Design'],
        gradient: 'from-orange-400 to-orange-600',
        details: {
            expertise: [
                { skill: 'MongoDB', level: 90, projects: 10 },
                { skill: 'MySQL/PostgreSQL', level: 88, projects: 8 },
                { skill: 'Query Optimization', level: 85, projects: 12 },
                { skill: 'Data Modeling', level: 87, projects: 9 },
            ],
            deliverables: ['Schema Design', 'Migration Scripts', 'Performance Tuning', 'Backup Strategies'],
            timeline: '1-3 weeks',
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
                        className="w-8 h-8 rounded-lg bg-zinc-700/50 flex items-center justify-center shrink-0"
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
                            {/* Skills Table */}
                            <div className="mb-5">
                                <h4 className="text-xs font-mono text-[#FF6B00] uppercase tracking-widest mb-3">
                                    Expertise Matrix
                                </h4>
                                <div className="space-y-2.5">
                                    {service.details.expertise.map((item) => (
                                        <div key={item.skill} className="flex items-center gap-3">
                                            <span className="text-sm text-zinc-300 w-32 shrink-0 font-medium">
                                                {item.skill}
                                            </span>
                                            <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.level}%` }}
                                                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                                                    className="h-full bg-gradient-to-r from-[#FF6B00] to-[#FF8C32] rounded-full"
                                                />
                                            </div>
                                            <span className="text-xs font-mono text-zinc-500 w-12 text-right">
                                                {item.level}%
                                            </span>
                                            <span className="text-xs text-zinc-600 w-20 text-right">
                                                {item.projects} projects
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Deliverables & Timeline */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-700/30">
                                <div>
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                                        Deliverables
                                    </h4>
                                    <ul className="space-y-1">
                                        {service.details.deliverables.map((item) => (
                                            <li key={item} className="text-sm text-zinc-400 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                                        Typical Timeline
                                    </h4>
                                    <p className="text-2xl font-bold text-zinc-100">{service.details.timeline}</p>
                                    <p className="text-xs text-zinc-500 mt-1">Based on scope complexity</p>
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
                        Click any service to explore detailed expertise, deliverables, and timelines.
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
