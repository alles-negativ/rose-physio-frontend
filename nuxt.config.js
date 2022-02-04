const Sass = require('sass')

export default {
  // server: {
  //   host: '0' // default: localhost
  // },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // create a static page
  target: 'static',

  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rose Physio',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'content from config' },
      { hid: 'author', name: 'author', content: 'alles-negativ' },
      { hid: 'keywords', name: 'keywords', content: 'Physio,Physiotherapie,Zürich,Ergotherapie,Massage,Pilates,Kurse' },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
      { hid: 'robots', name: 'robots', content: 'all' },
      { hid: 'referrer', name: 'referrer', content: 'no-referrer-when-downgrade' },
      { hid: 'og:locale', property: 'og:locale', content: 'de_CH' },
      { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_GB' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Rose Physio - Physiotherapie' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Rose Physio - Physiotherapie in Zürich' },
      { hid: 'og:description', property: 'og:description', content: 'Wir sind eine Physio-Praxis mit vier Standorten im Raum Zürich. Wir bieten Ihnen eine rundum Behandlung von Physioteherapie über Ergotherapie und Massage bis Pilates an.' },
      { hid: 'og:image', property: 'og:image', content: 'https://peaceful-dubinsky-42a054.netlify.app/rose-physio-static-image.jpg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '2121' },
      { hid: 'og:image:height', property: 'og:image:height', content: '1414' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Patient is treated with care and awareness regarding the important problems.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://unpkg.com/splitting/dist/splitting.css" },
      { rel: "stylesheet", href: "https://unpkg.com/splitting/dist/splitting-cells.css" }
    ],
    script: [
      // { src: "https://unpkg.com/splitting/dist/splitting.min.js" }
      // script in static folder for global JS
      {src: "/script.js"}
    ]
  },

  publicRuntimeConfig: {
    kirby: {
      url: process.env.KIRBY_SITE,
      username: process.env.KIRBY_USERNAME,
      password: process.env.KIRBY_PASSWORD
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/nuxt-kirby-kql',
    {src: '~/plugins/alles-negativ-splitting', ssr: false},
    '~/plugins/preview.client.js'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/device',
    '@nuxt/image',
    // '@nuxtjs/html-validator'
    ['@nuxtjs/google-analytics', {
      id: 'UA-219520330-1'
    }]
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
      messages: {
        de: {
          locations: 'Standorte',
          contact: 'Kontakt',
          open: 'Öffnungszeiten',
          accept: 'Oke! 👍',
          readmore: 'mehr',
          cookie: 'Diese Website verwendet Cookies',
          errormessage: '404 - Seite nicht gefunden',
          link: 'Zurück zu Home'
        },
        en: {
          locations: 'Locations',
          contact: 'Contact',
          open: 'Opening Hours',
          accept: 'Oke! 👍',
          readmore: 'read more',
          cookie: 'This website uses cookies',
          errormessage: '404 - Page not found',
          link: 'back to home'
        }
      }
    },
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

  image: {
    domains: [
      'http://localhost:8888',
      'http://backend.rose-physio.ch/'
    ]
  }
}
