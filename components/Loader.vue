<template>
  <div>
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

  const components = {Alpha, Beta, Charlie, Delta, Echo, Foxtrot}

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
      }, 100)
    },
    data() {
      return {
        currentComponent: Object.keys(components)[0],
      }
    }
  }
</script>
