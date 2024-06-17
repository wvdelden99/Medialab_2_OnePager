/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "neutral-100": "#FFF8F0",
                "neutral-900": "#242424",
                "blue": "#60A6C3",
                "blue-light": "#D5F8FF",
                "pink": "#FEBDB9",
                "red": "#FC6663",
                "yellow": "#FFDFB0",
            }
        },
    },
    plugins: [],
}
