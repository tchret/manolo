<template>
  <a class='switcher' @click='switchMusic'>
    <volume-x-icon v-if='active'></volume-x-icon>
    <volume-2-icon v-else></volume-2-icon>
  </a>
</template>

<script>
  import { VolumeXIcon, Volume2Icon } from 'vue-feather-icons'
  import { Howl, Howler} from 'howler'

  export default {
    components: { VolumeXIcon, Volume2Icon },
    data() {
      return {
        active: true
      }
    },
    methods: {
      switchMusic() {

      }
    },
    mounted() {
      window.backgroundNoise = new Howl({
        src: ['/mp3/gallery.mp3']
      });

      window.addEventListener('scroll', () => {
        window.backgroundNoise.play();
      })
    }
  }
</script>

<style lang='scss' scoped>
svg {
  stroke-width: 1.5;
  display: block;
  height: 24px;
  width: 24px;
}

.switcher {
  padding: 8px;
  display: inline-block;
  margin: -8px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: rgba(white, .12);
  }
}

</style>
