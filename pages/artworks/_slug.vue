<template>
  <section class="container">
    <artwork-hero :artwork='this.artwork'></artwork-hero>
  </section>
</template>

<script>
import data from '~/assets/data.yml'
import { find } from 'lodash'
import { mapMutations } from 'vuex'
import ArtworkHero from '~/components/Detail/ArtworkHero'

export default {
  components: { ArtworkHero },
  asyncData ({ params, store }) {
    const artwork = find(data.artworks, (el) => el.slug == params.slug)
    store.commit('setBackgroundColor', artwork.backgroundColor)

    return {
      artwork: artwork
    }
  }

}
</script>

<style lang='scss' scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding-top: $spacing * 8;
}
.photo {
  height: 600px;
  width: 600px;
  background-size: cover;
  margin: auto;
}
</style>
