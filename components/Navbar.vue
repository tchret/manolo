<template>
<div class='navbar'>
  <nuxt-link class='logo' to='/'>
    <logo></logo>
  </nuxt-link>
  <div :class='{menu: true, active: this.$nuxt._route.params.hasOwnProperty("category")}'>
    <a class='index button' @click='goToRandomArtwork'>
      <span>Random artwork</span>
      <refresh-cw-icon></refresh-cw-icon>
    </a>
  </div>
  <div class='menu' :class='{menu: true, active: !this.$nuxt._route.params.hasOwnProperty("category")}'>
    <nuxt-link class='index button' :to='`/series/${this.$store.state.category}`'>
      <span>Index</span>
      <menu-icon></menu-icon>
    </nuxt-link>
  </div>
</div>
</template>

<script>
  import { MenuIcon, ArrowLeftIcon, RefreshCwIcon } from 'vue-feather-icons'
  import Logo from './Logo'
  import data from '~/assets/data.yml'
  import { sample } from 'lodash'

  export default {
    components: { Logo, MenuIcon, ArrowLeftIcon, RefreshCwIcon },
    methods: {
      goToRandomArtwork() {
         const randomArtwork = sample(data.artworks)
        // window.location.replace(`${location.protocol + '//' + location.host + location.pathname}artworks/${randomArtwork.slug}`);
         this.$router.push(`/artworks/${randomArtwork.slug}`);
      }
    }
  }
</script>

<style lang='scss' scoped>

  .logo {
    pointer-events: auto;
    &>div + span {
      display: none;
    }
  }

  .navbar {
    position: fixed;
    left: 0;
    z-index: 9999;
    right: 0;
    top: 0;
    padding: 20px;
    display: flex;
    pointer-events: none;

    .menu {
      margin-left: auto;
      pointer-events: auto;

      display: none;

      &.active {
        display: block;
      }
    }

    .button {
      pointer-events: auto;
      display: inline-block;
      height: 36px;
      display: flex;
      align-items: center;
      user-select: none;
      min-width: 150px;
      justify-content: center;
      box-shadow: 0px 0px 0px 1.3px white;
      color: white;
      padding: 0 $spacing * 1.5;
      padding-left: $spacing * 1.5;
      cursor: pointer;
      transition: background .15s ease-in-out;
      background: black;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        background: darken(white, 85%);
      }

      svg {
        stroke-width: 1.7;
        margin-left: auto;

        &.feather-refresh-cw {
          width: 20px;
          height: 20px;
        }
      }
      span {
        position: relative;
        bottom: 1px;
        margin-right: $spacing * 2;

      }
      &.icon-left {
        padding-left: 5px;

        span {
          margin-right: 0;
        }
        svg {
          margin-right: auto;
          margin-left: 0;
        }
      }
    }
  }
</style>
