import { motion } from 'framer-motion'

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06 },
    },
}

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
}

export default function About() {
    const skills = [
        'Java', 'Python', 'C++', 'JavaScript', 'SQL',
        'React', 'Node.js', 'Express', 'FastAPI', 'Tailwind CSS',
        'AWS Bedrock', 'Agentic AI', 'RAG', 'LangChain', 'HuggingFace',
        'MongoDB', 'MySQL', 'Neo4j', 'Redis', 'Vector DB',
        'Docker', 'Git', 'Postman', 'REST APIs', 'HTML/CSS',
    ]


    return (
        <section id="about" className="relative w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] py-16 sm:py-20 md:py-24 scroll-mt-20">
            <div className="absolute top-0 right-0 w-72 h-72 bg-zinc-600/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="section-heading">Introduction</p>
                    <div className="glow-line" />
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100">About Me</h2>
                </motion.div>

                {/* Main Content — Two Column */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">

                    {/* Left — Photo + Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                        className="w-full lg:w-[38%] flex flex-col items-center gap-6"
                    >
                        {/* Photo */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl border-2 border-zinc-700/60 
                                hover:border-[#FF6B00]/40 transition-all duration-500
                                shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                <img
                                    src="/assets/shubh.jpeg"
                                    alt="Shubhangi Dimri"
                                    className="w-56 sm:w-64 aspect-[3/4] object-cover object-top"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#121212] to-transparent" />
                            </div>
                            {/* Accent dot */}
                            <motion.div
                                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#FF6B00]/25 border border-[#FF6B00]/40"
                            />
                        </motion.div>

                        {/* Education Card — below photo */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -3, borderColor: 'rgba(255,107,0,0.4)' }}
                            className="flex items-center gap-3 px-5 py-4 rounded-xl bg-zinc-800/40 border border-zinc-700/40
                                transition-all duration-300 w-full max-w-[280px]"
                        >
                            <span className="text-2xl">🎓</span>
                            <div>
                                <p className="text-sm font-semibold text-zinc-200">B.Tech CSE — UPES</p>
                                <p className="text-xs text-zinc-500">CGPA: 8.17/10 · Dehradun, India</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right — Bio + Skills */}
                    <div className="flex-1 space-y-6">
                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-zinc-400 leading-relaxed text-[17px]">
                                I&apos;m a <span className="text-zinc-200 font-medium">Full Stack AI Engineer</span> pursuing B.Tech in Computer Science at <span className="text-zinc-200 font-medium">UPES, Dehradun</span>. With a strong foundation in modern web technologies, I specialize in building scalable applications and implementing AI-driven solutions.
                            </p>
                        </motion.div>


                        {/* Skills Grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-xs font-mono text-[#FF6B00] uppercase tracking-widest mb-3">
                                Technical Skills
                            </h4>
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2"
                            >
                                {skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={fadeIn}
                                        whileHover={{
                                            y: -3,
                                            scale: 1.05,
                                            borderColor: 'rgba(255, 107, 0, 0.5)',
                                            color: '#FF6B00',
                                        }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                        className="px-3 py-1.5 text-xs font-medium text-zinc-400 
                                            bg-zinc-800/50 rounded-lg border border-zinc-700/40
                                            cursor-default transition-colors duration-200"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
