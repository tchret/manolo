<template>
  <transition name="fade">
    <div class='photo' v-if='imageLoaded' :style='{backgroundImage: `url(${imageUrl})`}'></div>
    <div class='fake-photo' v-else>
      <loader></loader>
    </div>
  </transition>
</template>

<script>
import Loader from '~/components/Loader'
export default {
  components: { Loader },
  props: ['imageUrl', 'imageLoaded'],
}
</script>

<style lang='scss' scoped>
@keyframes enter {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.photo {
  opacity: 0;
  animation: enter 1s ease-in-out forwards;
  transform: scale(.96);
  margin: auto;
  background-size: cover !important;
  max-width: 520px;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}

.fake-photo {
  max-width: 520px;
  width: 100%;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}
</style>
