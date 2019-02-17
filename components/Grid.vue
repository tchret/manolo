<template>
  <div>
    <div class='tabs-wrapper'>
    <container class='tabs'>
        <nuxt-link
          v-for='(category, i) in categories'
          :to='`/series/${category}`'
          :key='i'
          :class='{active: currentCategory == category}'
        >{{category}}</nuxt-link>
    </container>
      </div>
    <container :class='{grid: true, hovered: hoveredItem != null}'>
      <nuxt-link
        @mouseenter.native='() => hoveredItem = i'
        @mouseleave.native='hoveredItem = null'
        :class='{cell: true, hovered: i == hoveredItem}'
        v-for='(artwork, i) in artworks'
        :to='`/artworks/${artwork.slug}`'
        :key='i'
      >
        <artwork-item :i='i' v-bind='artwork' :production='production'></artwork-item>
      </nuxt-link>
    </container>
  </div>
</template>

<script>
  import Container from './Container'
  import ArtworkItem from './ArtworkItem'
  import data from '~/assets/data.yml'
  import { filter } from 'lodash'

  export default {
    components: { Container, ArtworkItem },
    props: ['category'],
    data() {
      return {
        categories: data.categories,
        artworks: filter(data.artworks, (a) => { return a.category == this.category } ),
        currentCategory: this.category

      }
    }
  }
</script>

<style lang='scss' scoped>
.container {
  max-width: 1000px !important;
  position: relative;
  z-index: 1;
}

.tabs-wrapper {
  border-bottom: 1px solid rgba(white, .2);
  text-align: center;
  position: sticky;
  z-index: 999;
  top: 20px;
  background: black;
  @media(max-width: 900px) {
    top: 60px;
  }
  &:after {
    position: absolute;
    left: 0;
    right: 0;
    top: -20px;
    height: 20px;
    background: black;
    content: '';
    @media(max-width: 900px) {
      top: -60px;
      height: 60px;
    }
  }

  &:before {
    position: absolute;
    z-index: -1;
    width: 99%;
    bottom: 0;
    height: 10px;
    left: .5%;
    border-radius: 100px / 2px;
    box-shadow: 0 1px 6px rgba(black, 0.2);
    content: '';
  }

  a {
    color: white;
    text-decoration: none;
    padding: $spacing * 2;
    display: inline-block;
    text-transform: capitalize;
    min-width: 100px;
    margin-bottom: -1px;
    height: 56px;

    &.active {
      font-weight: bold;
      border-bottom: 2px solid white;
    }

  }
}
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 100px;

  &.hovered {
    .cell {
      opacity: .3;
    }

    .cell {
    }
  }
  .cell {
    flex: 0 0 33%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    opacity: .8;
    transition: .5s ease-in-out;

    @media(max-width: 800px) {
      flex: 0 0 50%;
    }

    @media(max-width: 700px) {
      flex: 0 0 50%;
    }
    @media(max-width: 500px) {
      flex: 0 0 100%;
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
      position: absolute;
      top: 12px;
      left: 12px;
      right: 12px;
      bottom: 12px;
      background-size: cover !important;

      &:hover {
        .title-container {
          opacity: 1;
          transform: translateY(0%);
        }
      }

      .title-container {
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
        text-align: center;

        span {
          background: rgba(white, .2);
          display: inline-block;
          color: black;
          line-height: 24px;
          padding: 0 $spacing * 2;
          color: white;
          border-radius: 20em
        }
      }
    }
  }
}

</style>
