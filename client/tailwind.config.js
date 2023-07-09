/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                darkGray: '#444444',
                lightGray: '#555555',
                textGray: '#e5e5e5;',
                mainLightBlue: '#3ab0e4',
                mainGreen: '#1abc9c',
            },
            boxShadow: {
                '3xl': '10px 9px 5px -3px rgba(0,0,0,0.1);',
            },
        },
    },
    plugins: [],
};

