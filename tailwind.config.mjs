import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                serif: ["Montserrat Variable", ...defaultTheme.fontFamily.serif],
            },
            boxShadow: {
                card: '0 1px 2px rgba(59, 35, 80, 0.06), 0 12px 32px rgba(128, 70, 173, 0.08)',
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            ink: '#3b2350',
            corporate: {
                light: '#faf2ff',
                main: '#8046ad',
                dark: '#5e2f85',
                arch: '#9560c0',
                tint: '#f1e3fb',
                line: '#c9a6e8',
                'line-soft': '#dcc3f0',
            }
        }
    },
    plugins: [],
}
