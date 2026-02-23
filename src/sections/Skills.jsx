import { motion } from 'framer-motion'

const services = [
    {
        icon: '💻',
        name: 'Full Stack Development',
        description: 'End-to-end web applications using React, Node.js, Express, and modern databases like MongoDB & MySQL.',
        tags: ['React', 'Node.js', 'REST APIs'],
        gradient: 'from-blue-600 to-blue-400',
        glow: 'group-hover:shadow-glow-blue',
    },
    {
        icon: '🤖',
        name: 'AI Integration',
        description: 'Embedding AI models, NLP pipelines, and HuggingFace integrations into real-world web applications.',
        tags: ['Python', 'HuggingFace', 'ML APIs'],
        gradient: 'from-blue-500 to-blue-400',
        glow: 'group-hover:shadow-glow-blue-light',
    },
    {
        icon: '🎨',
        name: 'UI / UX Design',
        description: 'Crafting clean, responsive and accessible interfaces using Tailwind CSS and ShadCN/UI component systems.',
        tags: ['Tailwind', 'ShadCN', 'Figma'],
        gradient: 'from-blue-500 to-blue-700',
        glow: 'group-hover:shadow-glow-blue',
    },
    {
        icon: '🗄️',
        name: 'Database Architecture',
        description: 'Designing efficient schemas, optimized queries, and scalable data models for MongoDB and MySQL.',
        tags: ['MongoDB', 'MySQL', 'Schema Design'],
        gradient: 'from-blue-400 to-blue-600',
        glow: 'group-hover:shadow-glow-blue',
    },
]

export default function Skills() {
    return (
        <section id="services" className="relative w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] py-16 sm:py-20 md:py-24 scroll-mt-20">
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />

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
                    <h2 className="text-4xl sm:text-5xl font-bold text-white">My Services</h2>
                    <p className="mt-4 text-gray-500 max-w-xl mx-auto">
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
                            className={`group bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-200 ${service.glow} cursor-default`}
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

                            <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

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
                                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-gray-400 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:text-blue-300 transition-all cursor-default"
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
