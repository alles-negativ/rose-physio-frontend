const Sass = require('sass')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rose-physio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  publicRuntimeConfig: {
    kirby: {
      url: process.env.KIRBY_SITE || 'https://aammon.ch',
      username: process.env.KIRBY_USERNAME || 'aurelianammon@gmail.com',
      password: process.env.KIRBY_PASSWORD || 'password'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './node_modules/nuxt-kirby-kql'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {
    loaders: {
      scss: {
        implementation: Sass
      }
    }
  },

  axios: {
    proxy: false // Can be also an object with default options
  },

  proxy: {
    '/api/': { target: 'http://localhost:8000/api/query', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  }
}
