import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
    content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
            },
            typography: {
                quoteless: {
                    css: {
                        'blockquote p:first-of-type::before': {
                            content: 'none',
                        },
                        'blockquote p:first-of-type::after': {
                            content: 'none',
                        },
                    },
                },
            },
            backgroundImage: {
                'blurple-gif': "url('/bg.gif')",
            },
            colors: {
                'mine-shaft': {
                    '50': '#f6f6f6',
                    '100': '#e7e7e7',
                    '200': '#d1d1d1',
                    '300': '#b0b0b0',
                    '400': '#888888',
                    '500': '#6d6d6d',
                    '600': '#5d5d5d',
                    '700': '#4f4f4f',
                    '800': '#454545',
                    '900': '#333333',
                    '950': '#262626',
                },
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [typography],
} satisfies Config
