export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).',
    titleTemplate: 'AAIRTA | %s',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).'
      },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@panafstrag' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://aairta.netlify.app/'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'AAIRTA official website'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png'
      },

      { hid: 'og:site_name', property: 'og:site_name', content: 'PANAFSTRAG' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://aairta.netlify.app/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'AAIRTA official website'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content:
          'https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'PANAFSTRAG'
      }
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://aairta.netlify.app/'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Oxygen&display=swap"'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    // meta: [
    //   { charset: 'utf-8' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { hid: 'description', name: 'description', content: 'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).' },
    //   { name: 'format-detection', content: 'telephone=no' }
    // ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap' }
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap-vue.client',
    { src: '~/plugins/robin.js', mode: 'client' },
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    // { src: '~plugins/vuex-persist.js', ssr: false },
    { src: '~/plugins/chart.js', mode: 'client' },
    { src: '~/plugins/vue-image-zoom.js', mode: 'client' },
    { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    '@nuxt/postcss8',
    '@nuxtjs/moment'
  ],
  // moment: {
  //   locales: ['en']
  // },
  script: [
    {
      src: 'https://checkout.squadco.com/widget/squad.min.js'
    }
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-sweetalert2',
      {
        confirmButtonColor: '#000000'
      }
    ],
    'bootstrap-vue/nuxt',
    [
      'nuxt-social-meta',
      {
        url: 'https://aairta.netlify.app/',
        title: 'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).',
        site_name: 'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).',
        description: 'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).',
        img: '~/static/logo.png',
        img_size: { width: '20px', height: '20px' },
        locale: 'en_US',
        twitter: '@user',
        twitter_card: 'summary_large_image',
        theme_color: '#8B4E96'
      }
    ]
  ],
  sweetalert: {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
  },

  bootstrapVue: {
    icons: true,
    bootstrapCSS: true, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: true, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: [], // Here you can specify which components you want to load and use
    directivePlugins: [] // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://academy-api-service.onrender.com/api'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).',
      author: 'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).'
    },
    manifest: {
      name: 'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).',
      short_name: 'AAIRTA',
      description: 'Academy of Africana Indigenous Religions, Theology and Arts website project (AAIRTA).',
      lang: 'en',
      theme_color: '#8B4E96',
      background_color: '#8B4E96',
      orientation: 'portrait',
      display: 'standalone'
    },
    icon: {
      filename: 'logo.png'
    }
  },
  generate: {
    fallback: true
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}
