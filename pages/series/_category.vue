<template>
  <div class='page'>
    <container class='header'>
      <div class='title'>
        Artworks
      </div>
      <div class='subtitle'>
        Manolo Chrétien
      </div>
    </container>
    <grid :category='category'></grid>
  </div>
</template>

<script>
import data from '~/assets/data.yml'
import ArtworkItem from '~/components/ArtworkItem'
import Container from '~/components/Container'
import Grid from '~/components/Grid'
import FooterItem from '~/components/Footer'

export default {
  components: { ArtworkItem, Container, Grid, FooterItem },
  asyncData ({ params, store, isDev }) {
    return {
      category: params.category,
      production: !isDev
    }
  },
  data() {
    return {
      hoveredItem: null
    }
  }
}
</script>

<style scoped lang='scss'>

.page {
  padding-bottom: $spacing * 10;

  .title {
    font-size: 40px;
    text-align: center;
    font-weight: 500;
  }

  .subtitle {
    font-size: 16px;
    text-align: center;
    opacity: .5;
  }

  .header {
    padding: ($spacing * 10) 0;
    padding-bottom: $spacing * 5;
  }
}
</style>
