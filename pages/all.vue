<template>
  <div class='page'>
    <container class='header'>
      <div class='title'>
        Oeuvres
      </div>
      <div class='subtitle'>
        Manolo Chrétien
      </div>
    </container>
    <container :class='{grid: true, hovered: hoveredItem != null}'>
      <nuxt-link
        @mouseenter.native='() => hoveredItem = i'
        @mouseleave.native='hoveredItem = null'
        :class='{cell: true, hovered: i == hoveredItem}'
        v-for='(artwork, i) in artworks'
        :to='`/artworks/${artwork.slug}`'
        :key='i'
      >
        <artwork-item v-bind='artwork' :production='production'></artwork-item>
      </nuxt-link>
    </container>
  </div>
</template>

<script>
import data from '~/assets/data.yml'
import ArtworkItem from '~/components/ArtworkItem'
import Container from '~/components/Container'

export default {
  components: { ArtworkItem, Container },
  asyncData ({ params, store, isDev }) {

    return {
      artworks: data.artworks,
      production: !isDev
    }
  },
  data() {
    return {
      hoveredItem: null
    }
  }
}
</script>

<style scoped lang='scss'>
.grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px !important;
  justify-content: center;

  &.hovered {
    .cell {
      opacity: .3;
    }

    .cell {
      transition: 1s ease-in-out;
    }
  }
  .cell {
    flex: 0 0 33%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    opacity: .8;
    transition: .15s ease-in-out;

    @media(max-width: 800px) {
      flex: 0 0 50%;
    }

    @media(max-width: 700px) {
      flex: 0 0 50%;
    }
    @media(max-width: 500px) {
      flex: 0 0 100%;
    }
    &.hovered, &:hover {
      & /deep/ .photo {
        transform: scale(1);
      }
    }



    &:hover {
      opacity: 1;
    }

    &:after {
      content: '';
      padding-bottom: 100%;
      position: relative;
    }

    & /deep/ .photo {
      transition: .15s ease-in-out;
      transform: scale(1);
      position: absolute;
      top: 12px;
      left: 12px;
      right: 12px;
      bottom: 12px;
      background-size: cover;

      &:hover {
        .title {
          opacity: 1;
          transform: translateY(0%);
        }
      }

      .title {
        font-size: 14px;
        color: white;
        position: absolute;
        bottom: -20px;
        left: 0;
        right: 0;
        text-align: center;
        opacity: 0;
        transition: .15s ease-in-out;
        transform: translateY(-20%);
      }
    }
  }
}

.page {
  padding-bottom: $spacing * 10;

  .title {
    font-size: 40px;
    text-align: center;
    font-weight: 500;
  }

  .subtitle {
    font-size: 16px;
    text-align: center;
    opacity: .5;
  }

  .header {
    padding: ($spacing * 10) 0;
    padding-bottom: $spacing * 5;
  }
}
</style>
