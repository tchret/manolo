<template>
<div :class='{wall: true, visible: visible}' :style='{backgroundImage: `url(${baseFolder}/gallery_wall/1.jpg)`}'>
  <div class='hud'>
    <div class='infos'>
      <div class='alpha'>{{this.artwork.title}}</div>
      <div class='beta'>Manolo Chrétien, 2019</div>
    </div>
    <div class='size-switcher-container'>
      <div class='title'>Format</div>
      <div class='size-switcher'>
        <a
          @click='previousActiveSize = i'
          @mouseenter='activeSize = i'
          @mouseleave='activeSize = previousActiveSize'
          :class='{active: i == activeSize}'
          v-for='(size, i) in sizes' :key='i'
        >
          <i>
            {{size.width}}
            <span>✕</span>
            {{size.height}}
          </i>
        </a>
      </div>
    </div>
  </div>
  <div :class='{artwork: true, [`size-${activeSize + 1}`]: true}' >
    <div class='photo' v-if='imageLoaded' :style='{backgroundImage: `url(${imageUrl})`}'></div>
    <loader v-else></loader>
  </div>
  <img class='person' :src='`${baseFolder}/person/1.png`'>
</div>
</template>

<script>
  import Loader from '../Loader'
  import SoundSwitcher from './SoundSwitcher'

  export default {
    components: { Loader, SoundSwitcher },
    props: ['imageLoaded', 'imageUrl', 'production', 'artwork', 'visible', 'sizes'],
    computed: {
      baseFolder() {
        if(this.production) {
          return '/manolo'
        } else {
          return ''
        }
      }
    },
    data() {
      return {
        activeSize: this.sizes.length - 1,
        previousActiveSize: this.sizes.length - 1
      }
    }
  }
</script>

<style lang='scss' scoped>

.size-switcher-container {
  position: absolute;
  right: 0;
  bottom: 0;

  .title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  a {
    display: inline-flex;
    opacity: .6;
    align-items: center;
    cursor: pointer;
    padding: 12px;
    margin: -12px;
    margin-left: 12px;
    font-size: 14px;

    &:first-child {
      margin-left: 0;
    }
    &:hover {
      opacity: .8;
    }
    &.active {
      position: relative;
      opacity: 1;

      i:after {
        height: 3px;
        background: white;
        content: '';
        left: 0;
        right: 0;
        position: absolute;
        bottom: -21px;
      }
    }
  }
  i {
    font-style: normal;
    position: relative;
  }
  span {
    margin: 0 $spacing / 2;
    font-size: 10px;
    font-weight: bold;
    font-family: initial;
  }
}

.wall {
  background-size: cover;
  height: 450px;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-position: center center;
  opacity: 0;
  transition: opacity 0s ease-in-out;

  &.visible {
    transition: opacity 1s ease-in-out;
    opacity: 1;
  }
}

.hud {
  position: absolute;
  left: 20px; right: 20px; bottom: 20px; top: 20px;
  .infos {
    position: absolute;
    bottom: 0;
    left: 0;

    .alpha {
      font-size: 20px;
      font-weight: 300;
    }

    .beta {
      font-size: 14px;
      opacity: .8;
      font-weight: 500;
    }
  }
}

.artwork {
  height: 300px;
  width: 300px;
  background: black;
  box-shadow: 0px 0px 1px black, 0px 8px 1px -5px rgba(black, .2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
  position: relative;
  top: 20px;
  transition: .15s ease-in-out transform;

  &.size-3 {

  }

  &.size-2 {
    transform: scale(.8);
  }

  &.size-1 {
    transform: scale(.6);
  }
  .photo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover !important;
  }
}

.person {
  position: absolute;
  top: 170px;
  left: -450px;
  right: 0;
  margin: auto;
  width: 250px;
}
</style>
