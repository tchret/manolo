<template>
<div class='wall' :style='{backgroundImage: `url(${baseFolder}/gallery_wall/1.jpg)`}'>
  <div class='artwork' >
    <div class='photo' v-if='imageLoaded' :style='{backgroundImage: `url(${imageUrl})`}'></div>
    <loader v-else></loader>
  </div>
  <img class='person' :src='`${baseFolder}/person/1.png`'>
</div>
</template>

<script>
  import Loader from '../Loader'
  export default {
    components: { Loader },
    props: ['imageLoaded', 'imageUrl', 'production'],
    computed: {
      baseFolder() {
        if(this.production) {
          return '/manolo'
        } else {
          return ''
        }
      }
    }
  }
</script>

<style lang='scss' scoped>

.wall {
  background-size: cover;
  height: 500px;
  margin-top: $spacing * 20;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-position: center center;
}

.artwork {
  height: 300px;
  width: 300px;
  background: black;
  box-shadow: 0px 0px 1px black, 0px 8px 1px -5px rgba(black, .2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .photo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover !important;
  }
}

.person {
  position: absolute;
  top: 170px;
  left: -450px;
  right: 0;
  margin: auto;
  width: 250px;
}
</style>
