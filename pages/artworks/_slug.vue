<template>
  <div>
    <div class='top'>
    <section class="container">
      <div class='hero'>
        <div class='arrows'>
          <nuxt-link class='arrow-left'  :to="prevUrl">
            <chevron-left-icon></chevron-left-icon>
          </nuxt-link>
          <nuxt-link class='arrow-right' :to="nextUrl">
            <chevron-right-icon></chevron-right-icon>
          </nuxt-link>
        </div>
        <artwork-hero
          :imageUrl='this.imageUrl'
          :imageLoaded='this.imageLoaded'
        ></artwork-hero>
      </div>
      <div class='header'>
        <h1 class='title'>
          {{this.artwork.title}}
        </h1>
      </div>
      <separator></separator>
      <div class='description'>
        {{description}}
      </div>
    </section>
    </div>
    <div class='trigger' v-observe-visibility="triggerVisibilityChanged">
    </div>
    <div class='fixed'>
      <gallery
        :imageUrl='this.imageUrl'
        :production='this.production'
        :imageLoaded='this.imageLoaded'
        :artwork='this.artwork'
        :visible='this.galleryVisible'
        :sizes='sizes'
      ></gallery>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons'
import data from '~/assets/data.yml'
import { find, findIndex, filter } from 'lodash'
import { mapMutations } from 'vuex'
import ArtworkHero from '~/components/Detail/ArtworkHero'
import Gallery from '~/components/Detail/Gallery'
import Separator from '~/components/Separator'
const baseUrl = '/artworks/'

export default {
  components: { ArtworkHero, Gallery, ChevronLeftIcon, ChevronRightIcon },
  asyncData ({ params, store, isDev }) {
    const artwork = find(data.artworks, (el) => el.slug == params.slug)

    return {
      artwork: artwork,
      artworks: filter(data.artworks, (a) => { return a.category == artwork.category } ),
      production: !isDev,
      sizes: data.sizes
    }
  },

  computed: {
    imageUrl() {
    let folder = ''
      if(this.production) {
        folder = '/manolo/'
      }
      return `${folder}/artworks/noses/${this.artwork.slug.toUpperCase()}.jpg`
    },
    description() {
      return this.artwork.description.trim()
    },
    index() {
      return findIndex(this.artworks, (artwork) => artwork.slug == this.artwork.slug)
    },
    nextUrl() {
      if(!data.artworks[this.index + 1]) {
        return baseUrl + this.artworks[0].slug
      } else {
        return baseUrl + this.artworks[this.index + 1].slug
      }
    },
    prevUrl() {
      if(!data.artworks[this.index - 1]) {
        return baseUrl + this.artworks[this.artworks.length - 1].slug
      } else {
        return baseUrl + this.artworks[this.index - 1].slug
      }
    },
    debug() {
      return this.artworks[this.index + 1]
    }
  },

  data() {
    return {
      imageLoaded: false,
      galleryVisible: false
    }
  },
  methods: {
    triggerVisibilityChanged(isVisible, entry) {
      this.galleryVisible = isVisible
    }
  },
  mounted() {
    var newImg = new Image
    newImg.onload = () => {
        this.imageLoaded = true
    }
    newImg.src = this.imageUrl
    if(newImg.complete) {
      this.imageLoaded = true
    }

    window.addEventListener('keydown', (e) => {
        console.log(e.keyCode);
        if(e.keyCode == 37) {
          this.$router.push(this.prevUrl)
        } else if (e.keyCode == 39) {
          this.$router.push(this.nextUrl)
        }
    });
  }
}
</script>

<style lang='scss' scoped>

.top {
  position: relative;
  background: black;
  z-index: 999;
  padding-bottom: 10 * $spacing;
  box-shadow: 0px 0px 100px 100px black;
}

.trigger {
  height: 650px;
  @media(max-width: 600px) {
    min-height: 100vh;
  }
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.hero {
  position: relative;
  @media(max-width: 800px) {
    overflow: hidden;
  }

  .arrows {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 80px;
    z-index: 2;
    left: -100px;
    right: -100px;

    @media(max-width: 800px) {
      left: -28px;
      right: -28px;
    }

    .arrow-right {
      float: right;
    }

    svg {
      width: 80px;
      height: 80px;
      stroke-width: .6;
      stroke: white;
      opacity: .6;

      &:hover {
        opacity: .8;
      }
    }
  }
}


.container {
  max-width: 600px + ($spacing * 2);
  margin: auto;
  padding: 0 $spacing * 2;
  padding-top: $spacing * 4;
}

.header {
  margin-bottom: $spacing * 4;
  position: relative;
  text-align: center;
}

.title {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: -4px;
}




.description {
  font-size: 20px;
  font-weight: 100;
  white-space: pre-line;
  line-height: 1.4;
  opacity: .8;
}
</style>
