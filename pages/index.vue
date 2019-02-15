<template>
  <div>
    <div class='header'>
      <container class='hero'>
        <div :class='{"person manolo": true, "loaded": this.imageLoaded}' :style="{backgroundImage: `url(${baseFolder}/misc/manolo.jpg)`}">
        </div>
        <div>
          <b>Manolo Chrétien</b> fell from the sky onto the Orange Air Base in France, 1966. He grew up amongst hangars, tarmac, kerosene and the aluminum skins of jet prototypes that his father, <a target="_blank" href='https://en.wikipedia.org/wiki/Jean-Loup_Chr%C3%A9tien'>France’s first Astronaut</a>, would one day pilot, a universe where Manolo developed his passion for the design and technology power, coexisting with industrial structures, metallic surfaces and infinite detail.
        </div>
      </container>
    </div>
    <category-item
      v-for='(category, i) in categories'
      :key='i'
      :category='category'
      :baseFolder='baseFolder'
    ></category-item>
  </div>
</template>

<script>
import data from '~/assets/data.yml'
import Container from '~/components/Container'
import CategoryItem from '~/components/CategoryItem'
import Separator from '~/components/Separator'

export default {
  components: {
    Container, CategoryItem, Separator
  },
  asyncData({params, isDev}) {
    return {
      categories: data.categories,
      production: !isDev
    }
  },
  data() {
    return {
      imageLoaded: false
    }
  },
  computed: {
    baseFolder() {
      if(this.production) {
        return '/manolo'
      } else {
        return ''
      }
    },
    imageUrl() {
      return `${this.baseFolder}/misc/manolo.jpg`
    }
  },
  mounted() {
    let newImg = new Image
    newImg.onload = () => {
        this.imageLoaded = true
    }
    newImg.src = this.imageUrl
    if(newImg.complete) {
      this.imageLoaded = true
    }
  }
}
</script>

<style scoped lang='scss'>
@keyframes enter {
  to {
    opacity: 1;
  }
}
  .header {
    padding: ($spacing * 10) 0;
    padding-bottom: $spacing * 3;
    display: flex;
    background: black;
    position: relative;
    box-shadow: 0px 0px 100px 100px black;
    z-index: 2;

  }

  .separator {
    margin: ($spacing * 4) auto;
  }

  .person {
    flex: 0 0 300px;
    height: 300px;
    opacity: 0;
    transition: .5s ease-in-out;
    transform: translateY(2%);
    background-size: 100% !important;
    margin-right: $spacing * 2;

    &.loaded {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .hero {
    font-size: 24px;
    font-weight: 300;
    line-height: 1.5;
    position: relative;
    display: flex;
    font-size: 23px;
    max-width: 1000px !important;
    align-items: center;
    .title {
      font-size: 40px;
      text-align: center;
      letter-spacing: -1px;
    }

    a {
      color: white;

    }
    b {
      text-transform: uppercase;
      font-size: 18px;
      letter-spacing: 0px;
    }
  }
</style>
