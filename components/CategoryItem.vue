<template>
<div class='item' :style='{backgroundImage: `url(${baseFolder}/gallery_wall/1.jpg)`}'>
</div>
</template>
<script>
  import data from '~/assets/data.yml'
  import { filter } from 'lodash'

  export default {
    props: ['category', 'baseFolder'],
    data() {
      const artworks = filter(data.artworks, (a) => { return a.category == this.category } )

      return {
        artworks: artworks
      }
    }
  }
</script>

<style lang='scss' scoped>
.item {
  height: 260px;
  background-size: 200% !important;
  margin-top: $spacing * 5;
  border: 2px solid white;
}
</style>
