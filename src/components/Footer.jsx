export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent font-Ovo mx-auto mb-2">
                        Shubhangi Dimiri
                    </h2>
                </a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:shubhangidimiri26@gmail.com">shubhangidimiri26@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} Shubhangi Dimiri • All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
                </ul>
            </div>
        </div>
    )
}