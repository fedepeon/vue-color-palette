<template lang="html">
  <div class="color-card">
    <div class="color-card-preview" :style="`background-color: ${color.hex}`"></div>
    <div class="color-card-info">
      <code class="color-code">
        {{ $store.state.colorMode == 'hex' ? color.hex : color.rgb }}
      </code>
      <h3>{{ color.name }}</h3>
    </div>
    <div class="color-card-actions">
      <button @click="addColorToPalette(color)" type="button" name="button">+</button>
      <!-- <button @click="copyColorCode(color)" type="button" name="button">+</button> -->
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['color'],
  methods: {
    addColorToPalette(color) {
      const palette = this.$store.state.palette
      if (palette.length == this.$store.state.paletteSize) {
        console.log(`Your palette can't have more than ${this.$store.state.paletteSize} colors.`)
        return
      }
      palette.push(color)
      console.log(`${color.name} added to palette!`)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/vars.scss';

.color-card {
  border-radius: $border-radius;
  margin: 0 0 20px 0;
  position: relative;

  .color-card-preview {
    border-radius: $border-radius $border-radius 0 0;
    height: 150px;
  }

  .color-card-info {
    border: 1px solid darken($color-white, 10%);
    border-top: none;
    border-radius: 0 0 $border-radius $border-radius;
    font-family: $font-family;
    padding: 10px;

    code {
      color: darken($color-white, 20%);
      font-family: 'Monaco';
      font-size: 0.8em;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    h3 {
      font-size: 1em;
      margin: 10px 0 0 0;
    }
  }

  button {
    -webkit-appearance: none;
    background: $color-white;
    border: 1px solid darken($color-white, 10%);
    border-radius: 50%;
    font-size: 1em;
    margin: 0 0 0 5px;
    height: 25px;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 25px;
  }
}
</style>
