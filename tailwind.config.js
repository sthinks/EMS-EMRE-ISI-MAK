/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            screens: {
                "2lg": "1150px",
                "3xl": "1600px",
            },
            boxShadow: {
                ems: "10px 10px 10px rgba(0, 0, 0, 0.06)",
            },
            borderRadius: {
                "4xl": "50px",
                "form-error": "30px 30px 30px 0px",
            },
            textColor: {
                brand: "#004C96",
            },
        },
        fontFamily: {
            "myriad-pro": ["Myriad Pro", "sans-serif"],
        },
    },

    plugins: [],
};
