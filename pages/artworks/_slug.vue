<template>
  <section class="container">
    <artwork-hero :artwork='this.artwork' :production='production'></artwork-hero>
  </section>
</template>

<script>
import data from '~/assets/data.yml'
import { find } from 'lodash'
import { mapMutations } from 'vuex'
import ArtworkHero from '~/components/Detail/ArtworkHero'

export default {
  components: { ArtworkHero },
  asyncData ({ params, store, isDev }) {
    const artwork = find(data.artworks, (el) => el.slug == params.slug)
    store.commit('setBackgroundColor', artwork.backgroundColor)

    return {
      artwork: artwork,
      production: !isDev
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
</style>
