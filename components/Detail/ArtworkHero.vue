<template>
  <transition name="fade">
    <div class='photo' v-if='imageLoaded' :style='{backgroundImage: `url(${imageUrl})`}'></div>
    <div class='fake-photo' v-else></div>
  </transition>
</template>

<script>
export default {
  props: ['artwork'],
  computed: {
    imageUrl() {
      return `/artworks/noses/${this.artwork.slug.toUpperCase()}.jpg`
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

<style lang='scss'>
@keyframes enter {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.photo {
  opacity: 0;
  animation: enter 2s ease-in-out forwards;
  transform: scale(.9);
}
.fake-photo {
  width: 600px;
  height: 600px;
  position: relative;
  &:after {
    content: '';
    height: 400px;
    width: 400px;
    border-radius: 50%;
    background: rgba(white, .05);
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0; margin: auto;
  }
}
</style>
