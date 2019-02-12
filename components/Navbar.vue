<template>
<div class='navbar'>
  <nuxt-link class='logo' to='/'>
    <logo></logo>
  </nuxt-link>
  <div class='menu'>
    <nuxt-link class='index' to='/all'>
      <span>Index</span>
      <menu-icon></menu-icon>
    </nuxt-link>
  </div>
</div>
</template>

<script>
  import { MenuIcon } from 'vue-feather-icons'
  import Logo from './Logo'
  export default {
    components: { Logo, MenuIcon }
  }
</script>

<style lang='scss' scoped>
  .navbar {
    position: absolute;
    left: 0;
    z-index: 9999;
    right: 0;
    top: 0;
    padding: 20px;
    display: flex;

    .logo /deep/ svg {
      height: 46px;
      width: 46px;
    }

    .menu {
      margin-left: auto;
      a {
        display: inline-block;
        height: 36px;
        display: flex;
        align-items: center;
        width: 150px;
        justify-content: center;
        box-shadow: 0px 0px 0px 1.3px white;
        color: white;
        padding: 0 $spacing * 2;
        cursor: pointer;
        transition: background .15s ease-in-out;
        text-decoration: none;

        &:hover {
          background: rgba(white, .2);
        }

        svg {
          stroke-width: 1.7;
          margin-left: auto;
        }
        span {
          position: relative;
          bottom: 1px;
          margin-right: $spacing;
        }
      }
    }

  }
</style>
