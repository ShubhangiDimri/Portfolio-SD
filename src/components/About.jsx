export default function About() {
    const tools = [
        { name: 'React', icon: './assets/vscode.png', },
        { name: 'Node.js', icon: './assets/firebase.png', },
        { name: 'MongoDB', icon: './assets/mongodb.png', },
        { name: 'Express', icon: './assets/figma.png', },
        { name: 'Tailwind', icon: './assets/git.png', },
        { name: 'MySQL', icon: './assets/vscode.png', },
        { name: 'HuggingFace', icon: './assets/firebase.png', },
        { name: 'ShadCN/UI', icon: './assets/figma.png', },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'C, C++, Java, JavaScript, React, Node.js',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'B.Tech in Computer Science Engineering - UPES (CGPA: 8.6/10)',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built 3+ full-stack projects',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(255,105,180,0.3)] flex items-center justify-center">
                        <img src="./assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="./assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">I am a Full Stack AI Engineer currently pursuing B.Tech in Computer Science Engineering from UPES, Dehradun. With a strong foundation in programming languages and modern web technologies, I specialize in building scalable applications and implementing AI-driven solutions.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Technologies & Tools</h4>

                    <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex flex-col items-center gap-2 group">
                                <div className="flex items-center justify-center w-14 sm:w-16 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:border-pink-400 dark:hover:border-pink-400 hover:shadow-lg">
                                    <img src={tool.icon} alt={tool.name} className="w-6 sm:w-8" />
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400 font-Ovo group-hover:text-pink-600 dark:group-hover:text-pink-400 transition">{tool.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}