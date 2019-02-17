<template>
  <div>
    <div v-if='imageLoaded' :class='{[`item photo`]: true, [`item-${i}`]: true}' :style='{backgroundImage: `url(${imageUrl})`}'>
      <div class='title-container'>
        <span class='title'>{{this.title}}</span>
      </div>
    </div>
    <Loader v-else></Loader>
  </div>
</template>

<script>
  import Loader from './Loader'

  export default {
    components: { Loader },
    props: ['slug', 'production', 'title', 'i', 'category'],
    data() {
      return {
        imageLoaded: false
      }
    },
    computed: {
      imageUrl() {
        return `${this.$store.state.baseFolder}artworks/${this.category}/${this.slug.toUpperCase()}.jpg`
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
    }
  }
</script>
<style lang='scss' scoped>
@keyframes enter {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.item {
  animation: enter 1s ease-in-out forwards;
  transform: scale(.95);
  opacity: 0;

  @for $i from 1 to 20 {
    &.item-#{$i} { animation-delay: $i * 0.25s; }
  }
}
</style>
