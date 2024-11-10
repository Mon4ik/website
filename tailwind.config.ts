import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            fontFamily: {
                'heading': ["Garamond", "Apple Garamond Light"],
                'body': ["Garamond", "Apple Garamond Light"]
            }
        }
    },

    plugins: []
} satisfies Config;
