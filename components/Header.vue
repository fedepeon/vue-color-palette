<template lang="html">
  <header>
    <h1>Colette</h1>
    <div class="palette">
      <div
        v-for="(color, index) in $store.state.palette"
        :key="`${color.name}-${index}`"
        class="palette-color"
        :style="`background-color: ${color.hex}`"
      >
      </div>
      <div
        v-for="i in this.$store.state.paletteSize - $store.state.palette.length"
        :key="i"
        class="palette-color"
      >
      </div>
    </div>
  </header>
</template>

<script type="text/javascript">
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/vars.scss';

header {
  align-items: center;
  background: $color-white;
  box-shadow: 0 1px 0 0 darken($color-white, 10%);
  display: flex;
  font-family: $font-family;
  font-weight: 900;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  width: calc(100% - 40px);
  z-index: 1;

  h1 {
    font-size: 1.6em;
  }

  .palette {

    .palette-color {
      background: $color-white;
      border: 1px solid darken($color-white, 10%);
      border-radius: 50%;
      display: inline-block;
      margin: 0 0 0 5px;
      height: 25px;
      width: 25px;
    }
  }
}
</style>
