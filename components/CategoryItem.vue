<template>
<div class='helper'>
  <div class='wrapper'>
    <div
      :class='{background: true, [`go-to-artwork-${this.animationDirection}`]: true}'
      :style='{backgroundImage: `url(${this.$store.state.baseFolder}gallery_wall/1.jpg)`}'
    >
      <div class='artworks'>

      </div>
    </div>
  </div>
</div>
</template>
<script>
  import data from '~/assets/data.yml'
  import { filter, findIndex } from 'lodash'

  export default {
    props: ['category'],
    components: {  },
    data() {
      const currentCategory = data.categories[0]

      return {
        currentCategory: currentCategory,
        categories: data.categories,
        animationDirection: false
      }
    },
    methods: {
      artworksFrom(category) {
        return filter(data.artworks, (a) => { return a.category == category } )
      }
    }
  }
</script>

<style lang='scss' scoped>
.helper {
  height: 650px;
}
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
