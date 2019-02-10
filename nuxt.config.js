const pkg = require('./package')
const resolve = require('path').resolve
const _ = require('lodash')
let data = []

yaml = require('js-yaml');
fs   = require('fs');
try {
  data = yaml.safeLoad(fs.readFileSync('./assets/data.yml', 'utf8'));
} catch (e) {
  console.log(e)
}

const base = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/manolo/' : '';
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: base
  }
} : {}

const routes = _.map(data.artworks, (artwork) => {
  return `/artworks/${artwork.slug}`
})

console.log(routes)

module.exports = {
  mode: 'universal',

  ...routerBase,

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  generate: {
    routes: routes
  },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', resolve(__dirname, 'assets/variables.scss')],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      config.node = {
        fs: "empty"
      }

      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })

      if (ctx.isDev && ctx.isClient) {

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
