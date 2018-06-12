<template lang="html">
  <aside>
    <div class="aside-section">
      <h2>Search color</h2>
      <input v-model="search" type="search" placeholder="Caribbean blue...">
    </div>

    <div class="aside-section">
      <h2>Switch color code</h2>
      <div class="switcher">
        <input v-model="colorMode" type="radio" name="color-code" id="code-hex" value="hex" checked="checked">
        <label for="code-hex">HEX</label>

        <input v-model="colorMode" type="radio" name="color-code" id="code-rgb" value="rgb">
        <label for="code-rgb">RGB</label>
      </div>
    </div>

    <div class="aside-section">
      <button @click="resetFilters" :disabled="isReset" type="button" name="button">Reset filters</button>
    </div>

    <div class="aside-section">
      <h2>About this</h2>
      <p>This is a Vuejs learning project made by <a href="https://twitter.com/bellanger_q" target="_blank" rel="noopener">Quentin</a>. It's open source and the code is available <a href="https://github.com/bellangerq/vue-color-palette" target="_blank" rel="noopener">here</a>.</p>
    </div>
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
      border: 2px solid darken($color-white, 10%);
      border-radius: 4px;
      font-size: 1em;
      padding: 10px 20px;
      transition: border 0.3s ease;
      width: 100%;

      &:focus {
        border-color: $color-main;
        outline: none;
      }

      &::-webkit-input-placeholder {
        color: darken($color-white, 10%);
      }
      &::-moz-placeholder {
        color: darken($color-white, 10%);
      }
      &:-ms-input-placeholder {
        color: darken($color-white, 10%);
      }
      &:-moz-placeholder {
        color: darken($color-white, 10%);
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
        background: darken($color-white, 10%);

        &:hover {
          cursor: not-allowed;
        }
      }
    }

    p {
      font-family: $font-family;
      line-height: 1.4em;

      a {
        color: $color-main;
        text-decoration: none;

        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }
    }

    &:last-child {
      margin: 0;
    }
  }

  .switcher {
    display: flex;
    justify-content: space-between;

    input[type="radio"] {
      display: none;
    }

    input[type="radio"]:checked + label {
      background: $color-main;
      color: $color-white;
    }

    label {
      background: $color-white;
      border: 2px solid $color-main;
      border-radius: $border-radius;
      flex: 1;
      font-family: $font-family;
      padding: 10px 20px;
      text-align: center;
      transition: background 0.3s ease, color 0.3s ease;

      &:last-child {
        margin-left: 20px;
      }
    }
  }

  @media (min-width: 768px) {
    float: left;
    margin: 0 20px 20px 0;
    width: 250px;
  }
}
</style>
