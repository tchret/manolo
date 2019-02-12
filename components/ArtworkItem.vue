<template>
  <div>
    <div v-if='imageLoaded' class='item photo' :style='{backgroundImage: `url(${imageUrl})`}'>
      <span class='title'>{{this.title}}</span>
    </div>
    <Loader v-else></Loader>
  </div>
</template>

<script>
  import Loader from './Loader'

  export default {
    components: { Loader },
    props: ['slug', 'production', 'title'],
    data() {
      return {
        imageLoaded: false
      }
    },
    computed: {
      imageUrl() {
        let folder = ''
        if(this.production) {
          folder = '/manolo/'
        }
        return `${folder}/artworks/noses/${this.slug.toUpperCase()}.jpg`
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
