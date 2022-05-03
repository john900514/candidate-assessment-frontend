import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    components:[
        '~/components',
        '~/components/locations',
        '~/components/page-specific-headers',
        '~/components/carousel-slides',
    ],
})
