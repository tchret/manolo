import Vue from 'vue'

Vue.mixin({
  computed: {
    baseFolder() {
      let folder = ''
      if(this.$store.state.production) {
        folder = '/manolo/'
      }

      return folder
    }
  }
})
