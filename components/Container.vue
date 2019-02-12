<template>
  <div class='container'>
    <slot></slot>
  </div>
</template>

<style lang='scss' scoped>
.container {
  max-width: 600px + ($spacing * 2);
  margin: auto;
  padding: 0 $spacing * 2;
}
</style>
