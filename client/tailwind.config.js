/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                mainDarkGray: '#444444',
                mainLightGray: '#555555',
                mainTextGray: '#e5e5e5;',
                mainLightBlue: '#3ab0e4',
                mainGreen: '#1abc9c',
                mainDarkBlue: '#4367CB',
            },
            boxShadow: {
                '3xl': '10px 9px 5px -3px rgba(0,0,0,0.1);',
            },
        },
    },
    plugins: [],
};

