<template>
  <section class="container">
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import data from '~/assets/data.yml'
import { sample } from 'lodash'

export default {
  components: {
    Logo
  },
  mounted() {
    const randomArtwork = sample(data.artworks)
   // window.location.replace(`${location.protocol + '//' + location.host + location.pathname}artworks/${randomArtwork.slug}`);
    this.$router.push(`artworks/${randomArtwork.slug}`);
  }

}
</script>

<style>

</style>
