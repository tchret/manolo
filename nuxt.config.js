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



const artworkRoutes = _.map(data.artworks, (artwork) => {
  return `/artworks/${artwork.slug}`
})

const categoryRoutes = _.map(data.categories, (category) => {
  return `/series/${category}`
})

const routes = artworkRoutes.concat(categoryRoutes)
const description = "Manolo fell from the sky onto the Orange Air Base in France, 1966. He grew up amongst hangars, tarmac, kerosene and the aluminum skins of jet prototypes that his father, France’s first Astronaut, would one day pilot, a universe where Manolo developed his passion for the design and technology power, coexisting with industrial structures, metallic surfaces and infinite detail."
const title = "Manolo Chrétien — Artist"
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description},

      { property: 'og:title', content: title },
       { property: 'og:type', content: 'website' },
       { property: 'og:url', content: 'http://manolochretien.com' },
       { property: 'og:image', content: '/misc/ogimage.jpg' },
       { property: 'og:description', content: description },
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
    {src: '~/plugins/visibility.js', srr: false},
    {src: '~/plugins/baseFolderMixin.js', srr: true}

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
