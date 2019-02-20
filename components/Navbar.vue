<template>
<div class='navbar'>
  <nuxt-link class='logo' to='/'>
    <logo></logo>
  </nuxt-link>
  <div :class='{menu: true, active: true}'>
    <a class='button' href='https://www.gadcollection.com/fr/28-manolo-chretien' target='_blank'>
      <span>Buy</span>
       <shopping-cart-icon></shopping-cart-icon>
     </a>
    <a class='index button' @click='goToRandomArtwork' v-if='this.$nuxt._route.params.hasOwnProperty("category")' >
      <span>Random artwork</span>
      <refresh-cw-icon></refresh-cw-icon>
    </a>
    <nuxt-link class='index button' v-else :to='`/series/${this.$store.state.category}`'>
      <span>Index</span>
      <menu-icon></menu-icon>
    </nuxt-link>
  </div>
</div>
</template>

<script>
  import { MenuIcon, ArrowLeftIcon, RefreshCwIcon, ShoppingCartIcon } from 'vue-feather-icons'
  import Logo from './Logo'
  import data from '~/assets/data.yml'
  import { sample } from 'lodash'

  export default {
    components: { Logo, MenuIcon, ArrowLeftIcon, RefreshCwIcon, ShoppingCartIcon },
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
    @media(max-width: 900px) {
      padding: 16px;
    }
    .menu {
      margin-left: auto;
      pointer-events: auto;

      display: none;

      &.active {
        display: flex;
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

      @media(max-width: 600px) {
        box-shadow: none !important;
        min-width: auto;
        span {
          margin-right: 0 !important;
        }

        svg {
          order: 1;
          margin-right: $spacing * 2;
        }

        span {
          order: 2
        }
      }


      &:hover {
        background: darken(white, 85%);
      }

      svg {
        stroke-width: 1.7;
        margin-left: auto;
        width: 20px;
        height: 20px;

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
