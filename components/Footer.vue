<template>
  <div class='footer' v-if='allowed'>
    <div class='title'>
    </div>
    <h2>Galleries</h2>
    <container class='galleries'>
      <a
        v-for='(gallery,i) in galleries'
        class='gallery'
        :href="gallery.url"
        :key='i'
      >
        <span class='emoji'>
          {{gallery.emoji}}
        </span>
        <div class='infos'>
          <div class='name'>
            {{gallery.name}}
          </div>
          <div class='tagline'>
            {{gallery.city}}
          </div>
        </div>
      </a>
    </container>
    <span class='mention'>made by <a target="_blank" href='http://twitter.com/tchret'>@tchret</a></span>
  </div>
</template>

<script>
  import data from '~/assets/data.yml'
  import Container from '~/components/Container'

  export default {
    data() {
      return {
        galleries: data.galleries
      }
    },
    components: {
      Container
    },
    computed: {
      allowed() {
        return this.$nuxt._route.name != 'artworks-slug'
      }
    }
  }
</script>

<style lang='scss' scoped>
.title {
  border-bottom: 1px solid rgba(255, 255, 255, .35);
  margin-bottom: $spacing * 6;
}

h2 {
  font-size: 40px;
  font-weight: 300;
  margin-bottom: $spacing * 6;

}

.footer {
  text-align: center;
  padding-bottom: $spacing * 4;
}

.galleries {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px !important;
  a {
    flex: 0 0 25%;
    color: white;
    text-decoration: none;
    margin-bottom: $spacing * 6;
    @media(max-width: 800px) {
      flex: 0 0 33.3333%;
    }

    @media(max-width: 600px) {
      flex: 0 0 100%;
    }

    &:hover {
      .name {
        text-decoration: underline;
      }
    }

    .emoji {
      font-size: 24px;
    }

    .title {
      font-weight: 400;
      font-size: 16px;
    }

    .tagline {
      opacity: .6;
      font-weight: 300;
    }


  }
}

.mention {
  color: rgba(white, .4);
  margin-top: $spacing * 6;
  font-size: 16px;
  display: block;
  a {
    color: white;
  }
}
</style>
