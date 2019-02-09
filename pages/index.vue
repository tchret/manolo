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
    window.location.replace(`/artworks/${randomArtwork.slug}`);
  }

}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
