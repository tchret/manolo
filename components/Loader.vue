<template>
  <div :class='{loader: true, visible: visible}'>
    <div :is='currentComponent'></div>
  </div>
</template>

<script>
  import Alpha from './Loader/Alpha'
  import Beta from './Loader/Beta'
  import Charlie from './Loader/Charlie'
  import Delta from './Loader/Delta'
  import Echo from './Loader/Echo'
  import Foxtrot from './Loader/Foxtrot'
  import Golf from './Loader/Golf'
  import Hotel from './Loader/Hotel'
  import India from './Loader/India'
  import Juliett from './Loader/Juliett'
  import Kilo from './Loader/Kilo'
  import Lima from './Loader/Lima'
  import Mike from './Loader/Mike'
  import November from './Loader/November'
  import Oscar from './Loader/Oscar'
  import Papa from './Loader/Papa'
  import Quebec from './Loader/Quebec'
  import Romeo from './Loader/Romeo'
  import Sierra from './Loader/Sierra'
  import Tango from './Loader/Tango'
  import Whiskey from './Loader/Whiskey'
  import Uniform from './Loader/Uniform'
  import Xray from './Loader/Xray'
  import Zulu from './Loader/Zulu'
  import Yankee from './Loader/Yankee'
  import { shuffle, random  } from 'lodash'


  const components = {Alpha, Beta, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Whiskey, Xray, Yankee, Zulu}


  export default {
    components: components,
    mounted() {
      this.visible = true
      let i = 0
      setInterval(() => {
        i += 1
        if(!this.keys[i]) {
          i = 0
        }

        this.currentComponent = this.keys[i]
      }, random(50, 500))
    },
    data() {
      const keys = shuffle(Object.keys(components))
      return {
        keys: keys,
        currentComponent: keys[0],
        visible: false
      }
    }
  }
</script>

<style scoped lang='scss'>
.loader {
  display: none;
  &.visible {
    display: block;
  }
}
.loader /deep/ svg  {
  display: block;
  margin: auto;
  path, ellipse {
    stroke: rgba(white, .8);
    fill: none;
    stroke-width: 1.2;
    stroke-location: outside;
  }
}
</style>
