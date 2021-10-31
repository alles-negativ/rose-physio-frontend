const Sass = require('sass')

export default {
  // server: {
  //   host: '0' // default: localhost
  // },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // create a static page
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rose-physio',
    htmlAttrs: {
      lang: 'de'
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
      url: process.env.KIRBY_SITE || 'http://localhost:8000',
      username: process.env.KIRBY_USERNAME || 'hello@alles-negativ.ch',
      password: process.env.KIRBY_PASSWORD || 'letmein123'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/nuxt-kirby-kql',
    '~/plugins/magicgrid.js',
    {src: '~/plugins/vue-badger-accordion', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/device',
    // '@nuxtjs/ngrok'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/moment'
  ],

  // Translation configuration
  i18n: {
    strategy: 'prefix',
    locales: [
      {
         code: 'de',
         name: 'Deutsch'
      },
      {
         code: 'en',
         name: 'English'
      }
    ],
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'de',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass
      }
    },
    extend(config, ctx) {
      // You can extend webpack config here
      config.resolve.alias["vue$"] = "vue/dist/vue.esm.js";
    }
  },

  axios: {
    proxy: false // Can be also an object with default options
  },

  proxy: {
    '/api/': { target: 'http://localhost:8000/api/query', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },

  ngrok: {
    // module options
    authtoken: process.env.NGROK_AUTHTOKEN
    // subdomain: 'nuxt' 
  }
}
