<template>
  <div>
    <section class="container">
      <artwork-hero
        :imageUrl='this.imageUrl'
        :imageLoaded='this.imageLoaded'
      ></artwork-hero>
      <div class='header'>
        <h1 class='title'>
          {{this.artwork.title}}
        </h1>
      </div>
      <div class='separator'>
      </div>
      <div class='description'>
        {{description}}
      </div>
    </section>
    <artwork-preview
      :imageUrl='this.imageUrl'
      :imageLoaded='this.imageLoaded'
    ></artwork-preview>
  </div>
</template>

<script>
import data from '~/assets/data.yml'
import { find } from 'lodash'
import { mapMutations } from 'vuex'
import ArtworkHero from '~/components/Detail/ArtworkHero'
import ArtworkPreview from '~/components/Detail/ArtworkPreview'

export default {
  components: { ArtworkHero, ArtworkPreview },
  asyncData ({ params, store, isDev }) {
    const artwork = find(data.artworks, (el) => el.slug == params.slug)
    store.commit('setBackgroundColor', artwork.backgroundColor)

    return {
      artwork: artwork,
      production: !isDev
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
    }
  },

  data() {
    return {
      imageLoaded: false
    }
  },
  mounted() {
    var newImg = new Image
    newImg.onload = () => {
      this.imageLoaded = true
    }
    newImg.src = this.imageUrl
  }

}
</script>

<style lang='scss' scoped>
.container {
  max-width: 600px + ($spacing * 2);
  margin: auto;
  padding: 0 $spacing * 2;
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

.separator {
  width: 28px;
  height: 4px;
  margin: auto;
  position: relative;
  &:after {
    content: '';
    width: 4px;
    position: absolute;
    height: 4px;
    border-radius: 50%;
    border: none;
    color: rgba(white, .4);
    background: currentColor;
    box-shadow: 12px 0px 0px currentColor, 24px 0px 0px currentColor;
    margin: auto;
  }
}


.description {
  font-size: 20px;
  font-weight: 100;
  white-space: pre-line;
  line-height: 1.4;
  opacity: .8;
}
</style>
