<template>
<div class='wrapper'>
  <div
    :class='{background: true, [`go-to-artwork-${this.animationDirection}`]: true}'
    :style='{backgroundImage: `url(${baseFolder}/gallery_wall/1.jpg)`}'
  >
    <div class='artworks'>
      <Artwork
        v-for="(artwork, i) in [this.artwork]" :key='i' v-bind='artwork'
        @click.native='animationDirection = i'
      ></Artwork>
    </div>
  </div>
</div>
</template>
<script>
  import data from '~/assets/data.yml'
  import { filter, findIndex } from 'lodash'
  import Artwork from '~/components/Artwork'

  export default {
    props: ['category', 'baseFolder'],
    components: { Artwork },
    data() {
      const artworks = filter(data.artworks, (a) => { return a.category == this.category } )

      return {
        artworks: artworks,
        currentArtwork: artworks[0],
        animationDirection: false
      }
    },
    computed: {
      index() {
        return findIndex(this.artworks, (artwork) => artwork.slug == this.currentArtwork.slug)
      },
      nextArtwork() {
        if(this.artworks[this.index + 1]) {
          return this.artworks[0]
        } else {
          return this.artworks[this.index + 1]
        }
      },
      prevArtwork() {
        if(this.artworks[this.index - 1]) {
          return this.artworks[this.artworks.length - 1]
        } else {
          return this.artworks[this.index - 1]
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.wrapper {
  overflow: hidden;
  padding-top: 50px;
}
.background {
  height: 600px;
  background-size: cover !important;
  background-position: center center;
  position: relative;

  &.go-to-artwork-0 {
    transform: translateX(-58%)
  }

  &.go-to-artwork-2 {
    transform: translateX(58%)
  }

  &:after, &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    right: -100%;
    background: inherit;
    bottom: 0;
    background-size: cover !important;
    background-position: center center;
  }

  &:before {
    left: -100%;
    right: inherit;
  }
}

.artwork {
  position: absolute;
  top: 40px;
  bottom: 0;
  margin: auto;
  left: 0; right: 0;
}
</style>
