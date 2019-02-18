<template>
<div :class='{wall: true, visible: visible}' :style='{backgroundImage: `url(${this.$store.state.baseFolder}gallery_wall/1.jpg)`}'>
  <div class='hud'>
    <div class='infos'>
      <div class='alpha'>{{this.artwork.title}}</div>
      <div class='beta'>Manolo Chrétien, 2019</div>
    </div>
    <div class='size-switcher-container'>
      <div class='size-switcher'>
        <a
          @click='activeSize = i'
          :class='{active: i == activeSize}'
          v-for='(size, i) in sizes' :key='i'
        >
          <i>
            {{size.width}}
            <span>✕</span>
            {{size.height}}cm
          </i>
        </a>
      </div>
    </div>
  </div>
  <div :class='{artwork: true, [`size-${activeSize + 1}`]: true}' >
    <div class='photo' v-if='imageLoaded' :style='{backgroundImage: `url(${imageUrl})`}'></div>
    <loader v-else></loader>
  </div>
  <img class='person' :src='`${this.$store.state.baseFolder}person/1.png`'>
</div>
</template>

<script>
  import Loader from '../Loader'
  import SoundSwitcher from './SoundSwitcher'

  export default {
    components: { Loader, SoundSwitcher },
    props: ['imageLoaded', 'imageUrl', 'production', 'artwork', 'visible', 'sizes'],
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

  .size-switcher {
    display: flex;
    justify-content: center;

    @media(max-width: 600px) {
      margin: 0 -20px;
    }

    a {
      flex: 1;
      min-width: 110px;
      justify-content: center;
      white-space: nowrap;
      padding: 12px 0;
    }
  }
  @media(max-width: 600px) {
    left: 0;
    text-align: center;
  }

  .title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  a {
    display: inline-flex;
    opacity: .6;
    align-items: center;
    cursor: pointer;
    margin: -12px;
    padding: 12px 0;
    margin-left: 0;
    margin-right: 0;
    font-size: 14px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      bottom: 40px;
      box-shadow: 0px 0px 0px 1.5px white;

      @media(max-width: 600px) {
        content: initial;
      }
    }

    &:nth-child(1) {
      &:after {
        height: 12px;
        width: 12px;
      }
    }

    &:nth-child(2) {
      &:after {
        height: 14px;
        width: 14px;
      }
    }

    &:nth-child(3 ) {
      &:after {
        height: 16px;
        width: 16px;
      }
    }


    &:first-child {
      margin-left: 0;
    }
    &:hover {
      opacity: .8;
    }
    &.active {
      position: relative;
      opacity: 1;
      font-weight: 600;

      &:after {
        background: white;
      }

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
  height: 600px;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-position: center center;
  opacity: 1;
  transition: opacity 0s ease-in-out;
  visibility: hidden;

  &.visible {
    visibility: visible;
  }

  @media(max-width: 600px) {
    min-height: 100vh;
    height: auto;
  }

  &.visible {
    transition: opacity 1s ease-in-out;
    opacity: 1;
  }
}

.hud {
  position: absolute;
  left: 20px; right: 20px; bottom: 20px; top: 20px;
  z-index: 999;

  @media(max-width: 600px) {

  }

  .infos {
    position: absolute;
    bottom: 0;
    left: 0;
    @media(max-width: 600px) {
      bottom: 40px;
      right: 0;
      text-align: center;
    }


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
  height: 450px;
  width: 450px;
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

  @media(max-width: 500px) {
    width: 300px;
    height: 300px;
  }

  &.size-3 {

  }

  &.size-2 {
    transform: scale(.77);
  }

  &.size-1 {
    transform: scale(.53);
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
  top: 240px;
  left: -450px;
  right: 0;
  margin: auto;
  width: 250px;

  @media(max-width: 600px) {
    bottom: -50%;
    left: 0;
    top: 0;
  }
}
</style>
