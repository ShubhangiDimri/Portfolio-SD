export default function Work() {
    const work = [
        {
            name: 'News Summarizer',
            icon: './assets/work-1.png',
            description: 'Full-Stack Web App',
            technologies: 'Node.js, EJS, React',
            details: 'Built a full-stack news platform with real-time summarization and responsive EJS interface',
            link: 'https://github.com',
        },
        {
            name: 'Notes Taking Web App',
            icon: './assets/work-2.png',
            description: 'MERN Stack Application',
            technologies: 'Node.js, Express, Tailwind, MongoDB',
            details: 'Developed a full-stack notes application with secure CRUD operations',
            link: 'https://github.com',
        },
        {
            name: 'Product Review System',
            icon: './assets/work-3.png',
            description: 'React Web Application',
            technologies: 'React, Vue, CSS',
            details: 'Created a responsive product review platform with interactive rating and like-based sorting',
            link: 'https://github.com',
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full-stack development and AI engineering.</p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((project) => (
                    <div key={project.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${project.icon})` }}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex flex-col gap-2 duration-500 group-hover:bottom-7">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h2 className="font-semibold text-base">{project.name}</h2>
                                    <p className="text-xs text-gray-700">{project.description}</p>
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="border rounded-full border-black w-9 h-9 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-pink-300 transition flex-shrink-0">
                                    <img src="./assets/send-icon.png" alt="" className="w-5" />
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-1">
                                {project.technologies.split(', ').map((tech, idx) => (
                                    <span key={idx} className="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>

        </div>
    )
}