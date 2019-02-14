<template>
  <div class='separator'></div>
</template>

<style lang='scss'>
  .separator {
    width: 28px;
    height: 4px;
    margin: auto;
    position: relative;
    &:after {
      content: '';
      width: 4px;
      position: absolute;
      height: 4px;
      border-radius: 50%;
      border: none;
      color: rgba(white, .4);
      background: currentColor;
      box-shadow: 12px 0px 0px currentColor, 24px 0px 0px currentColor;
      margin: auto;
    }
  }
</style>
