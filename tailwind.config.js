/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                grayBlue: "hsl(var(--grayish-blue) / 100)",
                softRed: "hsl(var(--soft-red) / 100)",
                darkBlue: "hsl(var(--dark-blue) / 100)",
                veryDarkBlue: "hsl(var(--very-very-dark-blue) / 100)",
                mostlyBlack: "hsl(var(--mostly-black-blue) / 100)",
            },
        },
    },
    plugins: [],
};
