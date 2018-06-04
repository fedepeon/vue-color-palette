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
      <button @click="addColorToPalette(color)" class="add" :title="`Add ${color.name} to your palette`" type="button" name="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <button @click="copyColorCode(color)" class="copy" title="Copy color to your clipboard" type="button" name="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      </button>
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
    },
    copyColorCode(color) {
      const body = document.querySelector('body')
      const tmpInput = document.createElement("INPUT")
      const colorCode = this.$store.state.colorMode === 'hex' ? color.hex : color.rgb
      body.appendChild(tmpInput)
      tmpInput.setAttribute('value', colorCode)
      tmpInput.select()
      document.execCommand('Copy')
      body.removeChild(tmpInput)
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
    align-items: center;
    -webkit-appearance: none;
    background: $color-white;
    border: 1px solid darken($color-white, 10%);
    border-radius: 50%;
    display: flex;
    height: 25px;
    position: absolute;
    width: 25px;

    svg {
      width: 10px;
    }

    &.add {
      right: 10px;
      top: 10px;
    }

    &.copy {
      right: 10px;
      top: 45px;
    }
  }

  &:last-child {
    margin: 0;
  }
}

@media(min-width: 500px) {
  .color-card:nth-child(2n+1):nth-last-child(-n+2),
    .color-card:nth-child(2n+1):nth-last-child(-n+2) ~ .color-card {
    margin: 0;
  }
}

@media(min-width: 900px) {
  .color-card:nth-child(3n+1):nth-last-child(-n+3),
    .color-card:nth-child(3n+1):nth-last-child(-n+3) ~ .color-card {
    margin: 0;
  }
}

@media(min-width: 1100px) {
  .color-card:nth-child(4n+1):nth-last-child(-n+4),
    .color-card:nth-child(4n+1):nth-last-child(-n+4) ~ .color-card {
    margin: 0;
  }
}
</style>
