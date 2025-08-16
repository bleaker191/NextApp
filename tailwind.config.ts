const withMT = require("@material-tailwind/react/withMT");

module.exports = withMT({
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    dark: 'class',
    theme: {
        extend: {
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
            },
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                bgPrimary: 'var(--color-bg-primary)',
                bgSecondary: 'var(--color-bg-secondary)',
                tBase: 'var(--color-text-base)',
                bgHover: 'var(--color-bg-hover)',
                primaryBorder: 'var(--color-color-border)',
                blue: {
                    300: 'rgba(76, 134, 214, 0.33)',
                    400: 'rgba(76, 134, 214, 0.53)',
                    500: 'rgba(76, 134, 214, 0.73)',
                    600: 'rgba(76, 134, 214, 0.93)',
                }
            },
           
        },
        keyframes: {
            shimmer: {
                '100%': {
                    transform: 'translateX(100%)',
                },
            },
        },
    },
    plugins: [],
})