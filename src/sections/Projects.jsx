import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const projects = [
    {
        name: 'Marine Insights',
        category: 'Full-Stack AI App',
        technologies: ['Python', 'HuggingFace', 'React'],
        description: 'AI-powered marine data analysis platform with real-time insights and predictive models for ocean conservation.',
        github: 'https://github.com/ShubhangiDimri',
        gradient: 'from-blue-600/20 to-blue-400/20',
        border: 'hover:border-blue-500/30',
        number: '01',
    },
    {
        name: 'Career Services Portal',
        category: 'MERN Stack',
        technologies: ['Node.js', 'MongoDB', 'React', 'Express'],
        description: 'Full-stack internship portal connecting students with career opportunities, featuring job matching and application tracking.',
        github: 'https://github.com/ShubhangiDimri',
        gradient: 'from-blue-500/20 to-blue-400/20',
        border: 'hover:border-blue-500/30',
        number: '02',
    },
    {
        name: 'Flight Management System',
        category: 'Full-Stack Application',
        technologies: ['Java', 'MySQL', 'React'],
        description: 'Comprehensive flight booking and management system with real-time availability, seat selection, and booking management.',
        github: 'https://github.com/ShubhangiDimri',
        gradient: 'from-blue-400/15 to-blue-600/20',
        border: 'hover:border-blue-500/30',
        number: '03',
    },
    {
        name: 'Women Community Hall',
        category: 'Web Application',
        technologies: ['React', 'Tailwind', 'Node.js'],
        description: 'Community platform for women empowerment featuring event management, networking, and resource sharing.',
        github: 'https://github.com/ShubhangiDimri',
        gradient: 'from-blue-500/15 to-blue-400/20',
        border: 'hover:border-blue-500/30',
        number: '04',
    },
    {
        name: 'News-Bite',
        category: 'Full-Stack Web App',
        technologies: ['Node.js', 'React', 'API'],
        description: 'Real-time news aggregation platform with AI-powered summarization and personalized content recommendations.',
        github: 'https://github.com/ShubhangiDimri',
        gradient: 'from-blue-600/20 to-blue-500/20',
        border: 'hover:border-blue-500/30',
        number: '05',
    },
    {
        name: 'Digital Transaction Risk Analysis',
        category: 'AI/ML Application',
        technologies: ['Python', 'Machine Learning', 'React'],
        description: 'Intelligent fraud detection system using machine learning algorithms to analyze and flag suspicious digital transactions.',
        github: 'https://github.com/ShubhangiDimri',
        gradient: 'from-blue-500/20 to-blue-600/15',
        border: 'hover:border-blue-500/30',
        number: '06',
    },
    {
        name: 'Intelligent Queue Management',
        category: 'Smart System',
        technologies: ['React', 'Node.js', 'MongoDB'],
        description: 'Smart queue management system with real-time tracking, predictive wait times, and automated notifications.',
        github: 'https://github.com/ShubhangiDimri',
        gradient: 'from-blue-400/20 to-blue-500/15',
        border: 'hover:border-blue-500/30',
        number: '07',
    },
    {
        name: 'Automated Knowledge Graph Pipeline',
        category: 'AI/ML System',
        technologies: ['Python', 'NLP', 'Graph Database'],
        description: 'Automated pipeline for building knowledge graphs from unstructured data using NLP and entity extraction techniques.',
        github: 'https://github.com/ShubhangiDimri',
        gradient: 'from-blue-500/20 to-blue-400/20',
        border: 'hover:border-blue-500/30',
        number: '08',
    },
]

export default function Projects() {
    return (
        <section id="work" className="relative w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] py-16 sm:py-20 md:py-24 scroll-mt-20">
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="section-heading">My Portfolio</p>
                    <div className="glow-line" />
                    <h2 className="text-4xl sm:text-5xl font-bold text-white">Featured Work</h2>
                    <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                        A collection of projects showcasing my expertise in full-stack development and AI engineering.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                </div>

                {/* More Projects CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/ShubhangiDimri"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-blue-400/40 hover:shadow-glow-blue transition-all duration-200 text-sm font-medium btn-hover btn-gradient-border"
                    >
                        View all on GitHub
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
