/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                darkGray: '#444444',
                lightGray: '#555555',
                textGray: '#e5e5e5;',
                mainLightBlue:'#3ab0e4'
            },
        },
    },
    plugins: [],
};
