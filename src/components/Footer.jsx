import { motion } from 'framer-motion'

export default function Footer() {
    const socials = [
        { label: 'GitHub', href: 'https://github.com/ShubhangiDimri' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/shubhangidimri' },
        { label: 'LeetCode', href: 'https://leetcode.com/u/shubhangidimri' },
    ]

    return (
        <footer className="relative border-t border-zinc-800/60 mt-12">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <motion.a
                        href="#top"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xl font-bold text-gradient font-Outfit tracking-wide"
                    >
                    </motion.a>

                    {/* Links */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-6"
                    >
                        {socials.map((s) => (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors duration-200 font-mono"
                                >
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </motion.ul>

                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs text-zinc-600 font-mono"
                    >
                        &copy; {new Date().getFullYear()} Shubhangi Dimri
                    </motion.p>
                </div>
            </div>
        </footer >
    )
}