import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
}

export default function About() {
    const tools = [
        { name: 'React', emoji: '⚛️' },
        { name: 'Node.js', emoji: '🟢' },
        { name: 'MongoDB', emoji: '🍃' },
        { name: 'Express', emoji: '🚂' },
        { name: 'Tailwind', emoji: '🎨' },
        { name: 'MySQL', emoji: '🗄️' },
        { name: 'HuggingFace', emoji: '🤗' },
        { name: 'ShadCN/UI', emoji: '🧩' },
        { name: 'Python', emoji: '🐍' },
        { name: 'Git', emoji: '🔀' },
    ]

    const stats = [
        {
            icon: '💻',
            name: 'Languages',
            description: 'C, C++, Java, JavaScript, Python',
        },
        {
            icon: '🎓',
            name: 'Education',
            description: 'B.Tech CSE – UPES (CGPA: 8.6/10)',
        },
        {
            icon: '🚀',
            name: 'Projects',
            description: '3+ full-stack & AI projects built',
        },
    ]

    return (
        <section id="about" className="relative w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] py-16 sm:py-20 md:py-24 scroll-mt-20">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="section-heading">Introduction</p>
                    <div className="glow-line" />
                    <h2 className="text-4xl sm:text-5xl font-bold text-white">About Me</h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
                    {/* Left – Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-2/5 flex justify-center"
                    >
                        <div className="relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.15),_transparent_40%)] -z-10" />
                            <img
                                src="/assets/shubh.jpeg"
                                alt="Shubhangi"
                                className="relative w-64 sm:w-72 rounded-xl object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right – Content */}
                    <div className="flex-1 space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-gray-400 leading-relaxed text-lg"
                        >
                            I&apos;m a Full Stack AI Engineer pursuing B.Tech in Computer Science at UPES, Dehradun. With a strong foundation in modern web technologies, I specialize in building scalable applications and implementing AI-driven solutions.
                        </motion.p>

                        {/* Stat Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {stats.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    custom={i}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-400/40 hover:shadow-glow-blue transition-all duration-200 cursor-default"
                                >
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tools */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h4 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-4">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tool, i) => (
                                    <motion.span
                                        key={tool.name}
                                        custom={i}
                                        variants={fadeInUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-xl text-sm text-gray-300 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 hover:text-blue-300 transition-all duration-200 cursor-default flex items-center gap-1.5"
                                    >
                                        <span>{tool.emoji}</span>
                                        {tool.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
