// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  typescript: {
    typeCheck: true
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'SENA',
      link: [
        {
          rel: 'icon',
          href: '/favicon-1-150x150.png',
          sizes: '32x32'
        },
        {
          rel: 'icon',
          href: '/favicon-1-150x150.png',
          sizes: '192x192'
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon-1-150x150.png',
          sizes: '180x180'
        },
        {
          rel: 'mask-icon',
          href: '/favicon-1-150x150.png',
          color: '#000000'
        }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
