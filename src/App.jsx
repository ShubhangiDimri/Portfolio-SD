import { useEffect } from 'react'

// Layout components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'

// Page sections
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

// Hooks
import useLenisScroll from './hooks/useLenisScroll'

export default function App() {
    // Initialize smooth scroll
    useLenisScroll()

    // Set dark mode on mount
    useEffect(() => {
        document.documentElement.classList.add('dark')
    }, [])

    return (
        <div className="min-h-screen bg-[#121212] text-zinc-100 overflow-x-hidden">
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}