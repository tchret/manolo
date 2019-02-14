<template>
  <div class='page'>
    <container>
      <div>
        <div :class='{"person manolo": true, "loaded": this.imageLoaded}' :style="{backgroundImage: `url(${baseFolder}/misc/manolo.jpg)`}">
        </div>
      </div>
    </container>
    <container class='hero'>
      <div class='title'>Manolo Chrétien</div>
      <separator></separator>
      <b>Manolo Chrétien</b> fell from the sky onto the Orange Air Base in France, 1966. He grew up amongst hangars, tarmac, kerosene and the aluminum skins of jet prototypes that his father, <a target="_blank" href='https://en.wikipedia.org/wiki/Jean-Loup_Chr%C3%A9tien'>France’s first Astronaut</a>, would one day pilot, a universe where Manolo developed his passion for the design and technology power, coexisting with industrial structures, metallic surfaces and infinite detail.
    </container>
    <separator></separator>

    <container>
      <category-item
        v-for='(category, i) in categories'
        :key='i'
        :category='category'
        :baseFolder='baseFolder'
      ></category-item>
    </container>
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
  .page {
    padding: ($spacing * 10) 0;
    padding-top: $spacing * 5;
  }

  .separator {
    margin: ($spacing * 4) auto;
  }

  .person {
    height: 200px;
    width: 100%;
    height: 457px;
    background-size: cover !important;
    opacity: 0;
    transition: .5s ease-in-out;
    transform: translateY(2%);

    &.loaded {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .hero {
    font-size: 24px;
    font-weight: 300;
    line-height: 1.5;
    margin-top: -100px !important;
    position: relative;

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
