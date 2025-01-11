/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            corporate: {
                light: '#faf2ff',
                main: '#8046ad',
            }
        }
    },
    plugins: [],
}
