import { motion } from 'framer-motion'

export default function Experience() {
    const experiences = [
        {
            role: 'Web Developer Intern',
            company: 'Paryavaran Evam Jan Kalyan Samiti (PEJKS)',
            duration: 'June 2024 – July 2024',
            location: 'Dehradun, Uttarakhand',
            type: 'Internship',
            technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'JavaScript'],
            responsibilities: [
                'Collaborated within a team to organize healthcare and awareness campaigns',
                'Engaged 500+ individuals across outreach events, improving communication and coordination',
                'Developed web solutions to support campaign management and participant tracking',
            ],
        },
    ]

    return (
        <section id="experience" className="relative w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] py-16 sm:py-20 md:py-24 scroll-mt-20">
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-zinc-600/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="section-heading">My Journey</p>
                    <div className="glow-line" />
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100">Work Experience</h2>
                    <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
                        Professional experiences that shaped my skills in full-stack development and AI engineering.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-400 via-orange-500 to-transparent" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative pl-20 pb-12"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-glow-orange ring-4 ring-[#0f0f12]" />

                            {/* Card */}
                            <motion.div
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="bg-zinc-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-700/50 hover:bg-zinc-800/70 hover:border-orange-400/40 hover:shadow-glow-orange transition-all duration-200"
                            >
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5">
                                    <div>
                                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono bg-orange-500/15 text-orange-300 border border-orange-500/20 mb-3">
                                            {exp.type}
                                        </span>
                                        <h3 className="text-xl font-bold text-zinc-100 mb-1">{exp.role}</h3>
                                        <p className="text-orange-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:text-right">
                                        <p className="text-zinc-400 text-sm font-mono">{exp.duration}</p>
                                        <p className="text-zinc-600 text-sm">{exp.location}</p>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="space-y-2.5 mb-5"
                                >
                                    {exp.responsibilities.map((r, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                                            className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
                                        >
                                            <span className="text-orange-400 mt-0.5 flex-shrink-0">▹</span>
                                            {r}
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, ti) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: ti * 0.05 }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/60 backdrop-blur-sm text-zinc-400 border border-zinc-700/50 hover:bg-zinc-700/60 hover:border-orange-400/40 hover:text-orange-300 transition-all cursor-default"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
