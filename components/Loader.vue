<template>
  <div class='loader'>
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


  const components = {Alpha, Beta, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Whiskey, Xray, Yankee, Zulu}

  export default {
    components: components,
    mounted() {
      let i = 0
      setInterval(() => {
        i += 1
        if(!Object.keys(components)[i]) {
          i = 0
        }
        this.currentComponent = Object.keys(components)[i]
      }, 150)
    },
    data() {
      return {
        currentComponent: Object.keys(components)[0],
      }
    }
  }
</script>

<style scoped lang='scss'>
.loader /deep/ svg  {
  display: block;
  path, ellipse {
    stroke: rgba(white, .8);
    fill: none;
    stroke-width: 1.2;
    stroke-location: outside;
  }
}
</style>
