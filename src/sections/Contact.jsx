import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus('')
        // Simulate submission (replace with real API call)
        setTimeout(() => {
            setLoading(false)
            setStatus("Message sent! I'll get back to you soon.")
            e.target.reset()
        }, 1500)
    }

    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'shubhangidimiri26@gmail.com',
            href: 'mailto:shubhangidimiri26@gmail.com',
        },
        {
            icon: '👨‍💻',
            label: 'GitHub',
            value: 'ShubhangiDimri',
            href: 'https://github.com/ShubhangiDimri',
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'Connect with me',
            href: 'https://linkedin.com',
        },
    ]

    return (
        <section id="contact" className="relative w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] py-16 sm:py-20 md:py-24 scroll-mt-20">
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-zinc-600/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="section-heading">Get in touch</p>
                    <div className="glow-line" />
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100">Contact Me</h2>
                    <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="lg:col-span-2 space-y-3 sm:space-y-4"
                    >
                        {contactInfo.map((info) => (
                            <motion.a
                                key={info.label}
                                href={info.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 6, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                                className="flex items-center gap-4 bg-zinc-800/50 backdrop-blur-md rounded-2xl p-4 border border-zinc-700/50 hover:bg-zinc-700/60 hover:border-orange-400/40 hover:shadow-glow-orange transition-all duration-200 group btn-hover"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-xl flex-shrink-0">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-600 font-mono mb-0.5">{info.label}</p>
                                    <p className="text-zinc-300 text-sm group-hover:text-white transition-colors">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Right: Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-3 bg-zinc-800/50 backdrop-blur-md rounded-2xl p-7 border border-zinc-700/50 space-y-5"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <label className="block text-xs font-mono text-zinc-500 mb-1.5">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-700/50 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-orange-400/60 focus:bg-zinc-800/60 focus:shadow-glow-orange transition-all text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-zinc-500 mb-1.5">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-700/50 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-orange-400/60 focus:bg-zinc-800/60 focus:shadow-glow-orange transition-all text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-zinc-500 mb-1.5">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-700/50 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-orange-400/60 focus:bg-zinc-800/60 focus:shadow-glow-orange transition-all text-sm resize-none"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={loading}
                            className="w-full px-6 py-3.5 rounded-2xl font-semibold text-white btn-hover
                                bg-zinc-800/80 backdrop-blur-md border border-zinc-700/60
                                hover:bg-zinc-700/80 hover:border-orange-400/60 hover:shadow-glow-orange
                                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-zinc-800/80
                                transition-all duration-200"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </motion.button>

                        {status && (
                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-400 text-sm text-center font-mono"
                            >
                                {status}
                            </motion.p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
