export default function Experience() {
    const experiences = [
        {
            role: 'Intern',
            company: 'Paryavaran Evam Jan Kalyan Samiti (PEJKS)',
            duration: 'June 2024 - July 2024',
            location: 'Dehradun, Uttarakhand',
            technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'JavaScript'],
            responsibilities: [
                'Collaborated within a team to organize healthcare and awareness campaigns',
                'Engaged 500+ individuals across outreach events, improving communication and coordination skills',
                'Developed web solutions to support campaign management and participant tracking'
            ]
        }
    ];

    return (
        <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Journey</h4>
            <h2 className="text-center text-5xl font-Ovo">Work Experience</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Professional experiences that have shaped my skills and expertise in full-stack development and AI engineering.
            </p>

            <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 dark:border-white/30 rounded-xl p-8 mb-6 hover:shadow-lg hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50 hover:border-pink-300 dark:hover:border-pink-400"
                    >
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">
                                    {exp.role}
                                </h3>
                                <p className="text-lg text-pink-600 dark:text-pink-400 font-medium mb-2">
                                    {exp.company}
                                </p>
                            </div>
                            <div className="text-left md:text-right">
                                <p className="text-sm text-gray-600 dark:text-gray-300 font-Ovo">
                                    {exp.duration}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-Ovo">
                                    {exp.location}
                                </p>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-Ovo">
                                Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium border border-pink-200 dark:border-pink-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 font-Ovo">
                                Key Responsibilities:
                            </h4>
                            <ul className="space-y-2">
                                {exp.responsibilities.map((responsibility, respIndex) => (
                                    <li
                                        key={respIndex}
                                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300 font-Ovo"
                                    >
                                        <span className="text-pink-500 mt-1 flex-shrink-0">▹</span>
                                        <span className="text-sm leading-relaxed">{responsibility}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
