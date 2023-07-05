/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                bgGray: '#444444',
                textGray: '#555555',
            },
        },
    },
    plugins: [],
};
