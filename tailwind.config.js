const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Segoe UI", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["disabled"],
            cursor: ["disabled"],
            opacity: ["disabled"],
            textColor: ["disabled"],
        },
    },
    plugins: [],
}
