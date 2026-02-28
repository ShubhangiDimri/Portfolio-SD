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
                    950: '#0a0a0b',
                    900: '#111113',
                    800: '#18181b',
                    700: '#1f1f23',
                    600: '#27272b',
                    500: '#3f3f46',
                },
                slate: {
                    850: '#161921',
                    750: '#1e222d',
                },
                accent: {
                    orange: '#F97316',
                    'orange-light': '#fb923c',
                    'orange-soft': '#fdba74',
                    'orange-deep': '#ea580c',
                },
                muted: {
                    DEFAULT: '#71717a',
                    light: '#a1a1aa',
                    dark: '#52525b',
                },
                glass: 'rgba(255,255,255,0.04)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #121212 0%, #181818 50%, #141414 100%)',
            },
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.5)',
                'glow-orange': '0 0 30px rgba(249, 115, 22, 0.35)',
                'glow-orange-light': '0 0 30px rgba(251, 146, 60, 0.3)',
                'glow-orange-soft': '0 0 30px rgba(253, 186, 116, 0.25)',
                'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
                'card-grey': '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(113, 113, 122, 0.1)',
                'inner-grey': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}