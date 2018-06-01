<template lang="html">
  <aside>
    <div class="aside-section">
      <h2>Search color</h2>
      <input v-model="search" type="search" placeholder="Caribbean blue...">
    </div>

    <div class="aside-section">
      <h2>Switch code display</h2>
      <form>
        <label for="code-hex">Hex</label>
        <input v-model="colorMode" type="radio" name="color-code" id="code-hex" value="hex" checked="checked">

        <label for="code-rgb">RGB</label>
        <input v-model="colorMode" type="radio" name="color-code" id="code-rgb" value="rgb">
      </form>
    </div>

    <button @click="resetFilters" :disabled="isReset" type="button" name="button">Reset filters</button>
  </aside>
</template>

<script type="text/javascript">
  export default {
    computed: {
      isReset() {
        return this.search == '' && this.colorMode == 'hex'
      },
      colorMode: {
        get() {
          return this.$store.state.colorMode
        },
        set(newColorMode) {
          this.$store.commit('updateColorMode', newColorMode)
        }
      },
      search: {
        get() {
          return this.$store.state.search
        },
        set(newSearch) {
          this.$store.commit('updateSearch', newSearch)
        }
      }
    },
    methods: {
      resetFilters() {
        this.$store.commit('updateColorMode', 'hex')
        this.search = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/css/vars.scss';

aside {
  background: $color-white;
  margin: 0 0 20px 0;
  padding: 20px;

  .aside-section {
    margin: 0 0 40px 0;

    h2 {
      font-family: $font-family;
      font-size: 1.2em;
      font-weight: 400;
      margin: 0 0 20px 0;
    }

    input[type="search"] {
      -webkit-appearance: none;
      border: none;
      border-bottom: 1px solid darken($color-white, 10%);
      font-size: 1em;
      padding: 5px 0;
      width: 100%;

      &:focus {
        border-bottom-color: $color-main;
        outline: none;
      }
    }
  }

  button {
    background: $color-main;
    border: none;
    border-radius: $border-radius;
    color: $color-white;
    font-size: 1em;
    font-weight: 600;
    padding: 15px 30px;
    width: 100%;

    &:disabled {
      background: darken($color-white, 20%);
    }
  }
}
</style>
