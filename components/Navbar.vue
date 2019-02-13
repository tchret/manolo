<template>
<div class='navbar' v-if="$nuxt.$route.name == 'all'">
  <a class='index icon-left button' @click='() => this.$router.back()'>
    <arrow-left-icon class='refresh'></arrow-left-icon>
    <span>Back</span>
  </a>
  <div class='menu'>
    <a class='index button' @click='goToRandomArtwork'>
      <span>Random</span>
      <refresh-cw-icon></refresh-cw-icon>
    </a>
  </div>
</div>
<div class='navbar' v-else>
  <nuxt-link class='logo' to='/'>
    <logo></logo>
  </nuxt-link>
  <div class='menu'>
    <nuxt-link class='index button' to='/all'>
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
         this.$router.push(`artworks/${randomArtwork.slug}`);
      }
    }
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

    .menu {
      margin-left: auto;
    }
    .button {
      display: inline-block;
      height: 36px;
      display: flex;
      align-items: center;
      width: 150px;
      justify-content: center;
      box-shadow: 0px 0px 0px 1.3px white;
      color: white;
      padding: 0 $spacing * 1.5;
      padding-left: $spacing * 1.5;
      cursor: pointer;
      transition: background .15s ease-in-out;
      text-decoration: none;

      &:hover {
        background: rgba(white, .15);
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
        margin-right: $spacing;
      }
      &.icon-left {
        padding-left: 5px;
        svg {
          margin-right: auto;
          margin-left: 0;
        }
      }
    }
  }
</style>
