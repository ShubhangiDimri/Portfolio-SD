/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            animation: {
                spin_slow: 'spin 6s linear infinite',
                float: 'float 6s ease-in-out infinite',
                pulse_slow: 'pulse 4s ease-in-out infinite',
                gradient: 'gradient 8s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            colors: {
                dark: {
                    900: '#050816',
                    800: '#080d1c',
                    700: '#0d1425',
                    600: '#111827',
                },
                accent: {
                    teal: '#2dd4bf',
                    emerald: '#34d399',
                    cyan: '#06b6d4',
                    mint: '#6ee7b7',
                },
                glass: 'rgba(255,255,255,0.04)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #050816 0%, #080d1c 50%, #050e1c 100%)',
            },
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.5)',
                'glow-blue': '0 0 30px rgba(59, 130, 246, 0.4)',
                'glow-blue-light': '0 0 30px rgba(96, 165, 250, 0.35)',
                'glow-blue-soft': '0 0 30px rgba(147, 197, 253, 0.3)',
                'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}