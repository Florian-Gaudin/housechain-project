/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            title: ["Montserrat-Alt1", "sans-serif"],
            body: ["Poppins", "sans-serif"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            purple: "#9969C0",
            red: "#FC1A4A",
            yellow1: "rgb(169,121,1)",
            yellow2: "rgb(239,181,48)",
            yellow3: "rgb(252,220,140)",
            bg: "rgb(14,12,49)",
        },
        extend: {
            gradientColorStops: (theme) => ({
                "from-purple": theme("colors.purple"),
                "to-red": theme("colors.red"),
            }),
        },
    },
    plugins: [],
};
