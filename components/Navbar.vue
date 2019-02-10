<template>
<div class='navbar'>
  <logo></logo>
</div>
</template>

<script>
  import Logo from './Logo'
  export default {
    components: { Logo }
  }
</script>

<style lang='scss' scoped>
  .navbar {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: $spacing * 2;
    & /deep/ svg {
      height: 32px;
      width: 75px;
    }
  }
</style>
