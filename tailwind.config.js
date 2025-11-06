import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        'index.html'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                Jost: ['Jost','sans-serif'],
                bg : 'red'
            },
        },
    },
    plugins: [],
};