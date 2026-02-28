import { motion } from 'framer-motion'

const services = [
    {
        icon: '💻',
        name: 'Full Stack Development',
        description: 'End-to-end web applications using React, Node.js, Express, and modern databases like MongoDB & MySQL.',
        tags: ['React', 'Node.js', 'REST APIs'],
        gradient: 'from-orange-600 to-orange-400',
        glow: 'group-hover:shadow-glow-orange',
    },
    {
        icon: '🤖',
        name: 'AI Integration',
        description: 'Embedding AI models, NLP pipelines, and HuggingFace integrations into real-world web applications.',
        tags: ['Python', 'HuggingFace', 'ML APIs'],
        gradient: 'from-orange-500 to-orange-400',
        glow: 'group-hover:shadow-glow-orange-light',
    },
    {
        icon: '🎨',
        name: 'UI / UX Design',
        description: 'Crafting clean, responsive and accessible interfaces using Tailwind CSS and ShadCN/UI component systems.',
        tags: ['Tailwind', 'ShadCN', 'Figma'],
        gradient: 'from-orange-500 to-orange-700',
        glow: 'group-hover:shadow-glow-orange',
    },
    {
        icon: '🗄️',
        name: 'Database Architecture',
        description: 'Designing efficient schemas, optimized queries, and scalable data models for MongoDB and MySQL.',
        tags: ['MongoDB', 'MySQL', 'Schema Design'],
        gradient: 'from-orange-400 to-orange-600',
        glow: 'group-hover:shadow-glow-orange',
    },
]

export default function Skills() {
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
                        Areas where I can design, build, and deliver quality solutions.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1, type: 'spring', stiffness: 280, damping: 20 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className={`group bg-zinc-800/50 backdrop-blur-md rounded-2xl p-7 border border-zinc-700/50 hover:bg-zinc-800/70 hover:border-zinc-600/60 transition-all duration-200 ${service.glow} cursor-default`}
                        >
                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl mb-5 shadow-lg`}
                            >
                                {service.icon}
                            </motion.div>

                            <h3 className="text-lg font-bold text-zinc-100 mb-2">{service.name}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-5">{service.description}</p>

                            {/* Tags */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                                className="flex flex-wrap gap-2"
                            >
                                {service.tags.map((tag, ti) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.1 + 0.35 + ti * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-400 bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 hover:bg-zinc-700/60 hover:text-orange-300 transition-all cursor-default"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
